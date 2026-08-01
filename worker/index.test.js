import assert from "node:assert/strict";
import { Buffer } from "node:buffer";
import test from "node:test";

import worker, { parsePhoto, detectSupportedLocale } from "./index.js";

const ALL_COLUMNS = [
  "id", "created_at", "message", "error_code", "error_category", "app_version",
  "build_number", "os_version", "device_model", "details", "consent_to_contact",
  "contact", "photo_key", "photo_content_type", "photo_size",
];

function database() {
  const state = { inserted: false, insertedValues: null };
  return {
    state,
    prepare(sql) {
      return {
        values: [],
        bind(...values) {
          this.values = values;
          return this;
        },
        async run() {
          if (sql.includes("INSERT INTO")) {
            state.inserted = true;
            state.insertedValues = this.values;
          }
        },
        async all() {
          if (sql.includes("PRAGMA table_info")) {
            return { results: ALL_COLUMNS.map((name) => ({ name })) };
          }
          return { results: [] };
        },
      };
    },
  };
}

function photoBucket() {
  const state = { puts: [] };
  return {
    state,
    async put(key, bytes, options) {
      state.puts.push({ key, bytes, options });
    },
  };
}

function feedbackRequest(body) {
  return new Request("https://feedback.keeforge.com/api/feedback", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

function siteRequest(path, { acceptLanguage, cookie } = {}) {
  const headers = {};
  if (acceptLanguage !== undefined) headers["Accept-Language"] = acceptLanguage;
  if (cookie !== undefined) headers["Cookie"] = cookie;
  return new Request(`https://keeforge.com${path}`, { method: "GET", headers });
}

function assetsBinding() {
  const state = { requests: [] };
  return {
    state,
    async fetch(request) {
      state.requests.push(request.url);
      return new Response("static page", { status: 200 });
    },
  };
}

test("a successful submission is stored and acknowledged", async () => {
  const DB = database();
  const response = await worker.fetch(
    feedbackRequest({ message: "Useful feedback" }),
    { DB }
  );

  assert.equal(response.status, 202);
  assert.equal(DB.state.inserted, true);
});

test("invalid submissions do not write", async () => {
  const DB = database();
  const response = await worker.fetch(
    feedbackRequest({ message: " " }),
    { DB }
  );

  assert.equal(response.status, 400);
  assert.equal(DB.state.inserted, false);
});

test("a photo submission stores the photo in R2 and records metadata in D1", async () => {
  const DB = database();
  const PHOTOS = photoBucket();
  const photoBytes = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 1, 2, 3]);

  const response = await worker.fetch(
    feedbackRequest({
      message: "Screenshot attached",
      consentToContact: true,
      contact: "user@example.com",
      photo: {
        data: Buffer.from(photoBytes).toString("base64"),
        contentType: "image/jpeg",
      },
    }),
    { DB, PHOTOS }
  );

  assert.equal(response.status, 202);
  const { id } = await response.json();

  assert.equal(PHOTOS.state.puts.length, 1);
  const put = PHOTOS.state.puts[0];
  assert.equal(put.key, `photos/${id}.jpg`);
  assert.deepEqual(new Uint8Array(put.bytes), photoBytes);
  assert.equal(put.options.httpMetadata.contentType, "image/jpeg");

  const values = DB.state.insertedValues;
  assert.equal(values[ALL_COLUMNS.indexOf("photo_key")], `photos/${id}.jpg`);
  assert.equal(values[ALL_COLUMNS.indexOf("photo_content_type")], "image/jpeg");
  assert.equal(values[ALL_COLUMNS.indexOf("photo_size")], photoBytes.length);
  assert.equal(values[ALL_COLUMNS.indexOf("contact")], "user@example.com");
  assert.equal(values[ALL_COLUMNS.indexOf("consent_to_contact")], 1);
});

test("a submission without a photo does not touch R2 and records empty metadata", async () => {
  const DB = database();
  const PHOTOS = photoBucket();

  const response = await worker.fetch(
    feedbackRequest({ message: "No photo here" }),
    { DB, PHOTOS }
  );

  assert.equal(response.status, 202);
  assert.equal(PHOTOS.state.puts.length, 0);
  const values = DB.state.insertedValues;
  assert.equal(values[ALL_COLUMNS.indexOf("photo_key")], "");
  assert.equal(values[ALL_COLUMNS.indexOf("photo_content_type")], "");
  assert.equal(values[ALL_COLUMNS.indexOf("photo_size")], 0);
});

