# keeforge.com

The marketing site for [KeeForge](https://github.com/KeeForge/KeeForge), a
KeePass-compatible iOS password manager, plus the source of the Cloudflare
Worker that receives in-app feedback.

## Pages

- `/` — homepage (hero, screenshots, features, comparison, FAQ)
- `/vs/keepassium` — KeeForge vs KeePassium comparison
- `/vs/strongbox` — KeeForge vs Strongbox comparison
- `/privacy` — privacy policy

German and French translations of every page live under `/de/` and `/fr/`.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Feedback Worker

`worker/index.js` is the Cloudflare Worker behind
`https://feedback.keeforge.com/api/feedback`, the endpoint the KeeForge app
posts in-app feedback to.

The source is public on purpose. KeeForge's [privacy
policy](https://keeforge.com/privacy) tells users they can audit the code that
handles their data, and this is the code that receives it. Deployment
configuration is not public — it lives in a separate private repo.

```bash
npm run test:worker
```

### API contract

| Request | Response |
| --- | --- |
| `POST /api/feedback` | `202` `{"ok":true,"id":"<uuid>"}` on success |
| `GET /api/feedback` | `405` `{"ok":false,"error":"method_not_allowed"}` |
| `OPTIONS /api/feedback` | `204`, no body |

The app submits a narrow, sanitized payload:

```json
{
  "message": "string",
  "details": "string",
  "consentToContact": true,
  "contact": "string (follow-up email)",
  "photo": {
    "data": "base64 string",
    "contentType": "image/jpeg"
  }
}
```

`consentToContact`, `contact`, and `photo` are optional and omitted entirely
unless the user opts in. `contact` is only accepted, and only stored, when
`consentToContact` is `true`.

`photo` holds a single image the user attached. The app downscales it
on-device and re-encodes it as JPEG, stripping EXIF/GPS metadata, capped at
5 MB of image bytes.

`details` is empty for general feedback. For a database-open failure it contains
the error information and diagnostics that were displayed in the feedback form
*before* the user pressed Send: app and device metadata, cloud status, short
hash prefixes, encrypted file size, and a KDBX header summary.

The endpoint is intentionally narrow. It must never receive vault contents,
entries, passwords, key files, raw database files, or unsanitized logs.

### Rejections

| Error | Status | Cause |
| --- | --- | --- |
| `invalid_json` | 400 | body is not valid JSON |
| `message_required` | 400 | `message` is empty after trimming |
| `contact_required` | 400 | `consentToContact` is true with no `contact` |
| `invalid_photo` | 400 | malformed or empty base64 |
| `unsupported_photo_type` | 400 | content type is not JPEG or PNG |
| `photo_too_large` | 400 | decoded photo exceeds 5 MB |
| `payload_too_large` | 413 | request body exceeds 8 MB |
| `rate_limited` | 429 | blocked by the Cloudflare rate-limiting rule |
| `internal_error` | 500 | unhandled failure |

Field lengths are capped server-side; see `MAX_FIELD_LENGTHS` in
`worker/index.js`.

### Behavior

The Worker validates the payload, stores an attached photo in R2, and inserts
one row per submission into D1. That is the entire request path — the Worker
itself makes no outbound requests and has no third-party integrations.

Submissions do not stop at D1, though. A separate maintainer-side tool polls the
database and relays new submissions as a notification, so that feedback does not
sit unread. That notification carries the message, the diagnostics, and the
follow-up email address when one was given; it does not carry the attached
photo.

See the [privacy policy](https://keeforge.com/privacy) for what the feedback
form collects and how long submissions are kept.

If the R2 binding is absent the submission is still stored, just without the
attachment. Only a failed D1 insert fails the request.

Retention and deletion of submissions are described in the [privacy
policy](https://keeforge.com/privacy).

## Deployment

The site is built with Astro and served by Cloudflare.

The Worker's `wrangler.toml`, Cloudflare resource topology, rate-limiting
configuration, and operational runbook live in the private `keeforge-infra`
repo, which deploys this Worker from a sibling checkout of this repo. Contact
the maintainer if you need access.
