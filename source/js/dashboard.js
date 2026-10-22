// Personal dashboard: one page that brings together everything for the saved profile.
// All processing happens here in the browser; nothing is sent anywhere.

import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { loadProfile } from "./profile-store.js";
import { getJSON, setJSON } from "./storage.js";
import { matchCareers } from "./engine.js";
import { recommendCourses } from "./course-match.js";
import { matchSchemes } from "./scheme-match.js";
import { buildPlan, progress, taskIds } from "./plan.js";
import { CAREERS, SECTORS } from "../data/careers.js";
import { SOURCES } from "../data/sources.js";
import { RECRUITMENT_SOURCES } from "../data/recruitment.js";
import { COURSES } from "../data/courses.js";
import { SCHEMES } from "../data/schemes.js";
import { ALL_SKILLS, EDUCATION_LEVELS, STATES, GOALS, labelOf } from "../data/options.js";
import { esc, extLink, hostOf } from "./ui.js";

const root = document.getElementById("dash-app");
const PLAN_KEY = "plan_done";
const state = { saved: null, data: null, done: [] };

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => (o ? o[L()] || o.en : "");
const skillName = (id) => labelOf(ALL_SKILLS, id, L());
const careerName = (id) => txt(CAREERS.find((c) => c.id === id)?.title);
const courseName = (id) => txt(COURSES.find((c) => c.id === id)?.title);
const schemeName = (id) => txt(SCHEMES.find((s) => s.id === id)?.name);

const STATUS_ICON = { potential: "◆", unverified: "?", eligible: "✓", vacancy: "★" };
const STATUS_KEY = { potential: "about.label.potential", unverified: "about.label.unverified", eligible: "about.label.eligible", vacancy: "about.label.vacancy" };

// ---------- Data ----------
function compute(profile) {
  const careers = matchCareers(profile, CAREERS);
  const courses = recommendCourses(profile, CAREERS, COURSES);
  const schemes = matchSchemes(profile, SCHEMES);
  const plan = buildPlan(profile, { matches: careers.matches, gaps: courses.gaps, courses: courses.items, schemes });
  return { careers, courses, schemes, plan };
}

function planArea() { return state.saved?.where === "local" ? "local" : "session"; }
function loadDone(plan) {
  const raw = getJSON(PLAN_KEY, [], planArea());
  const valid = new Set(taskIds(plan));
  return Array.isArray(raw) ? raw.filter((id) => valid.has(id)) : [];
}
function saveDone() { setJSON(PLAN_KEY, state.done, planArea()); }

// Printing is blocked when the site is shown inside another page's frame
// (for example a preview), so the button only appears on the real site.
function canPrint() {
  try { return window.self === window.top; } catch { return false; }
}

// ---------- Pieces ----------
function section(id, num, titleKey, body, extra = "") {
  return `
  <section class="card dash-section" aria-labelledby="${id}-t" id="${id}">
    <h2 id="${id}-t" tabindex="-1"><span class="dash-num" aria-hidden="true">${num}</span> ${esc(tt(titleKey))}</h2>
    ${body}
    ${extra}
  </section>`;
}
const linkBtn = (href, text) => `<p class="dash-more"><a class="btn btn-secondary btn-small" href="${href}">${esc(text)} →</a></p>`;
const empty = (key) => `<p class="muted">${esc(tt(key))}</p>`;

function headerHtml() {
  const p = state.saved.profile;
  const bits = [labelOf(EDUCATION_LEVELS, p.education.level, L()), labelOf(STATES, p.state, L()),
    p.goals.map((g) => labelOf(GOALS, g, L())).join(", ")].filter(Boolean);
  return `
  <div class="page-head dash-head">
    <h1>${esc(tt("dash.h1"))}</h1>
    <p class="lead">${esc(p.name ? tt("dash.hello", { name: p.name }) : tt("dash.helloAnon"))} ${esc(tt("dash.lead"))}</p>
    <p class="muted"><strong>${esc(tt("rec.basedOn"))}</strong> ${esc(bits.join(" · "))}</p>
    <div class="btn-row no-print">
      <a class="btn btn-secondary btn-small" href="profile.html">${esc(tt("rec.editProfile"))}</a>
      ${canPrint() ? `<button type="button" class="btn btn-primary btn-small" data-action="print">${esc(tt("dash.print"))}</button>` : ""}
    </div>
  </div>`;
}