test("an oversized photo is rejected without writing", async () => {
  const DB = database();
  const PHOTOS = photoBucket();

  const response = await worker.fetch(
    feedbackRequest({
      message: "Huge photo",
      photo: {
        data: Buffer.alloc(5 * 1024 * 1024 + 1).toString("base64"),
        contentType: "image/jpeg",
      },
    }),
    { DB, PHOTOS }
  );

  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), { ok: false, error: "photo_too_large" });
  assert.equal(DB.state.inserted, false);
  assert.equal(PHOTOS.state.puts.length, 0);
});

test("parsePhoto validates content type, base64, and emptiness", () => {
  assert.deepEqual(parsePhoto(undefined), { photo: null });
  assert.deepEqual(parsePhoto(null), { photo: null });
  assert.equal(parsePhoto("not-an-object").error, "invalid_photo");
  assert.equal(parsePhoto({ data: "AAAA", contentType: "image/gif" }).error, "unsupported_photo_type");
  assert.equal(parsePhoto({ data: "AAAA", contentType: "application/pdf" }).error, "unsupported_photo_type");
  assert.equal(parsePhoto({ data: "%%%not-base64%%%", contentType: "image/jpeg" }).error, "invalid_photo");
  assert.equal(parsePhoto({ data: "", contentType: "image/jpeg" }).error, "invalid_photo");
  assert.equal(parsePhoto({ contentType: "image/jpeg" }).error, "invalid_photo");

  const parsed = parsePhoto({
    data: Buffer.from([1, 2, 3]).toString("base64"),
    contentType: "image/png",
  });
  assert.equal(parsed.photo.contentType, "image/png");
  assert.deepEqual(Array.from(parsed.photo.bytes), [1, 2, 3]);
});

test("consent without a contact is rejected", async () => {
  const DB = database();
  const response = await worker.fetch(
    feedbackRequest({ message: "Reply to me", consentToContact: true }),
    { DB }
  );

  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), { ok: false, error: "contact_required" });
  assert.equal(DB.state.inserted, false);
});

// --- Browser-language auto-detection --------------------------------------

test("detectSupportedLocale respects q-value ordering over header order", () => {
  assert.equal(detectSupportedLocale("en;q=0.5, fr;q=0.9"), "fr");
  assert.equal(detectSupportedLocale("de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7"), "de");
  assert.equal(detectSupportedLocale("zh;q=0.9, fr;q=0.1"), "fr");
  assert.equal(detectSupportedLocale(null), null);
  assert.equal(detectSupportedLocale(""), null);
  assert.equal(detectSupportedLocale("zh-CN,zh;q=0.9"), null);
  assert.equal(detectSupportedLocale("fr;q=0"), null);
});

for (const locale of ["de", "fr", "es"]) {
  test(`GET / redirects to /${locale}/ when Accept-Language prefers ${locale}`, async () => {
    const response = await worker.fetch(
      siteRequest("/", { acceptLanguage: `${locale}-XX,${locale};q=0.9,en;q=0.1` }),
      {}
    );

    assert.equal(response.status, 302);
    assert.equal(response.headers.get("Location"), `/${locale}/`);
    assert.equal(response.headers.get("Cache-Control"), "no-store");
    assert.equal(response.headers.get("Vary"), "Accept-Language, Cookie");
    assert.equal(response.headers.get("Set-Cookie"), null);
  });
}

test("GET / respects q-value ordering, not header order, when picking a locale", async () => {
  const response = await worker.fetch(
    siteRequest("/", { acceptLanguage: "en;q=0.5, fr;q=0.9" }),
    {}
  );

  assert.equal(response.status, 302);
  assert.equal(response.headers.get("Location"), "/fr/");
});

test("GET / without an Accept-Language header is not redirected", async () => {
  const response = await worker.fetch(siteRequest("/"), {});

  assert.notEqual(response.status, 302);
  assert.equal(response.headers.get("Location"), null);
});

