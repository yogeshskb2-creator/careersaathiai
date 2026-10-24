// Talks to the optional AI chat server (server/chat-worker.js).
// The browser never holds an API key. Verified website facts are sent along so the
// AI can only cite real courses, providers, links and dates.

import { CHAT_CONFIG } from "./chat-config.js";

/** An error with a `kind` the page can explain to the visitor. */
export function ChatError(kind, message) {
  const err = new Error(message || kind);
  err.name = "ChatError";
  err.kind = kind;
  return err;
}

/** Removes any web address the AI wrote that is not in the verified facts. */
export function stripUnverifiedLinks(text, facts) {
  const allowed = new Set();
  const walk = (v) => {
    if (typeof v === "string" && /^https?:\/\//.test(v)) allowed.add(v.replace(/\/$/, ""));
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  };
  walk(facts);
  return String(text).replace(/https?:\/\/[^\s)\]>"']+/g, (u) => {
    const clean = u.replace(/[.,;:!?]+$/, "");
    return allowed.has(clean.replace(/\/$/, "")) ? u : "[link removed — not in our verified data]";
  });
}

/**
 * history: [{ role: "user" | "assistant", text }]  (most recent last)
 * Returns the reply text. Throws ChatError with kind:
 *   "off" | "timeout" | "network" | "rate" | "server" | "bad"
 */
export async function askAI(history, facts, lang, { endpoint = CHAT_CONFIG.aiEndpoint, fetchImpl = globalThis.fetch, timeoutMs = CHAT_CONFIG.timeoutMs } = {}) {
  if (!endpoint) throw ChatError("off");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let res;
  try {
    res = await fetchImpl(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history.slice(-CHAT_CONFIG.maxHistory), facts, lang }),
      signal: controller.signal,
      credentials: "omit"
    });
  } catch (err) {
    throw ChatError(err && err.name === "AbortError" ? "timeout" : "network");
  } finally {
    clearTimeout(timer);
  }
  if (res.status === 429) throw ChatError("rate");
  if (!res.ok) throw ChatError("server", String(res.status));
  let data;
  try { data = await res.json(); } catch { throw ChatError("bad"); }
  if (!data || typeof data.reply !== "string" || !data.reply.trim() || data.reply.length > 6000) throw ChatError("bad");
  return stripUnverifiedLinks(data.reply.trim(), facts);
}
