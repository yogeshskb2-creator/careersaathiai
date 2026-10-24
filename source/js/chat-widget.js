// CareerSaathi Assistant — floating chat button and panel, added to every page.
// Privacy: no login, no personal details. The conversation is kept only in this
// browser tab (sessionStorage) and is deleted by "New chat", by closing the tab,
// or by "Delete my saved data" on the Privacy page. In guide mode nothing leaves
// the browser. AI mode (only if configured AND switched on by the visitor) sends
// the messages to our chat server and Google Gemini.

import { t } from "./i18n.js";
import { esc, extLink, formatDate } from "./ui.js";
import { getJSON, setJSON, removeItem } from "./storage.js";
import { respond, newContext, welcome, retrieveFacts, MAX_INPUT } from "./chat-engine.js";
import { askAI } from "./chat-ai.js";
import { CHAT_CONFIG } from "./chat-config.js";
import { todayISO } from "./vacancy-match.js";
import { ALL_SKILLS, labelOf } from "../data/options.js";

const KEY = "chat";
const PAGE_LABEL = {
  "jobs.html": "nav.jobs", "courses.html": "nav.courses", "recommendations.html": "nav.recommendations",
  "quiz.html": "nav.quiz", "roadmap.html": "nav.roadmap", "scholarships.html": "nav.scholarships",
  "schemes.html": "nav.schemes", "private-jobs.html": "nav.privateJobs", "profile.html": "nav.profile"
};
const COST_KEY = { free: "sd.cost.free", "free-exam-fee": "sd.cost.freeExam", fee: "sd.cost.fee" };

let getLang = () => "en";
const L = () => getLang();
const tt = (k, v) => t(k, L(), v);
const txt = (o) => (o ? o[L()] || o.en : "");

const state = { open: false, messages: [], ctx: null, busy: false, useAI: false, lastFailed: null };

// ---------- storage (this tab only) ----------
function load() {
  const saved = getJSON(KEY, null, "session");
  if (saved && Array.isArray(saved.messages) && saved.ctx && typeof saved.ctx === "object") {
    state.messages = saved.messages.slice(-60);
    state.ctx = saved.ctx;
    state.useAI = Boolean(saved.useAI && CHAT_CONFIG.aiEndpoint);
  }
  if (!state.ctx) state.ctx = newContext(todayISO());
  state.ctx.today = todayISO(); // dates are always worked out fresh
}
function save() { setJSON(KEY, { messages: state.messages.slice(-60), ctx: state.ctx, useAI: state.useAI }, "session"); }
function reset() {
  removeItem(KEY, "session");
  state.messages = []; state.ctx = newContext(todayISO()); state.lastFailed = null; state.busy = false;
}

// ---------- drawing ----------
function formatText(s) {
  // Escape first, then allow **bold** and line breaks only.
  return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
}

function cardHtml(c) {
  const skill = labelOf(ALL_SKILLS, c.skill, L());
  return `
  <li class="cs-card">
    <strong>${esc(txt(c.title))}</strong>
    <span class="cs-card-prov">${esc(txt(c.provider))}</span>
    <span class="cs-card-meta">✓ ${esc(tt("chat.verifiedFor", { skill }))}</span>
    <span class="cs-card-meta">${esc(tt("sd.costT"))}: ${esc(c.cost ? tt(COST_KEY[c.cost]) : tt("sd.cost.none"))}</span>
    ${c.evidence ? `<span class="cs-card-meta">${esc(tt("chat.checkedOn", { date: formatDate(c.evidence.checked, L()) }))}</span>` : ""}
    ${extLink(c.url, tt("sd.open"), tt("rec.newTab"), "cs-card-link")}
  </li>`;
}

function linksHtml(links) {
  if (!links || !links.length) return "";
  return `<p class="cs-links">${links.map((l) => {
    if (l.page) {
      const key = PAGE_LABEL[l.pageKey || l.page.split("?")[0]];
      return `<a href="${esc(l.page)}">${esc(key ? tt(key) : l.page)} →</a>`;
    }
    return extLink(l.url, l.label, tt("rec.newTab"));
  }).join(" ")}</p>`;
}

function botHtml(m) {
  const r = m.reply;
  const sections = (r.sections || []).map((s) => `
    <p>${formatText(s.text)}</p>
    ${s.cards.length ? `<ul class="cs-cards">${s.cards.map(cardHtml).join("")}</ul>` : ""}`).join("");
  const plainCards = !(r.sections && r.sections.length) && r.cards && r.cards.length
    ? `<ul class="cs-cards">${r.cards.map(cardHtml).join("")}</ul>` : "";
  return `
  <div class="cs-msg cs-msg--bot${m.mode === "ai" ? " cs-msg--ai" : ""}">
    <span class="visually-hidden">${esc(tt(m.mode === "ai" ? "chat.aiSaid" : "chat.botSaid"))}</span>
    ${m.mode === "ai" ? `<span class="cs-tag">${esc(tt("chat.aiTag", { provider: CHAT_CONFIG.aiProviderName }))}</span>` : ""}
    ${r.text ? `<p>${formatText(r.text)}</p>` : ""}
    ${sections}${plainCards}
    ${linksHtml(r.links)}
  </div>`;
}

