// Government Job Explorer: official recruitment sources, filterable and searchable.
// Shows NO vacancies or dates — only where to look.

import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { loadProfile } from "./profile-store.js";
import { RECRUITMENT_SOURCES, RECRUITMENT_CATEGORIES } from "../data/recruitment.js";
import { STATES, labelOf } from "../data/options.js";
import { esc, formatDate, extLink, hostOf } from "./ui.js";

const root = document.getElementById("jobs-app");
const state = { category: "all", query: "", userState: "" };

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => o[L()] || o.en;

/** Text search across both languages, ignoring case. */
function matchesQuery(src, q) {
  if (!q) return true;
  const hay = [src.name.en, src.name.hi, src.covers.en, src.covers.hi, hostOf(src.url),
    labelOf(RECRUITMENT_CATEGORIES, src.category, "en"), labelOf(RECRUITMENT_CATEGORIES, src.category, "hi")]
    .join(" ").toLowerCase();
  return q.toLowerCase().split(/\s+/).filter(Boolean).every((word) => hay.includes(word));
}

function filtered() {
  const list = RECRUITMENT_SOURCES.filter((s) =>
    (state.category === "all" || s.category === state.category) && matchesQuery(s, state.query));
  // The user's own state first.
  return list.sort((a, b) => (b.state === state.userState) - (a.state === state.userState));
}

function shellHtml() {
  const counts = {};
  RECRUITMENT_SOURCES.forEach((s) => { counts[s.category] = (counts[s.category] || 0) + 1; });
  const buttons = [{ id: "all", label: tt("jobs.all"), n: RECRUITMENT_SOURCES.length },
    ...RECRUITMENT_CATEGORIES.map((c) => ({ id: c.id, label: txt(c), n: counts[c.id] || 0 }))]
    .map((b) => `<button type="button" class="filter-btn" data-cat="${b.id}" aria-pressed="${state.category === b.id}">
        ${esc(b.label)} <span class="count">${b.n}</span></button>`).join("");

  return `
  <div class="field search-field">
    <label for="jobs-search">${esc(tt("jobs.searchLabel"))}</label>
    <input type="search" id="jobs-search" value="${esc(state.query)}" placeholder="${esc(tt("jobs.searchHint"))}"
      aria-describedby="jobs-count" autocomplete="off">
  </div>
  <div class="filter-bar filter-bar--wrap" role="group" aria-label="${esc(tt("jobs.filterLabel"))}">${buttons}</div>
  <div id="jobs-results"></div>
  <p class="center"><a class="btn btn-secondary" href="recommendations.html">${esc(tt("jobs.seeCareers"))} →</a></p>`;
}

function stateNotes() {
  if (state.category !== "all" && state.category !== "state") return "";
  const notes = [`<p class="muted small">${esc(tt("jobs.stateExamples"))}</p>`];
  if (!state.userState) {
    notes.push(`<p class="alert alert--info"><a href="profile.html">${esc(tt("jobs.stateHint"))}</a></p>`);
  } else if (!RECRUITMENT_SOURCES.some((s) => s.state === state.userState)) {
    const name = labelOf(STATES, state.userState, L());
    notes.push(`<p class="alert alert--info">${esc(tt("jobs.stateMissing", { state: name }))}</p>`);
  }
  return notes.join("");
}

function card(src) {
  const cat = RECRUITMENT_CATEGORIES.find((c) => c.id === src.category);
  const mine = src.state && src.state === state.userState;
  return `
  <article class="card source-card${mine ? " source-card--mine" : ""}">
    <div class="rec-top">
      <span class="sector">${esc(cat ? txt(cat) : src.category)}</span>
      ${mine ? `<span class="fit fit--strong">${esc(tt("jobs.yourState"))}</span>` : ""}
    </div>
    <h3>${esc(txt(src.name))}</h3>
    <p class="muted">${esc(txt(src.covers))}</p>
    <p class="source-host">${esc(hostOf(src.url))}</p>
    <p>${extLink(src.url, tt("jobs.visit"), tt("rec.newTab"), "btn btn-primary btn-small")}</p>
    <p class="muted small">${esc(tt("jobs.checked", { date: formatDate(src.checked, L()) }))}</p>
  </article>`;
}

function renderResults() {
  const box = document.getElementById("jobs-results");
  if (!box) return;
  const list = filtered();
  box.innerHTML = `
    <p class="muted" id="jobs-count" aria-live="polite">${esc(tt("jobs.count", { n: list.length }))}</p>
    ${stateNotes()}
    ${list.length ? `<div class="rec-grid source-grid">${list.map(card).join("")}</div>`
      : `<p class="alert alert--info">${esc(tt("jobs.empty"))}</p>`}`;
}

function renderAll() {
  root.innerHTML = shellHtml();
  root.setAttribute("aria-busy", "false");
  renderResults();
}

function init() {
  if (!root) return;
  state.userState = loadProfile()?.profile.state || "";

  root.addEventListener("input", (e) => {
    if (e.target.id !== "jobs-search") return;
    state.query = e.target.value.slice(0, 60);
    renderResults(); // only the list changes, so typing keeps focus
  });
  root.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    state.category = btn.dataset.cat;
    root.querySelectorAll("[data-cat]").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    renderResults();
  });
  document.addEventListener("cs:langchange", () => {
    const hadFocus = document.activeElement?.id;
    renderAll();
    if (hadFocus) document.getElementById(hadFocus)?.focus();
  });
  renderAll();
}

try {
  init();
} catch (err) {
  console.error(err);
  if (root) root.innerHTML = `<p class="alert alert--error" role="alert">${esc(tt("state.error"))}</p>`;
}
