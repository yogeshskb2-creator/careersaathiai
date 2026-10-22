// Interest quiz page. Answers are kept only in this browser (key cs_quiz) and can be
// cleared at any time. Scoring is simple and open — see quiz-model.js.
import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { esc } from "./ui.js";
import { CAREERS } from "../data/careers.js";
import { ALL_SKILLS, labelOf } from "../data/options.js";
import { QUIZ_AREAS, QUESTIONS, ANSWERS } from "../data/quiz.js";
import { scoreQuiz, MAX_PER_AREA } from "./quiz-model.js";
import { loadQuizAnswers, saveQuizAnswers, clearQuizAnswers } from "./quiz-summary.js";
import { loadProfile } from "./profile-store.js";

const root = document.getElementById("quiz-app");
const state = { answers: {}, showResult: false };

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => (o ? o[L()] || o.en : "");

function questionHtml(q, i) {
  const chosen = state.answers[q.id];
  const opts = ANSWERS.map((a) => `
    <label class="quiz-opt">
      <input type="radio" name="${q.id}" value="${a.value}"${chosen === a.value ? " checked" : ""}>
      <span>${esc(a[L()] || a.en)}</span>
    </label>`).join("");
  return `
  <fieldset class="quiz-q${chosen === undefined ? "" : " is-done"}" id="f-${q.id}">
    <legend><span class="quiz-num">${i + 1}.</span> ${esc(txt(q.text))}</legend>
    <div class="quiz-opts">${opts}</div>
  </fieldset>`;
}

function progressText(r) { return tt("quiz.progress", { done: r.answered, total: r.total }); }

function formHtml() {
  const r = scoreQuiz(state.answers);
  return `
  <form id="quiz-form" class="quiz-form" novalidate>
    <div class="quiz-progress card" aria-live="polite">
      <progress max="${r.total}" value="${r.answered}" aria-labelledby="quiz-progress-text"></progress>
      <span id="quiz-progress-text">${esc(progressText(r))}</span>
    </div>
    ${QUESTIONS.map(questionHtml).join("")}
    <p id="quiz-error" class="alert alert--warn" role="alert" hidden></p>
    <div class="btn-row">
      <button type="submit" class="btn btn-primary">${esc(tt("quiz.submit"))}</button>
      ${r.answered ? `<button type="button" class="btn btn-ghost" data-action="clear">${esc(tt("quiz.clear"))}</button>` : ""}
    </div>
  </form>`;
}

function areaCard(id, r) {
  const a = QUIZ_AREAS.find((x) => x.id === id);
  const careers = a.careers.map((cid) => CAREERS.find((c) => c.id === cid)).filter(Boolean);
  return `
  <article class="card quiz-area" aria-labelledby="qa-${a.id}">
    <h3 id="qa-${a.id}"><span class="quiz-icon" aria-hidden="true">${a.icon}</span> ${esc(txt(a.name))}</h3>
    <p class="muted small">${esc(tt("quiz.points", { n: r.scores[a.id], max: MAX_PER_AREA }))}</p>
    <p>${esc(txt(a.about))}</p>
    <h4>${esc(tt("quiz.careersT"))}</h4>
    <ul class="chip-list">${careers.map((c) => `<li><span class="chip chip--plain">${esc(txt(c.title))}</span></li>`).join("")}</ul>
    <h4>${esc(tt("quiz.skillsT"))}</h4>
    <ul class="chip-list">${a.skills.map((s) => `<li><a class="chip chip-link" href="courses.html?skill=${encodeURIComponent(s)}">${esc(labelOf(ALL_SKILLS, s, L()))} →</a></li>`).join("")}</ul>
    <p class="quiz-guide"><a href="${esc(a.guide)}">${esc(tt("quiz.guideLink"))} →</a></p>
  </article>`;
}

