// Shared drawing code for open recruitments (used by Jobs, Dashboard, Recommendations).
import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { esc, formatDate, extLink, hostOf } from "./ui.js";
import { EDUCATION_LEVELS, labelOf } from "../data/options.js";
import { LIST_UPDATED } from "../data/vacancies.js";
import { ageInDays, STALE_LIST_DAYS } from "./vacancy-match.js";
import { vacancyCalendarButtons, installCalendarHandler } from "./calendar-ui.js";

// Every page that draws recruitment cards gets working calendar buttons.
if (typeof document !== "undefined") installCalendarHandler();

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => (o ? o[L()] || o.en : "");

/** Turns a { key, vars } message into text. */
export function sayVac(m) {
  const v = m.vars || {};
  const vars = { ...v };
  if (v.level) vars.level = labelOf(EDUCATION_LEVELS, v.level, L());
  if (v.date) vars.date = formatDate(v.date, L());
  return tt(m.key, vars);
}

function countdown(r) {
  if (r.status === "upcoming") return tt("vac.daysToOpen", { n: r.daysToOpen });
  if (r.daysLeft === 0) return tt("vac.lastDay");
  if (r.daysLeft === 1) return tt("vac.oneDayLeft");
  return tt("vac.daysLeft", { n: r.daysLeft });
}

/** One recruitment card. `full` adds posts, qualification, age and the checks list. */
export function vacancyCard(r, { full = true, showFit = true } = {}) {
  const v = r.vacancy;
  const lang = L();
  const dates = tt("vac.dates", { from: formatDate(v.opens, lang), to: formatDate(v.closes, lang) }) +
    (v.closesTime ? ` (${tt("vac.until", { time: v.closesTime })})` : "");
  const label = r.verifiedActive
    ? `<span class="status status--vacancy"><span aria-hidden="true">★</span> ${esc(tt("about.label.vacancy"))}</span>`
    : `<span class="status status--unverified"><span aria-hidden="true">?</span> ${esc(tt("vac.reportedLabel"))}</span>`;
  const fitText = { "fits-recorded": "vac.matchYou", check: "vac.fitCheck", "not-met": "vac.notMet" }[r.fit];
  const fitCls = { "fits-recorded": "fit--strong", check: "fit--possible", "not-met": "fit--upskill" }[r.fit];

  return `
  <article class="card vac-card vac-card--${r.status}">
    <div class="rec-top">
      <span class="vac-chip vac-chip--${r.status}">${esc(tt(`vac.status.${r.status}`))} · ${esc(countdown(r))}</span>
      ${showFit ? `<span class="fit ${fitCls}">${esc(tt(fitText))}</span>` : ""}
    </div>
    <h3>${esc(txt(v.title))}</h3>
    <p class="muted small">${esc(txt(v.org))}</p>
    <p class="vac-dates"><strong>${esc(dates)}</strong></p>
    ${r.status === "upcoming" ? "" : `<p>${label}</p>`}
    ${full ? `
    <dl class="facts">
      <div class="review-row"><dt>${esc(tt("vac.posts"))}</dt><dd>${esc(txt(v.posts))}</dd></div>
      ${v.educationNote ? `<div class="review-row"><dt>${esc(tt("vac.qualification"))}</dt><dd>${esc(txt(v.educationNote))}</dd></div>` : ""}
      ${v.age ? `<div class="review-row"><dt>${esc(tt("vac.age"))}</dt><dd>${esc(txt(v.age.note))}</dd></div>` : ""}
    </dl>
    ${showFit && r.reasons.length ? `<h4>${esc(tt("vac.why"))}</h4>
      <ul class="list-check compact">${r.reasons.map((m) => `<li>${esc(sayVac(m))}</li>`).join("")}</ul>` : ""}
    <details class="rec-more">
      <summary>${esc(tt("vac.check"))}</summary>
      <ul class="list-warn compact">${r.checks.map((m) => `<li>${esc(sayVac(m))}</li>`).join("")}</ul>
    </details>` : ""}
    <p class="source-host">${esc(hostOf(v.applyUrl))}</p>
    <p>${extLink(v.applyUrl, tt("vac.apply"), tt("rec.newTab"), "btn btn-primary btn-small")}</p>
    ${vacancyCalendarButtons(r)}
    <p class="muted small">${esc(tt("vac.checked", { date: formatDate(v.checkedOn, lang), source: txt(v.checkedFrom) }))}</p>
  </article>`;
}

/** "List last updated" line, with a warning if the list is getting old. */
export function listFreshness(today) {
  const age = ageInDays(LIST_UPDATED, today);
  const line = `<p class="muted small">${esc(tt("vac.listUpdated", { date: formatDate(LIST_UPDATED, L()) }))}</p>`;
  return age > STALE_LIST_DAYS
    ? line + `<p class="alert alert--warn small">${esc(tt("vac.listStale", { n: age }))}</p>`
    : line;
}
