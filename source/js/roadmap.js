// "What after 10th / 12th?" roadmap page.
// Opens the right stage from the saved profile, and marks paths that suit the
// person's quiz interests. Nothing is sent anywhere.
import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { esc, extLink, formatDate } from "./ui.js";
import { CAREERS } from "../data/careers.js";
import { STAGES, PATHS, ROADMAP_CHECKED } from "../data/roadmap.js";
import { loadProfile } from "./profile-store.js";
import { savedQuizResult, areaName } from "./quiz-summary.js";
import { todayISO, ageInDays, STALE_DAYS } from "./vacancy-match.js";

const root = document.getElementById("roadmap-app");
const state = { stage: "after10", top: [] };

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => (o ? o[L()] || o.en : "");

function stageForLevel(level) {
  return ["class12", "graduation", "postgraduation", "professional"].includes(level) ? "after12" : "after10";
}

function pathCard(p) {
  // Only the person's strongest interest is used, so the mark stays meaningful.
  const liked = state.top[0] && p.areas.includes(state.top[0]) ? [state.top[0]] : [];
  const careers = p.careers.map((id) => CAREERS.find((c) => c.id === id)).filter(Boolean);
  return `
  <article class="card road-card${liked.length ? " road-card--liked" : ""}" aria-labelledby="r-${p.id}">
    <div class="rec-top">
      <span class="road-dur"><span aria-hidden="true">⏱</span> ${esc(txt(p.duration))}</span>
      ${liked.length ? `<span class="fit fit--strong">🧭 ${esc(tt("road.liked", { areas: liked.map(areaName).join(", ") }))}</span>` : ""}
    </div>
    <h3 id="r-${p.id}"><span aria-hidden="true">${p.icon}</span> ${esc(txt(p.name))}</h3>
    <p>${esc(txt(p.what))}</p>
    <dl class="facts">
      <div class="review-row"><dt>${esc(tt("road.goodFor"))}</dt><dd>${esc(txt(p.goodFor))}</dd></div>
      <div class="review-row"><dt>${esc(tt("road.leadsTo"))}</dt><dd>${esc(txt(p.leadsTo))}</dd></div>
    </dl>
    <p class="road-tip"><strong>${esc(tt("road.tip"))}:</strong> ${esc(txt(p.tip))}</p>
    ${careers.length ? `<h4>${esc(tt("road.careers"))}</h4>
      <ul class="chip-list">${careers.map((c) => `<li><span class="chip chip--plain">${esc(txt(c.title))}</span></li>`).join("")}</ul>` : ""}
    <ul class="road-links">
      ${p.links.map((l) => `<li>${extLink(l.url, txt(l.label), tt("rec.newTab"))}</li>`).join("")}
      ${p.page ? `<li><a href="${esc(p.page)}">${esc(tt(`road.page.${p.page.replace(".html", "")}`))} →</a></li>` : ""}
      ${p.guide ? `<li><a href="${esc(p.guide)}">${esc(tt("road.guide"))} →</a></li>` : ""}
    </ul>
  </article>`;
}

function render(focus) {
  root.setAttribute("aria-busy", "false");
  const tabs = STAGES.map((s) => `
    <button type="button" class="filter-btn road-tab" data-stage="${s.id}" aria-pressed="${s.id === state.stage}">
      <span aria-hidden="true">${s.icon}</span> ${esc(txt(s.name))}
    </button>`).join("");
  const paths = PATHS.filter((p) => p.stage === state.stage);
  const quizNote = state.top.length
    ? `<p class="alert alert--info small">${esc(tt("road.quizHave", { areas: areaName(state.top[0]) }))}</p>`
    : `<p class="muted small">${esc(tt("road.quizNone"))} <a href="quiz.html">${esc(tt("quiz.cta"))} →</a></p>`;
  root.innerHTML = `
    <div class="filter-bar road-tabs" role="group" aria-label="${esc(tt("road.choose"))}">${tabs}</div>
    ${quizNote}
    <h2 class="road-count" id="road-list-t" tabindex="-1">${esc(tt("road.count", { n: paths.length, stage: txt(STAGES.find((s) => s.id === state.stage).name) }))}</h2>
    <div class="grid grid-2 road-grid">${paths.map(pathCard).join("")}</div>
    <p class="muted small">${esc(tt("road.checked", { date: formatDate(ROADMAP_CHECKED, L()) }))}</p>
    ${ageInDays(ROADMAP_CHECKED, todayISO()) > STALE_DAYS ? `<p class="alert alert--warn small">${esc(tt("stale.warn", { n: ageInDays(ROADMAP_CHECKED, todayISO()) }))}</p>` : ""}`;
  if (focus) root.querySelector(focus)?.focus();
}

function init() {
  if (!root) return;
  const saved = loadProfile();
  const fromUrl = new URLSearchParams(location.search).get("stage");
  if (STAGES.some((s) => s.id === fromUrl)) state.stage = fromUrl;
  else if (saved?.profile?.education?.level) state.stage = stageForLevel(saved.profile.education.level);
  const quiz = savedQuizResult();
  state.top = quiz && quiz.clear ? quiz.top : [];

  root.addEventListener("click", (e) => {
    const b = e.target.closest("[data-stage]");
    if (!b) return;
    state.stage = b.dataset.stage;
    render(`[data-stage="${state.stage}"]`);
  });
  document.addEventListener("cs:langchange", () => render());
  render();
}

try {
  init();
} catch (err) {
  console.error(err);
  if (root) root.innerHTML = `<p class="alert alert--error" role="alert">${esc(tt("state.error"))}</p>`;
}