function barsHtml(r) {
  const rows = QUIZ_AREAS.slice().sort((a, b) => r.scores[b.id] - r.scores[a.id]).map((a) => `
    <li class="quiz-bar">
      <span class="quiz-bar-name">${a.icon} ${esc(txt(a.name))}</span>
      <span class="quiz-bar-track" aria-hidden="true"><span style="width:${Math.round((r.scores[a.id] / MAX_PER_AREA) * 100)}%"></span></span>
      <span class="quiz-bar-num">${esc(tt("quiz.points", { n: r.scores[a.id], max: MAX_PER_AREA }))}</span>
    </li>`).join("");
  return `<ul class="quiz-bars">${rows}</ul>`;
}

function resultHtml() {
  const r = scoreQuiz(state.answers);
  const hasProfile = Boolean(loadProfile());
  const next = `
    <div class="cta-band quiz-next">
      <h2>${esc(tt("quiz.nextT"))}</h2>
      <p>${esc(tt(hasProfile ? "quiz.nextHave" : "quiz.nextNone"))}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${hasProfile ? "recommendations.html" : "profile.html"}">${esc(tt(hasProfile ? "quiz.nextRec" : "quiz.nextProfile"))}</a>
        <a class="btn btn-secondary" href="roadmap.html">${esc(tt("quiz.nextRoadmap"))}</a>
      </div>
    </div>`;
  const body = r.clear
    ? `<p class="lead">${esc(tt("quiz.resultLead"))}</p>
       <div class="grid grid-3 quiz-areas">${r.top.map((id) => areaCard(id, r)).join("")}</div>
       <h2 class="quiz-all-t">${esc(tt("quiz.allT"))}</h2>
       ${barsHtml(r)}`
    : `<p class="alert alert--info">${esc(tt("quiz.noClear"))}</p>`;
  return `
  <section aria-labelledby="quiz-result-t" class="quiz-result">
    <h2 id="quiz-result-t" tabindex="-1">${esc(tt("quiz.resultT"))}</h2>
    ${body}
    <p class="alert alert--warn small">${esc(tt("quiz.notTest"))}</p>
    <div class="btn-row">
      <button type="button" class="btn btn-secondary" data-action="edit">${esc(tt("quiz.edit"))}</button>
      <button type="button" class="btn btn-ghost" data-action="clear">${esc(tt("quiz.clear"))}</button>
    </div>
    ${next}
  </section>`;
}

function render(focus) {
  root.setAttribute("aria-busy", "false");
  root.innerHTML = state.showResult ? resultHtml() : formHtml();
  if (focus) root.querySelector(focus)?.focus();
}

function updateProgress() {
  const r = scoreQuiz(state.answers);
  const bar = root.querySelector(".quiz-progress progress");
  const text = document.getElementById("quiz-progress-text");
  if (bar) bar.value = r.answered;
  if (text) text.textContent = progressText(r);
}

function init() {
  if (!root) return;
  state.answers = loadQuizAnswers();
  state.showResult = scoreQuiz(state.answers).complete;

  root.addEventListener("change", (e) => {
    const input = e.target;
    if (input.type !== "radio") return;
    state.answers[input.name] = Number(input.value);
    saveQuizAnswers(state.answers);
    input.closest("fieldset")?.classList.add("is-done");
    updateProgress(); // no redraw, so focus stays where it is
  });

  root.addEventListener("submit", (e) => {
    e.preventDefault();
    const r = scoreQuiz(state.answers);
    if (!r.complete) {
      const missing = QUESTIONS.find((q) => state.answers[q.id] === undefined);
      const err = document.getElementById("quiz-error");
      err.textContent = tt("quiz.missing", { n: r.total - r.answered });
      err.hidden = false;
      const first = document.querySelector(`#f-${missing.id} input`);
      document.getElementById(`f-${missing.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      first?.focus({ preventScroll: true });
      return;
    }
    state.showResult = true;
    render("#quiz-result-t");
    window.scrollTo({ top: 0 });
  });

  root.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    if (btn.dataset.action === "edit") { state.showResult = false; render(".quiz-q input"); }
    if (btn.dataset.action === "clear") {
      clearQuizAnswers();
      state.answers = {};
      state.showResult = false;
      render(".quiz-q input");
      window.scrollTo({ top: 0 });
    }
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