function matchesHtml() {
  const list = state.data.careers.matches.slice(0, 4);
  if (!list.length) return section("d-matches", 1, "dash.matchesT", empty("dash.matchesEmpty"), linkBtn("profile.html", tt("rec.editProfile")));
  const items = list.map((m) => `
    <li class="dash-item">
      <div>
        <strong>${esc(careerName(m.careerId))}</strong>
        <span class="muted small"> · ${esc(txt(SECTORS.find((s) => s.id === m.career.sector)))}</span>
      </div>
      <div class="dash-tags">
        <span class="fit fit--${m.fit}">${esc(tt(`rec.fit.${m.fit}`))}</span>
        <span class="status status--${m.status} small"><span aria-hidden="true">${STATUS_ICON[m.status]}</span> ${esc(tt(STATUS_KEY[m.status]))}</span>
      </div>
    </li>`).join("");
  return section("d-matches", 1, "dash.matchesT", `<ul class="dash-list">${items}</ul>`,
    linkBtn("recommendations.html", tt("dash.seeAll", { n: state.data.careers.matches.length })));
}

function govtHtml() {
  const p = state.saved.profile;
  const govtMatches = state.data.careers.matches.filter((m) => m.career.sector === "government");
  const ids = [...new Set(govtMatches.flatMap((m) => m.career.sources))].filter((id) => SOURCES[id]).slice(0, 6);
  const stateBodies = RECRUITMENT_SOURCES.filter((s) => s.state && s.state === p.state);

  if (!ids.length && !stateBodies.length) {
    return section("d-govt", 2, "dash.govtT", empty("dash.govtEmpty"), linkBtn("jobs.html", tt("dash.openExplorer")));
  }
  const rows = [
    ...stateBodies.map((s) => `<li class="dash-item"><div>${extLink(s.url, txt(s.name), tt("rec.newTab"))}
      <span class="fit fit--strong small">${esc(tt("dash.yourState"))}</span></div><span class="source-host">${esc(hostOf(s.url))}</span></li>`),
    ...ids.map((id) => `<li class="dash-item"><div>${extLink(SOURCES[id].url, txt(SOURCES[id]), tt("rec.newTab"))}</div>
      <span class="source-host">${esc(hostOf(SOURCES[id].url))}</span></li>`)
  ].join("");
  return section("d-govt", 2, "dash.govtT", `
    <p class="muted">${esc(tt("dash.govtD"))}</p>
    <p class="alert alert--info small"><strong>${esc(tt("jobs.verify"))}</strong></p>
    <ul class="dash-list">${rows}</ul>`, linkBtn("jobs.html", tt("dash.openExplorer")));
}

function gapsHtml() {
  const gaps = state.data.courses.gaps;
  if (!gaps.length) return section("d-gaps", 3, "dash.gapsT", empty("dash.gapsEmpty"));
  const chips = gaps.map((g) => `<li><a class="chip chip--gap chip-link" href="courses.html?skill=${encodeURIComponent(g.skill)}">
    ${esc(skillName(g.skill))} <span class="count">${g.careers.length}</span></a></li>`).join("");
  return section("d-gaps", 3, "dash.gapsT", `<p class="muted">${esc(tt("dash.gapsD"))}</p><ul class="chip-list">${chips}</ul>`);
}

function coursesHtml() {
  const items = state.data.courses.items.slice(0, 3);
  if (!items.length) return section("d-courses", 4, "dash.coursesT", empty("dash.coursesEmpty"), linkBtn("courses.html", tt("dash.seeCourses")));
  const rows = items.map((r) => {
    const cost = r.course.cost ? tt(`courses.costLabel.${r.course.cost}`) : tt("courses.notVerified");
    return `<li class="dash-item"><div><strong>${esc(txt(r.course.title))}</strong>
      <span class="muted small"> · ${esc(txt(r.course.provider))}</span><br>
      <span class="small">${esc(tt("course.why.gap", { skills: r.covers.map(skillName).join(", ") }))}</span></div>
      <span class="sector small">${esc(cost)}</span></li>`;
  }).join("");
  return section("d-courses", 4, "dash.coursesT", `<ul class="dash-list">${rows}</ul>
    <p class="muted small">${esc(tt("course.check.noJob"))}</p>`, linkBtn("courses.html", tt("dash.seeCourses")));
}

