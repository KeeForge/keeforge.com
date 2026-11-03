import assert from "node:assert/strict";
import test from "node:test";

import worker, { htmlToText, messageIds, store } from "./index.js";

function env({ existing = null } = {}) {
  const state = { inserts: [], lookups: [], files: [], forwarded: [] };
  return {
    state,
    FORWARD_TO: "owner@example.com",
    FILES: {
      async put(key, value, options) {
        state.files.push({ key, size: value.byteLength ?? value.length, type: options?.httpMetadata?.contentType });
      },
    },
    DB: {
      prepare(sql) {
        return {
          values: [],
          bind(...values) {
            this.values = values;
            return this;
          },
          async first() {
            state.lookups.push(this.values);
            return existing;
          },
          async run() {
            if (sql.includes("INSERT INTO support_messages")) state.inserts.push(this.values);
          },
        };
      },
    },
  };
}

const mail = ({ headers = "", body = "Hello, AutoFill stopped working." } = {}) =>
  new TextEncoder().encode(
    [
      "From: Alex Reporter <alex@example.net>",
      "To: support@keeforge.com",
      "Subject: AutoFill broken",
      "Message-ID: <abc123@example.net>",
      headers,
      "Content-Type: text/plain; charset=utf-8",
      "",
      body,
    ]
      .filter((line, i) => line !== "" || i > 4)
      .join("\r\n"),
  ).buffer;

test("stores a new conversation keyed by its own Message-ID", async () => {
  const e = env();
  await store(mail(), { from: "bounce@example.net", to: "support@keeforge.com" }, e);
  const row = e.state.inserts[0];
  assert.equal(row[2], "<abc123@example.net>"); // thread_id
  assert.equal(row[3], "<abc123@example.net>"); // message_id
  assert.equal(row[6], "alex@example.net"); // header From, not the envelope
  assert.equal(row[7], "Alex Reporter");
  assert.equal(row[9], "AutoFill broken");
  assert.match(row[10], /AutoFill stopped working/);
  assert.equal(row[13], ""); // item_key
  assert.equal(e.state.files[0].type, "message/rfc822");
});

test("a reply joins the existing thread and keeps its item", async () => {
  const e = env({ existing: { thread_id: "<inapp-42@keeforge.com>", item_key: "in-app:42" } });
  await store(
    mail({ headers: "In-Reply-To: <cf-1@keeforge.com>\r\nReferences: <inapp-42@keeforge.com> <cf-1@keeforge.com>" }),
    { from: "alex@example.net", to: "support@keeforge.com" },
    e,
  );
  assert.deepEqual(e.state.lookups[0].slice(0, 2), ["<cf-1@keeforge.com>", "<inapp-42@keeforge.com>"]);
  const row = e.state.inserts[0];
  assert.equal(row[2], "<inapp-42@keeforge.com>");
  assert.equal(row[4], "<cf-1@keeforge.com>");
  assert.equal(row[5], "<inapp-42@keeforge.com> <cf-1@keeforge.com>");
  assert.equal(row[13], "in-app:42");
});

test("forwards first and never loses mail when storing fails", async () => {
  const e = env();
  e.DB.prepare = () => {
    throw new Error("D1 down");
  };
  const forwarded = [];
  const raw = new Response(mail()).body;
  const errors = console.error;
  console.error = () => {};
  try {
    await worker.email({ raw, from: "a@example.net", to: "support@keeforge.com", forward: async (to) => forwarded.push(to) }, e);
  } finally {
    console.error = errors;
  }
  assert.deepEqual(forwarded, ["owner@example.com"]);
});

test("helpers", () => {
  assert.deepEqual(messageIds("<a@b> <c@d>"), ["<a@b>", "<c@d>"]);
  assert.deepEqual(messageIds(undefined), []);
  assert.equal(htmlToText("<p>Hi&nbsp;there</p><br><style>x</style>&amp; bye"), "Hi there\n\n& bye");
});