function messagesHtml() {
  const list = state.messages.length ? state.messages : [{ role: "bot", mode: "guide", reply: welcome(L()) }];
  const html = list.map((m) => {
    if (m.role === "user") return `<div class="cs-msg cs-msg--user"><span class="visually-hidden">${esc(tt("chat.youSaid"))}</span>${formatText(m.text)}</div>`;
    if (m.role === "error") {
      return `<div class="cs-msg cs-msg--error" role="alert"><p>${esc(tt(`chat.err.${m.kind}`))}</p>
        <p class="cs-err-actions"><button type="button" class="btn btn-secondary btn-small" data-cs="retry">${esc(tt("chat.retry"))}</button>
        <button type="button" class="btn btn-ghost btn-small" data-cs="guide-answer">${esc(tt("chat.useGuide"))}</button></p></div>`;
    }
    return botHtml(m);
  }).join("");
  const last = list[list.length - 1];
  const chips = last.role === "bot" && last.reply.chips && last.reply.chips.length && !state.busy
    ? `<div class="cs-chips">${last.reply.chips.slice(0, 7).map((c) => `<button type="button" class="cs-chip" data-send="${esc(c.send)}">${esc(c.label)}</button>`).join("")}</div>` : "";
  const thinking = state.busy ? `<div class="cs-msg cs-msg--bot cs-thinking" role="status"><span class="cs-dots" aria-hidden="true"><i></i><i></i><i></i></span> ${esc(tt("chat.thinking"))}</div>` : "";
  return html + thinking + chips;
}

function noticeHtml() {
  return `
  <details class="cs-notice"${state.messages.length ? "" : " open"}>
    <summary>${esc(tt("chat.privacyT"))}</summary>
    <p>${esc(tt(state.useAI ? "chat.privacyAI" : "chat.privacyGuide", { provider: CHAT_CONFIG.aiProviderName }))}</p>
    <p>${esc(tt("chat.privacyAll"))} <a href="privacy.html#chat">${esc(tt("chat.privacyMore"))}</a></p>
  </details>`;
}

function panelBody() {
  return `
    <div class="cs-head">
      <div>
        <h2 class="cs-title" id="cs-title">${esc(tt("chat.title"))}</h2>
        <p class="cs-sub">${esc(tt(state.useAI ? "chat.subAI" : "chat.subGuide", { provider: CHAT_CONFIG.aiProviderName }))}</p>
      </div>
      <div class="cs-head-actions">
        <button type="button" class="cs-icon-btn" data-cs="new" title="${esc(tt("chat.new"))}"><span aria-hidden="true">↺</span><span class="visually-hidden">${esc(tt("chat.new"))}</span></button>
        <button type="button" class="cs-icon-btn" data-cs="close" title="${esc(tt("chat.close"))}"><span aria-hidden="true">✕</span><span class="visually-hidden">${esc(tt("chat.close"))}</span></button>
      </div>
    </div>
    ${noticeHtml()}
    ${CHAT_CONFIG.aiEndpoint ? `<label class="cs-ai-toggle"><input type="checkbox" data-cs="ai"${state.useAI ? " checked" : ""}> ${esc(tt("chat.aiToggle", { provider: CHAT_CONFIG.aiProviderName }))}</label>` : ""}
    <div class="cs-log" id="cs-log" role="log" aria-live="polite" aria-relevant="additions" tabindex="0">${messagesHtml()}</div>
    <form class="cs-form" id="cs-form">
      <label for="cs-input" class="visually-hidden">${esc(tt("chat.inputLabel"))}</label>
      <textarea id="cs-input" rows="2" maxlength="${MAX_INPUT}" placeholder="${esc(tt("chat.placeholder"))}" aria-describedby="cs-count"${state.busy ? " disabled" : ""}></textarea>
      <div class="cs-form-row">
        <span id="cs-count" class="cs-count">0/${MAX_INPUT}</span>
        <button type="submit" class="btn btn-primary btn-small"${state.busy ? " disabled" : ""}>${esc(tt("chat.send"))}</button>
      </div>
      <p class="cs-foot">${esc(tt("chat.foot"))}</p>
    </form>`;
}

function render(focusInput) {
  const panel = document.getElementById("cs-panel");
  const btn = document.getElementById("cs-launch");
  if (!panel || !btn) return;
  btn.setAttribute("aria-expanded", String(state.open));
  panel.hidden = !state.open;
  document.body.classList.toggle("cs-open", state.open);
  if (!state.open) return;
  const draft = document.getElementById("cs-input")?.value || "";
  panel.innerHTML = panelBody();
  const input = document.getElementById("cs-input");
  if (input) { input.value = draft; updateCount(); }
  const log = document.getElementById("cs-log");
  if (log) log.scrollTop = log.scrollHeight;
  if (focusInput && input && !input.disabled) input.focus();
}