function schemesHtml() {
  const worth = state.data.schemes.filter((r) => r.worthALook).slice(0, 3);
  if (!worth.length) return section("d-schemes", 5, "dash.schemesT", empty("dash.schemesEmpty"), linkBtn("schemes.html", tt("dash.seeSchemes")));
  const rows = worth.map((r) => `<li class="dash-item"><div><strong>${esc(txt(r.scheme.name))}</strong><br>
    <span class="small muted">${esc(txt(r.scheme.purpose))}</span></div>
    <span class="fit fit--strong small">${esc(tt("schemes.badge"))}</span></li>`).join("");
  return section("d-schemes", 5, "dash.schemesT", `
    <p class="alert alert--warn small">${esc(tt("schemes.warn"))}</p>
    <ul class="dash-list">${rows}</ul>`, linkBtn("schemes.html", tt("dash.seeSchemes")));
}

function sayTask(task) {
  const v = task.vars || {};
  const vars = {};
  if (v.careers) vars.careers = v.careers.map(careerName).filter(Boolean).join(", ");
  if (v.career) vars.career = careerName(v.career);
  if (v.course) vars.course = courseName(v.course);
  if (v.skill !== undefined) vars.skill = skillName(v.skill) || "—";
  if (v.scheme) vars.scheme = schemeName(v.scheme);
  return tt(task.key, vars);
}

function planHtml() {
  const plan = state.data.plan;
  const { done, total } = progress(plan, state.done);
  const weeks = plan.weeks.map((w) => `
    <div class="plan-week">
      <h3>${esc(tt(w.titleKey))} <span class="muted small">(${esc(tt("plan.days", { days: w.days }))})</span></h3>
      <ul class="plan-tasks">
        ${w.tasks.map((task) => `
          <li><label class="plan-task">
            <input type="checkbox" data-task="${esc(task.id)}"${state.done.includes(task.id) ? " checked" : ""}>
            <span>${esc(sayTask(task))}</span>
          </label></li>`).join("")}
      </ul>
    </div>`).join("");
  return section("d-plan", 6, "plan.title", `
    <p class="muted">${esc(tt("plan.lead"))}</p>
    <div class="plan-progress">
      <progress max="${total}" value="${done}" aria-labelledby="plan-progress-text"></progress>
      <span id="plan-progress-text" aria-live="polite">${esc(tt("plan.progress", { done, total }))}</span>
      ${done ? `<button type="button" class="btn btn-ghost btn-small no-print" data-action="reset-plan">${esc(tt("plan.reset"))}</button>` : ""}
    </div>
    <div class="plan-weeks">${weeks}</div>`);
}

function emptyHtml() {
  return `
  <div class="page-head"><h1>${esc(tt("dash.h1"))}</h1></div>
  <div class="empty-state">
    <div class="icon-tile" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="13" y="3" width="8" height="5" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="13" y="10" width="8" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="3" y="13" width="8" height="8" rx="2" fill="none" stroke="currentColor" stroke-width="2"/></svg></div>
    <h2>${esc(tt("dash.noProfileT"))}</h2>
    <p class="muted">${esc(tt("dash.noProfileD"))}</p>
    <a class="btn btn-primary" href="profile.html">${esc(tt("rec.noProfileBtn"))}</a>
  </div>`;
}

function render() {
  root.setAttribute("aria-busy", "false");
  if (!state.saved) { root.innerHTML = emptyHtml(); return; }
  root.innerHTML = headerHtml() + `
    <div class="dash-grid">
      ${matchesHtml()}
      ${govtHtml()}
      ${gapsHtml()}
      ${coursesHtml()}
      ${schemesHtml()}
    </div>
    ${planHtml()}`;
}

function updateProgress() {
  const { done, total } = progress(state.data.plan, state.done);
  const bar = root.querySelector(".plan-progress progress");
  const text = document.getElementById("plan-progress-text");
  if (bar) bar.value = done;
  if (text) text.textContent = tt("plan.progress", { done, total });
}

function init() {
  if (!root) return;
  state.saved = loadProfile();
  if (state.saved) {
    state.data = compute(state.saved.profile);
    state.done = loadDone(state.data.plan);
  }

  root.addEventListener("change", (e) => {
    const box = e.target.closest("[data-task]");
    if (!box) return;
    const id = box.dataset.task;
    state.done = box.checked ? [...new Set([...state.done, id])] : state.done.filter((x) => x !== id);
    saveDone();
    updateProgress(); // no full redraw, so keyboard focus stays on the checkbox
  });
  root.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    if (btn.dataset.action === "print") window.print();
    if (btn.dataset.action === "reset-plan") {
      state.done = [];
      saveDone();
      render();
      document.getElementById("d-plan-t")?.focus();
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
