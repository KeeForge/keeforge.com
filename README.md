# keeforge.com

The marketing site for [KeeForge](https://github.com/KeeForge/KeeForge), a
KeePass-compatible iOS password manager, plus the source of the Cloudflare
Worker that receives in-app feedback.

## Pages

- `/` — homepage (hero, screenshots, features, comparison, FAQ)
- `/vs/keepassium` — KeeForge vs KeePassium comparison
- `/vs/strongbox` — KeeForge vs Strongbox comparison
- `/privacy` — privacy policy
- `/security-audit` — public security audit record (English only)
- `/appcast.xml` — Sparkle update feed for the direct-download Mac app (see
  [Sparkle appcast](#sparkle-appcast))

German, French, Spanish, Simplified Chinese, Traditional Chinese, and Japanese translations of every page except `/security-audit` live under `/de/`, `/fr/`, `/es/`, `/zh-hans/`, `/zh-hant/`, and `/ja/`.

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
handles their data, and this is the code that receives it.

```bash
npm run test:worker
```

### API contract

| Request | Response |
| --- | --- |
| `POST /api/feedback` | `202` `{"ok":true,"id":"<uuid>"}` on success |
| `GET /api/feedback` | `405` `{"ok":false,"error":"method_not_allowed"}` (on the feedback host, without an ASSETS binding) |
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
`worker/index.js`. `MAX_FIELD_LENGTHS` also caps six top-level fields
(`errorCode`, `errorCategory`, `appVersion`, `buildNumber`, `osVersion`,
`deviceModel`) that older app builds sent; the current app folds that
information into `details` and never sends them, but the Worker still accepts
and stores them.

### Behavior

The Worker validates the payload, stores an attached photo in R2, and inserts
one row per submission into D1. That is the entire request path — the feedback
path makes no outbound requests and has no third-party integrations.

Submissions do not stop at D1, though. A separate maintainer-side tool polls the
database and relays new submissions as a notification, so that feedback does not
sit unread. That notification carries the message, the diagnostics, and the
follow-up email address when one was given; it does not carry the attached
photo.

See the [privacy policy](https://keeforge.com/privacy) for what the feedback
form collects and how long submissions are kept.

If the R2 binding is absent the submission is still stored, just without the
attachment. Only a failed D1 insert fails the request.

### Site routing

The same Worker also handles browser-language routing for keeforge.com when
the private deployment config points site paths at it. On a `GET` it first
runs the locale logic, then falls through to normal static serving:

- `/` redirects (302, uncached) to `/<locale>/` based on the `kf_lang` cookie,
  or failing that the `Accept-Language` header; English stays on `/`.
- `?setlang=1` on any localized path records that choice in a one-year
  `kf_lang` cookie and redirects to the same path without the marker.
- Every other path is a deep link and is never redirected.
- `/appcast.xml` is exempt from all of the above: no redirect and no cookie,
  even with `Accept-Language`, `kf_lang`, or `?setlang=1`.
- `HEAD` is handled exactly like `GET`.
- Anything not redirected is served from the `ASSETS` binding when one is
  configured, and otherwise proxied to the static origin with
  `fetch(request)`. On `feedback.keeforge.com` unmatched `GET`s still return
  `405`.

## Sparkle appcast

`public/appcast.xml` is the Sparkle feed polled by the direct-download (non-App
Store) Mac app, which has `https://keeforge.com/appcast.xml` built in. It is
served with `Content-Type: application/xml` and a 5-minute cache via
`public/_headers`.

The feed starts with channel metadata and **no items**, and stays that way until
a release is approved for production. Never add placeholder, candidate, or
hand-edited items.

Update archives are hosted on immutable GitHub Releases in the app repo, never
on this site:

```
https://github.com/KeeForge/KeeForge/releases/download/v{version}/KeeForge-{version}-b{repoBuild}.zip
```

Publishing an update (driven from the app repo's release tooling,
`ci_scripts/release_direct_artifact.sh`):

1. `handoff` builds the staged feed from the current `public/appcast.xml` plus
   the new item. `sparkle:edSignature` and `length` come from the exact signed
   ZIP; older items are kept, and duplicate versions or builds are refused.
2. After production approval, the GitHub Release is published and the asset is
   downloaded anonymously from the URL above. Its SHA-256 must match the staged
   artifact.
3. `publish-appcast --destination public/appcast.xml` replaces this file only if
   it is unchanged since staging. Then run `npm run test:worker`, commit, and push.

Rules:

- Enclosures always use the versioned URL above, never `releases/latest/download`.
- Never commit ZIPs, signing keys, or any other release artifact to this repo.
- Never remove older items; Sparkle needs them for users on older builds.

## Deployment

The site is built with Astro and deployed by Cloudflare Pages (project
`keeforge`: `npm run build`, output `dist/`). Every push to `main` deploys
automatically, and that includes changes to `public/appcast.xml`. Requests to
`keeforge.com/*` pass through the Worker first, which handles locale routing
and otherwise proxies to the Pages origin.

The Worker's `wrangler.toml`, Cloudflare resource topology, rate-limiting
configuration, and operational runbook live in the private `keeforge-infra`
repo, which deploys this Worker from a sibling checkout of this repo. Contact
the maintainer if you need access.
