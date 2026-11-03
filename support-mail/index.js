// Email Worker for support@keeforge.com.
//
// Every message is forwarded to the maintainer's inbox first, exactly as plain
// Email Routing did. A copy is then stored so the maintainer's tools can track the
// conversation: the text and headers in D1 (`support_messages`), the raw message
// and attachments in R2. Storage failures never block or lose the forwarded mail.

import PostalMime from "postal-mime";

const MAX_STORED_ATTACHMENT_BYTES = 10 * 1024 * 1024;

export function messageIds(value) {
  return (value ?? "").match(/<[^<>\s]+>/g) ?? [];
}

export function htmlToText(html) {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|h[1-6]|tr)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function safeName(name, index) {
  const base = (name || `attachment-${index}`).replace(/[^A-Za-z0-9._-]/g, "_").slice(0, 100);
  return `${index}-${base}`;
}

/** Finds the conversation an incoming message belongs to from its reply headers. */
async function findThread(db, ids) {
  if (!ids.length) return null;
  const marks = ids.map(() => "?").join(",");
  return db
    .prepare(
      `SELECT thread_id, item_key FROM support_messages
       WHERE message_id IN (${marks}) OR thread_id IN (${marks})
       ORDER BY created_at LIMIT 1`,
    )
    .bind(...ids, ...ids)
    .first();
}

export async function store(raw, envelope, env) {
  const email = await PostalMime.parse(raw);
  const id = crypto.randomUUID();
  const messageId = messageIds(email.messageId)[0] ?? `<${id}@support.keeforge.com>`;
  const refs = messageIds(email.references);
  const inReplyTo = messageIds(email.inReplyTo)[0] ?? "";
  const known = await findThread(env.DB, [...new Set([inReplyTo, ...refs].filter(Boolean))]);

  const rawKey = `support/${id}.eml`;
  await env.FILES.put(rawKey, raw, { httpMetadata: { contentType: "message/rfc822" } });

  const attachments = [];
  for (const [index, a] of (email.attachments ?? []).entries()) {
    const size = a.content?.byteLength ?? 0;
    if (!size || size > MAX_STORED_ATTACHMENT_BYTES) continue;
    const key = `support/${id}/${safeName(a.filename, index)}`;
    await env.FILES.put(key, a.content, {
      httpMetadata: { contentType: a.mimeType || "application/octet-stream" },
    });
    attachments.push({ key, filename: a.filename ?? "", content_type: a.mimeType ?? "", size });
  }

  await env.DB.prepare(
    `INSERT INTO support_messages
       (id, direction, created_at, thread_id, message_id, in_reply_to, refs,
        from_addr, from_name, to_addr, subject, body_text, attachments, raw_key, item_key)
     VALUES (?, 'in', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      id,
      new Date().toISOString(),
      known?.thread_id ?? messageId,
      messageId,
      inReplyTo,
      refs.join(" "),
      email.from?.address || envelope.from,
      email.from?.name ?? "",
      envelope.to,
      email.subject ?? "",
      email.text?.trim() || htmlToText(email.html ?? ""),
      JSON.stringify(attachments),
      rawKey,
      known?.item_key ?? "",
    )
    .run();
  return id;
}

export default {
  async email(message, env) {
    // Read the bytes before forwarding: the raw stream can be consumed only once.
    const raw = await new Response(message.raw).arrayBuffer();
    await message.forward(env.FORWARD_TO);
    try {
      await store(raw, { from: message.from, to: message.to }, env);
    } catch (error) {
      console.error("support-mail: storing a copy failed", error);
    }
  },
};
