const JSON_HEADERS = { "content-type": "application/json; charset=UTF-8" };

const MAX_FIELD_LENGTHS = {
  message: 4000,
  errorCode: 256,
  errorCategory: 256,
  appVersion: 64,
  buildNumber: 64,
  osVersion: 128,
  deviceModel: 128,
  details: 8000,
  contact: 512,
};

// The app caps photos at 5 MB of JPEG bytes; base64 inflates that by ~4/3,
// so allow enough headroom for the photo plus the text fields.
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
const MAX_BODY_BYTES = 8 * 1024 * 1024;
const ALLOWED_PHOTO_CONTENT_TYPES = new Set(["image/jpeg", "image/png"]);
const PHOTO_EXTENSIONS = { "image/jpeg": "jpg", "image/png": "png" };

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: JSON_HEADERS });
}

function sanitizeString(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

// Returns { photo: { bytes, contentType } | null } or { error: string }.
function parsePhoto(rawPhoto) {
  if (rawPhoto === undefined || rawPhoto === null) return { photo: null };
  if (typeof rawPhoto !== "object") return { error: "invalid_photo" };

  const contentType = sanitizeString(rawPhoto.contentType, 64).toLowerCase();
  if (!ALLOWED_PHOTO_CONTENT_TYPES.has(contentType)) {
    return { error: "unsupported_photo_type" };
  }

  if (typeof rawPhoto.data !== "string" || !rawPhoto.data) {
    return { error: "invalid_photo" };
  }

  let binary;
  try {
    binary = atob(rawPhoto.data);
  } catch {
    return { error: "invalid_photo" };
  }

  if (binary.length === 0) return { error: "invalid_photo" };
  if (binary.length > MAX_PHOTO_BYTES) return { error: "photo_too_large" };

  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  return { photo: { bytes, contentType } };
}

// Columns added after the table first shipped; ensureSchema backfills them on
// databases created before the photo feature existed.
const MIGRATED_COLUMNS = [
  ["photo_key", "TEXT NOT NULL DEFAULT ''"],
  ["photo_content_type", "TEXT NOT NULL DEFAULT ''"],
  ["photo_size", "INTEGER NOT NULL DEFAULT 0"],
];

let schemaEnsured = false;

async function ensureSchema(db) {
  if (schemaEnsured) return;

  await db.prepare(
    `CREATE TABLE IF NOT EXISTS feedback_submissions (
      id TEXT PRIMARY KEY,
      created_at TEXT NOT NULL,
      message TEXT NOT NULL,
      error_code TEXT NOT NULL,
      error_category TEXT NOT NULL,
      app_version TEXT NOT NULL,
      build_number TEXT NOT NULL,
      os_version TEXT NOT NULL,
      device_model TEXT NOT NULL,
      details TEXT NOT NULL,
      consent_to_contact INTEGER NOT NULL,
      contact TEXT NOT NULL,
      photo_key TEXT NOT NULL DEFAULT '',
      photo_content_type TEXT NOT NULL DEFAULT '',
      photo_size INTEGER NOT NULL DEFAULT 0
    )`
  ).run();

  const tableInfo = await db.prepare(`PRAGMA table_info(feedback_submissions)`).all();
  const existingColumns = new Set((tableInfo.results ?? []).map((column) => column.name));
  for (const [name, definition] of MIGRATED_COLUMNS) {
    if (!existingColumns.has(name)) {
      await db.prepare(
        `ALTER TABLE feedback_submissions ADD COLUMN ${name} ${definition}`
      ).run();
    }
  }

  schemaEnsured = true;
}

// --- Browser-language auto-detection for the static site -----------------
//
// This Worker's own route is https://feedback.keeforge.com/api/feedback (see
// README.md); the wrangler.toml that maps keeforge.com's paths to a Worker
// lives in the private keeforge-infra repo, not here. When that routing also
// points site paths at this Worker, unmatched GETs are served by the ASSETS
// binding if one is configured, and otherwise proxied to the static origin
// with fetch(request) — same-zone subrequests bypass Worker routes, so this
// cannot loop. On the feedback host unmatched GETs keep returning 405, so
// nothing here changes behavior for the feedback endpoint.
const SUPPORTED_LOCALES = ["en", "de", "fr", "es"];
const LOCALE_HOME_PATHS = { en: "/", de: "/de/", fr: "/fr/", es: "/es/" };
const LANG_COOKIE_NAME = "kf_lang";
const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

// Parses an Accept-Language header (q-values respected, RFC 9110 syntax) and
// returns the highest-priority language among SUPPORTED_LOCALES, or null if
// the header is absent or names no language this site serves.
function detectSupportedLocale(header) {
  if (!header) return null;

  const entries = header
    .split(",")
    .map((part) => {
      const [tagRaw, ...params] = part.trim().split(";");
      const tag = tagRaw.trim();
      let q = 1;
      for (const param of params) {
        const [key, value] = param.trim().split("=");
        if (key === "q") {
          const parsed = Number.parseFloat(value);
          if (!Number.isNaN(parsed)) q = parsed;
        }
      }
      return { tag, q };
    })
    .filter((entry) => entry.tag && entry.q > 0);

  // Array#sort is stable, so entries with equal q keep the header's order.
  entries.sort((a, b) => b.q - a.q);

  for (const entry of entries) {
    const primary = entry.tag.split("-")[0].toLowerCase();
    if (SUPPORTED_LOCALES.includes(primary)) return primary;
  }
  return null;
}

function readCookie(request, name) {
  const header = request.headers.get("Cookie");
  if (!header) return null;
  for (const part of header.split(";")) {
    const separatorIndex = part.indexOf("=");
    if (separatorIndex === -1) continue;
    if (part.slice(0, separatorIndex).trim() === name) {
      return part.slice(separatorIndex + 1).trim();
    }
  }
  return null;
}

// The locale a path belongs to, from its /de/, /fr/, /es/ prefix, else "en".
function localePrefixFromPath(pathname) {
  for (const code of ["de", "fr", "es"]) {
    if (pathname === `/${code}` || pathname.startsWith(`/${code}/`)) return code;
  }
  return "en";
}

function redirectResponse(location, { setCookieLocale } = {}) {
  const headers = new Headers({
    Location: location,
    // A language redirect is per-visitor (cookie- or header-driven); it must
    // never be cached and served to a different visitor.
    "Cache-Control": "no-store",
    Vary: "Accept-Language, Cookie",
  });
  if (setCookieLocale) {
    headers.append(
      "Set-Cookie",
      `${LANG_COOKIE_NAME}=${setCookieLocale}; Path=/; Max-Age=${LANG_COOKIE_MAX_AGE}; SameSite=Lax; Secure`
    );
  }
  return new Response(null, { status: 302, headers });
}

// Returns a redirect Response for the language-detection/preference-cookie
// behavior, or null when the request should fall through to normal static
// serving (deep links are always left alone).
function routeLocale(request, url) {
  const { pathname, searchParams } = url;

  // `?setlang=1` on any localized path is a deliberate choice: remember it
  // and drop the marker, no matter which path it was made from.
  if (searchParams.get("setlang") === "1") {
    const locale = localePrefixFromPath(pathname);
    const clean = new URL(url);
    clean.searchParams.delete("setlang");
    return redirectResponse(clean.pathname + clean.search, { setCookieLocale: locale });
  }

  // Detection/override only ever apply to the root; every other path
  // (including /de/, /fr/, /es/ themselves) is a deep link and is untouched.
  if (pathname !== "/") return null;

  const cookieLocale = readCookie(request, LANG_COOKIE_NAME);
  if (cookieLocale !== null && SUPPORTED_LOCALES.includes(cookieLocale)) {
    if (cookieLocale === "en") return null;
    return redirectResponse(LOCALE_HOME_PATHS[cookieLocale]);
  }

  const detected = detectSupportedLocale(request.headers.get("Accept-Language"));
  if (detected && detected !== "en") {
    return redirectResponse(LOCALE_HOME_PATHS[detected]);
  }

  return null;
}

export default {
  async fetch(request, env) {
    try {
      if (request.method === "GET") {
        const url = new URL(request.url);
        const routed = routeLocale(request, url);
        if (routed) return routed;
        if (env.ASSETS) return env.ASSETS.fetch(request);
        if (url.hostname !== "feedback.keeforge.com") return fetch(request);
        return json({ ok: false, error: "method_not_allowed" }, 405);
      }

      if (request.method === "OPTIONS") return new Response(null, { status: 204 });
      if (request.method !== "POST") {
        return json({ ok: false, error: "method_not_allowed" }, 405);
      }

      const contentLength = Number(request.headers.get("content-length") || "0");
      if (contentLength > MAX_BODY_BYTES) {
        return json({ ok: false, error: "payload_too_large" }, 413);
      }

      let payload;
      try {
        payload = await request.json();
      } catch {
        return json({ ok: false, error: "invalid_json" }, 400);
      }

      const submission = {
        message: sanitizeString(payload.message, MAX_FIELD_LENGTHS.message),
        errorCode: sanitizeString(payload.errorCode, MAX_FIELD_LENGTHS.errorCode),
        errorCategory: sanitizeString(payload.errorCategory, MAX_FIELD_LENGTHS.errorCategory),
        appVersion: sanitizeString(payload.appVersion, MAX_FIELD_LENGTHS.appVersion),
        buildNumber: sanitizeString(payload.buildNumber, MAX_FIELD_LENGTHS.buildNumber),
        osVersion: sanitizeString(payload.osVersion, MAX_FIELD_LENGTHS.osVersion),
        deviceModel: sanitizeString(payload.deviceModel, MAX_FIELD_LENGTHS.deviceModel),
        details: sanitizeString(payload.details, MAX_FIELD_LENGTHS.details),
        contact: sanitizeString(payload.contact, MAX_FIELD_LENGTHS.contact),
        consentToContact: payload.consentToContact === true,
      };

      if (!submission.message) return json({ ok: false, error: "message_required" }, 400);
      if (submission.consentToContact && !submission.contact) {
        return json({ ok: false, error: "contact_required" }, 400);
      }

      const { photo, error: photoError } = parsePhoto(payload.photo);
      if (photoError) return json({ ok: false, error: photoError }, 400);

      await ensureSchema(env.DB);

      const id = crypto.randomUUID();
      const createdAt = new Date().toISOString();

      let photoKey = "";
      if (photo) {
        if (env.PHOTOS) {
          photoKey = `photos/${id}.${PHOTO_EXTENSIONS[photo.contentType]}`;
          await env.PHOTOS.put(photoKey, photo.bytes, {
            httpMetadata: { contentType: photo.contentType },
          });
        } else {
          // A missing binding must not reject user feedback; the submission is
          // still stored, just without the attachment.
          console.warn("Photo storage skipped: PHOTOS R2 binding is not configured");
        }
      }

      await env.DB.prepare(
        `INSERT INTO feedback_submissions (
          id, created_at, message, error_code, error_category, app_version,
          build_number, os_version, device_model, details, consent_to_contact, contact,
          photo_key, photo_content_type, photo_size
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        id,
        createdAt,
        submission.message,
        submission.errorCode,
        submission.errorCategory,
        submission.appVersion,
        submission.buildNumber,
        submission.osVersion,
        submission.deviceModel,
        submission.details,
        submission.consentToContact ? 1 : 0,
        submission.consentToContact ? submission.contact : "",
        photoKey,
        photo ? photo.contentType : "",
        photo ? photo.bytes.length : 0
      ).run();

      return json({ ok: true, id }, 202);
    } catch (error) {
      return json({
        ok: false,
        error: "internal_error",
        detail: error instanceof Error ? error.message : String(error),
      }, 500);
    }
  },
};

export { parsePhoto, detectSupportedLocale };