function updateCount() {
  const input = document.getElementById("cs-input");
  const c = document.getElementById("cs-count");
  if (input && c) c.textContent = `${input.value.length}/${MAX_INPUT}`;
}

// ---------- conversation ----------
function guideAnswer(text) {
  const { reply, ctx } = respond(text, state.ctx);
  state.ctx = ctx;
  state.messages.push({ role: "bot", mode: "guide", reply });
}

async function send(text) {
  const clean = String(text || "").slice(0, MAX_INPUT).trim();
  if (!clean || state.busy) return;
  state.messages.push({ role: "user", text: clean });
  if (!state.useAI) {
    guideAnswer(clean);
    save(); render(true);
    return;
  }
  await askWithAI(clean);
}

async function askWithAI(clean) {
  state.busy = true; state.lastFailed = null;
  save(); render(false);
  // Keep the guide's understanding of the chat (goal, language) up to date too.
  const local = respond(clean, state.ctx);
  const facts = retrieveFacts(clean, local.ctx);
  const history = state.messages
    .filter((m) => m.role === "user" || (m.role === "bot" && m.mode === "ai"))
    .map((m) => ({ role: m.role === "user" ? "user" : "assistant", text: m.role === "user" ? m.text : m.reply.text }));
  try {
    const answer = await askAI(history, facts, local.ctx.lang);
    state.ctx = local.ctx;
    // Data cards come from the website's verified data, not from the AI.
    state.messages.push({ role: "bot", mode: "ai", reply: { text: answer, sections: local.reply.sections || [], cards: local.reply.sections?.length ? [] : local.reply.cards || [], links: local.reply.links || [], chips: [] } });
  } catch (err) {
    state.lastFailed = clean;
    state.messages.push({ role: "error", kind: err && err.name === "ChatError" ? err.kind : "network" });
  } finally {
    state.busy = false;
    save(); render(true);
  }
}

// ---------- events ----------
function openPanel() { state.open = true; render(true); }
function closePanel() {
  state.open = false; render(false);
  document.getElementById("cs-launch")?.focus();
}

function onPanelClick(e) {
  const chip = e.target.closest("[data-send]");
  if (chip) { send(chip.dataset.send); return; }
  const b = e.target.closest("[data-cs]");
  if (!b) return;
  const action = b.dataset.cs;
  if (action === "close") closePanel();
  else if (action === "new") { reset(); save(); render(true); }
  else if (action === "retry" && state.lastFailed) {
    const text = state.lastFailed;
    state.messages = state.messages.filter((m) => m.role !== "error");
    askWithAI(text);
  } else if (action === "guide-answer" && state.lastFailed) {
    const text = state.lastFailed;
    state.messages = state.messages.filter((m) => m.role !== "error");
    state.lastFailed = null;
    guideAnswer(text);
    save(); render(true);
  }
}

function onPanelChange(e) {
  if (e.target.matches('[data-cs="ai"]')) {
    state.useAI = e.target.checked;
    save(); render(false);
    document.querySelector('[data-cs="ai"]')?.focus();
  }
}

export function openChat() { openPanel(); }
export function toggleChat() { (state.open ? closePanel : openPanel)(); }

/** Adds the button and the (hidden) panel. Safe to call once per page. */
export function initChat(langGetter) {
  if (typeof document === "undefined" || document.getElementById("cs-panel")) return;
  if (typeof langGetter === "function") getLang = langGetter;
  load();
  // Take over the small launcher button that layout.js put on the page.
  let btn = document.getElementById("cs-launch");
  if (btn) { const fresh = btn.cloneNode(true); btn.replaceWith(fresh); btn = fresh; }
  else {
    btn = document.createElement("button");
    btn.type = "button";
    btn.id = "cs-launch";
    btn.className = "cs-launch no-print";
    btn.setAttribute("aria-controls", "cs-panel");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = `<span class="cs-launch-icon" aria-hidden="true">💬</span><span class="cs-launch-text" data-i18n="chat.launch">${esc(tt("chat.launch"))}</span>`;
    document.body.append(btn);
  }
  const panel = document.createElement("section");
  panel.id = "cs-panel";
  panel.className = "cs-panel no-print";
  panel.setAttribute("aria-labelledby", "cs-title");
  panel.hidden = true;
  document.body.append(panel);

  btn.addEventListener("click", () => (state.open ? closePanel() : openPanel()));
  panel.addEventListener("click", onPanelClick);
  panel.addEventListener("change", onPanelChange);
  panel.addEventListener("input", (e) => { if (e.target.id === "cs-input") updateCount(); });
  panel.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("cs-input");
    const value = input ? input.value : "";
    if (input) input.value = "";
    send(value);
  });
  panel.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.preventDefault(); closePanel(); return; }
    if (e.key === "Enter" && !e.shiftKey && e.target.id === "cs-input") {
      e.preventDefault();
      document.getElementById("cs-form")?.requestSubmit();
    }
  });
  document.addEventListener("cs:langchange", () => render(false));
}
