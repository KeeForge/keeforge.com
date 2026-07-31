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

export default {
  async fetch(request, env) {
    try {
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

export { parsePhoto };
