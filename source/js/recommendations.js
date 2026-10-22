// Recommendations page: reads the saved profile, runs the matching engine,
// and shows explainable career cards in English or Hindi.

import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { loadProfile } from "./profile-store.js";
import { matchCareers, FIT } from "./engine.js";
import { CAREERS, SECTORS } from "../data/careers.js";
import { SOURCES } from "../data/sources.js";
import {
  ALL_SKILLS, GOALS, EDUCATION_LEVELS, STATES, labelOf
} from "../data/options.js";

const root = document.getElementById("rec-app");
const PAGE_SIZE = 8;
const OPEN_DETAILS = 3; // first few cards show all details

const state = { profile: null, result: null, sector: "all", shown: PAGE_SIZE };

// ---------- Helpers ----------
const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

const listOf = (list, ids) => ids.map((id) => labelOf(list, id, L())).filter(Boolean).join(", ");

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(L() === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" });
}

/** Turns an engine message { key, vars } into text in the current language. */
function say(message, career) {
  const v = message.vars || {};
  const vars = {};
  if (v.skills) vars.skills = listOf(ALL_SKILLS, v.skills);
  if (v.goals) vars.goals = listOf(GOALS, v.goals);
  if (v.level) vars.level = labelOf(EDUCATION_LEVELS, v.level, L());
  if (v.n !== undefined) vars.n = v.n;
  if (message.key === "next.preferred" && career.preferred) vars.preferred = career.preferred[L()] || career.preferred.en;
  return tt(message.key, vars);
}

const STATUS_ICON = { potential: "◆", unverified: "?", eligible: "✓", vacancy: "★" };
const STATUS_KEY = {
  potential: "about.label.potential", unverified: "about.label.unverified",
  eligible: "about.label.eligible", vacancy: "about.label.vacancy"
};

// ---------- Pieces ----------
function profileSummary() {
  const p = state.profile;
  const bits = [
    labelOf(EDUCATION_LEVELS, p.education.level, L()),
    labelOf(STATES, p.state, L()),
    listOf(GOALS, p.goals)
  ].filter(Boolean);
  const missing = state.result.missingInfo.map((m) => tt(`rec.missing.${m}`));
  return `
  <div class="rec-summary card">
    <p><strong>${esc(tt("rec.basedOn"))}</strong> ${esc(bits.join(" · "))}</p>
    <div class="btn-row">
      <a class="btn btn-secondary btn-small" href="profile.html">${esc(tt("rec.editProfile"))}</a>
      <a class="btn btn-ghost btn-small" href="about.html#labels">${esc(tt("rec.labelsHelp"))}</a>
    </div>
    ${missing.length ? `<p class="alert alert--info">${esc(tt("rec.incomplete", { items: missing.join(", ") }))}</p>` : ""}
  </div>`;
}

function filterBar(counts) {
  const options = [{ id: "all", label: tt("rec.filter.all"), n: state.result.matches.length },
    ...SECTORS.map((s) => ({ id: s.id, label: s[L()] || s.en, n: counts[s.id] || 0 }))];
  const buttons = options.map((o) => `
    <button type="button" class="filter-btn" data-sector="${o.id}" aria-pressed="${state.sector === o.id}"${o.n === 0 && o.id !== "all" ? " disabled" : ""}>
      ${esc(o.label)} <span class="count">${o.n}</span>
    </button>`).join("");
  return `<div class="filter-bar" role="group" aria-label="${esc(tt("rec.filterLabel"))}">${buttons}</div>`;
}

function sourceLinks(career) {
  return career.sources.map((id) => SOURCES[id]).filter(Boolean).map((s) => `
    <li>
      <a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s[L()] || s.en)}<span class="visually-hidden"> (${esc(tt("rec.newTab"))})</span> ↗</a>
      <span class="muted small">${esc(tt("rec.sourceChecked", { date: formatDate(s.checked) }))}</span>
    </li>`).join("");
}

