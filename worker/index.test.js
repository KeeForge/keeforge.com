import assert from "node:assert/strict";
import { Buffer } from "node:buffer";
import test from "node:test";

import worker, { parsePhoto } from "./index.js";

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
