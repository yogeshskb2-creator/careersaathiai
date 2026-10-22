// Saved quiz answers + a small summary box used on the Dashboard and Recommendations.
import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { getJSON, setJSON, removeItem } from "./storage.js";
import { esc } from "./ui.js";
import { QUIZ_AREAS } from "../data/quiz.js";
import { scoreQuiz, cleanAnswers, careersForAreas } from "./quiz-model.js";

export const QUIZ_KEY = "quiz";

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => (o ? o[L()] || o.en : "");

export function loadQuizAnswers() { return cleanAnswers(getJSON(QUIZ_KEY, {})); }
export function saveQuizAnswers(answers) { setJSON(QUIZ_KEY, cleanAnswers(answers)); }
export function clearQuizAnswers() { removeItem(QUIZ_KEY); }

/** Finished quiz result, or null if the quiz was not completed. */
export function savedQuizResult() {
  const r = scoreQuiz(loadQuizAnswers());
  return r.complete ? r : null;
}

/** Career ids that match the person's top interests (empty if no finished quiz). */
export function interestCareerIds() {
  const r = savedQuizResult();
  return r && r.clear ? careersForAreas(r.top) : [];
}

export function areaName(id) { return txt(QUIZ_AREAS.find((a) => a.id === id)?.name); }

/** Box for the dashboard: the result if there is one, otherwise an invitation. */
export function quizSummaryHtml() {
  const r = savedQuizResult();
  const body = r && r.clear
    ? `<p>${esc(tt("quiz.sumHave"))}</p>
       <ul class="chips chips--left">${r.top.map((id) => `<li>${esc(QUIZ_AREAS.find((a) => a.id === id).icon)} ${esc(areaName(id))}</li>`).join("")}</ul>
       <p><a class="btn btn-secondary btn-small" href="quiz.html">${esc(tt("quiz.sumSee"))}</a></p>`
    : `<p class="muted">${esc(tt("quiz.sumNone"))}</p>
       <p><a class="btn btn-primary btn-small" href="quiz.html">${esc(tt("quiz.cta"))}</a></p>`;
  return `
  <section class="card dash-section quiz-summary" aria-labelledby="d-quiz-t">
    <h2 id="d-quiz-t"><span aria-hidden="true">🧭</span> ${esc(tt("quiz.sumT"))}</h2>
    ${body}
  </section>`;
}