function card(m, index) {
  const c = m.career;
  const sector = SECTORS.find((s) => s.id === c.sector);
  // Each missing skill links to courses that teach it.
  const missingChips = m.missingSkills.map((id) =>
    `<li><a class="chip chip--gap chip-link" href="courses.html?skill=${encodeURIComponent(id)}">${esc(labelOf(ALL_SKILLS, id, L()))} →</a></li>`).join("");
  const headingId = `c-${c.id}`;
  return `
  <article class="card rec-card" aria-labelledby="${headingId}">
    <div class="rec-top">
      <span class="sector sector--${c.sector}">${esc(sector ? sector[L()] : c.sector)}</span>
      <span class="fit fit--${m.fit}">${esc(tt(`rec.fit.${m.fit}`))}</span>
    </div>
    <h3 id="${headingId}">${esc(c.title[L()] || c.title.en)}</h3>
    <p class="muted">${esc(c.summary[L()] || c.summary.en)}</p>
    <p><span class="status status--${m.status}"><span aria-hidden="true">${STATUS_ICON[m.status]}</span> ${esc(tt(STATUS_KEY[m.status]))}</span></p>

    <h4>${esc(tt("rec.why"))}</h4>
    <ul class="list-check compact">${m.reasons.map((r) => `<li>${esc(say(r, c))}</li>`).join("")}</ul>

    ${missingChips ? `<h4>${esc(tt("rec.skillsToBuild"))}</h4><ul class="chip-list">${missingChips}</ul>` : ""}

    <details class="rec-more"${index < OPEN_DETAILS ? " open" : ""}>
      <summary>${esc(tt("rec.more"))}</summary>
      <h4>${esc(tt("rec.check"))}</h4>
      <ul class="list-warn compact">${m.checks.map((x) => `<li>${esc(say(x, c))}</li>`).join("")}</ul>
      ${c.educationNote ? `<p class="small muted">${esc(c.educationNote[L()] || c.educationNote.en)}</p>` : ""}
      <h4>${esc(tt("rec.next"))}</h4>
      <ol class="compact">${m.next.map((x) => `<li>${esc(say(x, c))}</li>`).join("")}</ol>
      <h4>${esc(tt("rec.sources"))}</h4>
      <ul class="source-list">${sourceLinks(c)}</ul>
    </details>
  </article>`;
}

function futureSection() {
  const list = state.result.futurePaths;
  if (!list.length) return "";
  const items = list.map((m) => {
    const levels = Array.isArray(m.career.education) ? listOf(EDUCATION_LEVELS, m.career.education) : "";
    return `<li><strong>${esc(m.career.title[L()] || m.career.title.en)}</strong>
      ${levels ? `<br><span class="muted small">${esc(tt("rec.futureNeeds", { levels }))}</span>` : ""}</li>`;
  }).join("");
  return `
  <section class="future card" aria-labelledby="future-title">
    <h2 id="future-title">${esc(tt("rec.futureT"))}</h2>
    <p class="muted">${esc(tt("rec.futureD"))}</p>
    <ul class="future-list">${items}</ul>
  </section>`;
}

function emptyState(titleKey, textKey, withButton) {
  return `
  <div class="empty-state">
    <div class="icon-tile" aria-hidden="true">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </div>
    <h2>${esc(tt(titleKey))}</h2>
    <p class="muted">${esc(tt(textKey))}</p>
    ${withButton ? `<a class="btn btn-primary" href="profile.html">${esc(tt(withButton))}</a>` : ""}
  </div>`;
}

// ---------- Render ----------
function render(focusSelector) {
  root.setAttribute("aria-busy", "false");

  if (!state.profile) {
    root.innerHTML = emptyState("rec.noProfileT", "rec.noProfileD", "rec.noProfileBtn");
    return;
  }
  if (!state.result.ready || (!state.result.matches.length && !state.result.futurePaths.length)) {
    root.innerHTML = profileSummary() + emptyState("rec.noMatchesT", "rec.noMatchesD", "rec.editProfile");
    return;
  }

  const counts = {};
  state.result.matches.forEach((m) => { counts[m.career.sector] = (counts[m.career.sector] || 0) + 1; });
  const filtered = state.result.matches.filter((m) => state.sector === "all" || m.career.sector === state.sector);
  const visible = filtered.slice(0, state.shown);

  root.innerHTML = `
    ${profileSummary()}
    ${filterBar(counts)}
    <p class="muted" id="rec-count" aria-live="polite">${esc(tt("rec.count", { shown: visible.length, total: filtered.length }))}</p>
    ${visible.length ? `<div class="rec-grid">${visible.map(card).join("")}</div>` : `<p class="alert alert--info">${esc(tt("rec.emptyFilter"))}</p>`}
    ${filtered.length > visible.length ? `<p class="center"><button type="button" class="btn btn-secondary" data-action="more">${esc(tt("rec.showMore"))}</button></p>` : ""}
    ${futureSection()}`;

  if (focusSelector) root.querySelector(focusSelector)?.focus();
}

function onClick(e) {
  const filter = e.target.closest("[data-sector]");
  if (filter) {
    state.sector = filter.dataset.sector;
    state.shown = PAGE_SIZE;
    render(`[data-sector="${state.sector}"]`);
    return;
  }
  if (e.target.closest('[data-action="more"]')) {
    const firstNew = state.shown;
    state.shown += PAGE_SIZE;
    render();
    // Move focus to the first newly shown card so keyboard users continue from there.
    const cards = root.querySelectorAll(".rec-card h3");
    if (cards[firstNew]) { cards[firstNew].setAttribute("tabindex", "-1"); cards[firstNew].focus(); }
  }
}

function init() {
  if (!root) return;
  const saved = loadProfile();
  state.profile = saved ? saved.profile : null;
  state.result = state.profile ? matchCareers(state.profile, CAREERS) : null;
  root.addEventListener("click", onClick);
  document.addEventListener("cs:langchange", () => render());
  render();
}

try {
  init();
} catch (err) {
  console.error(err);
  if (root) root.innerHTML = `<p class="alert alert--error" role="alert">${esc(tt("state.error"))}</p>`;
}