test("GET / with an unsupported Accept-Language is not redirected", async () => {
  const response = await worker.fetch(
    siteRequest("/", { acceptLanguage: "zh-CN,zh;q=0.9,ja;q=0.8" }),
    {}
  );

  assert.notEqual(response.status, 302);
  assert.equal(response.headers.get("Location"), null);
});

test("a kf_lang cookie overrides Accept-Language detection", async () => {
  const response = await worker.fetch(
    siteRequest("/", { cookie: "kf_lang=de", acceptLanguage: "fr;q=0.9" }),
    {}
  );

  assert.equal(response.status, 302);
  assert.equal(response.headers.get("Location"), "/de/");
});

test("a kf_lang=en cookie suppresses detection", async () => {
  const response = await worker.fetch(
    siteRequest("/", { cookie: "kf_lang=en", acceptLanguage: "de;q=0.9,fr;q=0.8" }),
    {}
  );

  assert.notEqual(response.status, 302);
  assert.equal(response.headers.get("Location"), null);
});

test("deep links are never redirected regardless of cookie or Accept-Language", async () => {
  const withoutAssets = await worker.fetch(
    siteRequest("/privacy", { cookie: "kf_lang=de", acceptLanguage: "de;q=0.9" }),
    {}
  );
  assert.notEqual(withoutAssets.status, 302);
  assert.equal(withoutAssets.headers.get("Location"), null);

  const localeHome = await worker.fetch(
    siteRequest("/de/", { cookie: "kf_lang=fr", acceptLanguage: "fr;q=0.9" }),
    {}
  );
  assert.notEqual(localeHome.status, 302);
  assert.equal(localeHome.headers.get("Location"), null);

  const ASSETS = assetsBinding();
  const withAssets = await worker.fetch(
    siteRequest("/vs/keepassium", { cookie: "kf_lang=de", acceptLanguage: "de;q=0.9" }),
    { ASSETS }
  );
  assert.notEqual(withAssets.status, 302);
  assert.equal(ASSETS.state.requests.length, 1);
});

test("?setlang=1 on the English root sets the cookie and cleans the URL", async () => {
  const response = await worker.fetch(siteRequest("/?setlang=1"), {});

  assert.equal(response.status, 302);
  assert.equal(response.headers.get("Location"), "/");
  assert.equal(
    response.headers.get("Set-Cookie"),
    "kf_lang=en; Path=/; Max-Age=31536000; SameSite=Lax; Secure"
  );
});

for (const locale of ["de", "fr", "es"]) {
  test(`?setlang=1 on /${locale}/ sets the ${locale} cookie and cleans the URL`, async () => {
    const response = await worker.fetch(siteRequest(`/${locale}/?setlang=1`), {});

    assert.equal(response.status, 302);
    assert.equal(response.headers.get("Location"), `/${locale}/`);
    assert.equal(
      response.headers.get("Set-Cookie"),
      `kf_lang=${locale}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`
    );
  });
}

test("?setlang=1 also works on non-home localized paths, scoped to that path's locale", async () => {
  const german = await worker.fetch(siteRequest("/de/vs/keepassium?setlang=1"), {});
  assert.equal(german.status, 302);
  assert.equal(german.headers.get("Location"), "/de/vs/keepassium");
  assert.match(german.headers.get("Set-Cookie"), /^kf_lang=de;/);

  const english = await worker.fetch(siteRequest("/privacy?setlang=1"), {});
  assert.equal(english.status, 302);
  assert.equal(english.headers.get("Location"), "/privacy");
  assert.match(english.headers.get("Set-Cookie"), /^kf_lang=en;/);
});

test("GET requests fall through to the ASSETS binding for normal static serving", async () => {
  const ASSETS = assetsBinding();
  const response = await worker.fetch(siteRequest("/de/"), { ASSETS });

  assert.equal(response.status, 200);
  assert.equal(await response.text(), "static page");
  assert.equal(ASSETS.state.requests.length, 1);
});

test("GET /api/feedback still returns method_not_allowed when no ASSETS binding is configured", async () => {
  const response = await worker.fetch(
    new Request("https://feedback.keeforge.com/api/feedback", { method: "GET" }),
    {}
  );

  assert.equal(response.status, 405);
  assert.deepEqual(await response.json(), { ok: false, error: "method_not_allowed" });
});
