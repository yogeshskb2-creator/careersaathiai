// Private Job Finder page: a 5-step form with a review step, then results in four
// tabs — jobs for you, company directory, skills gap & plan, and staying safe.
// All matching runs in this browser (js/pj-model.js). Nothing is sent anywhere.

import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { esc, extLink, formatDate } from "./ui.js";
import { getPath, setPath } from "./profile-model.js";
import { STATES, labelOf } from "../data/options.js";
import {
  PJ_EDUCATION, PJ_STREAMS, PJ_STUDY_STATUS, PJ_INSTITUTION, PJ_CERTS, PJ_SKILLS, PJ_EXPERIENCE,
  PJ_CATEGORIES, PJ_EMP_TYPES, PJ_WORK_MODES, PJ_SHIFTS, PJ_AVAILABILITY, PJ_EMPLOYER_TYPES,
  PJ_LOCATION_PREF, PJ_RADIUS, PJ_LANGUAGES, PJ_YES_NO, pjLabel
} from "../data/pj-options.js";
import { ROLES } from "../data/private-roles.js";
import { SALARY_SOURCE } from "../data/salary.js";
import { COMPANIES, COMPANY_TYPES, INDUSTRIES, VERIFY_TOOLS, REVIEW_SITES, COMPANIES_CHECKED } from "../data/companies.js";
import {
  normalizePJ, emptyPJ, validatePJ, matchRoles, salaryView, salaryVsMin, companiesForRole,
  searchLinks, gapAnalysis, roleById, CATEGORY_ORDER
} from "./pj-model.js";
import { loadPJ, savePJ, clearPJ, saveDraftPJ, loadDraftPJ } from "./pj-store.js";
import { todayISO } from "./vacancy-match.js";

const root = document.getElementById("pj-app");
const STEP_IDS = ["place", "edu", "skills", "job", "env", "review"];
const LAST = STEP_IDS.length - 1;

const state = {
  mode: "form", step: 0, profile: emptyPJ(), errors: {}, remember: false, where: "",
  tab: "jobs", catFilter: "all", sort: "best",
  coType: "all", coInd: "all", coMine: true, coSort: "name", gapRole: "", notice: ""
};

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const lab = (o) => (o ? o[L()] || o.en : "");
const txt = (o) => (o ? o[L()] || o.en : "");
const fid = (path) => "pj-" + path.replace(/\./g, "-");
const skillName = (id) => pjLabel(PJ_SKILLS, id, L());
const roleTitle = (id) => txt(roleById(id)?.title);
const money = (n) => "₹" + Number(n).toLocaleString("en-IN");
const fieldLabels = {};

// ---------- Messages from the model ----------
function say(m) {
  const v = m.vars || {};
  const vars = { ...v };
  if (Array.isArray(v.skills)) vars.skills = v.skills.map(skillName).join(", ");
  if (v.rank !== undefined) vars.level = lab(PJ_EDUCATION.find((e) => e.rank === v.rank));
  if (v.role) vars.note = txt(roleById(v.role)?.formal?.note);
  if (Array.isArray(v.roles)) vars.roles = v.roles.map(roleTitle).join(", ");
  let key = m.key;
  if (key === "pj.step.stepping" && !(v.roles && v.roles.length)) key = "pj.step.steppingNone";
  if (key === "pj.step.formal" && !v.role) key = "pj.step.formalSkills";
  return tt(key, vars);
}

// ---------- Field builders (same look as the Career Profile form) ----------
function req(required) {
  return required ? ` <span class="req" aria-hidden="true">*</span><span class="visually-hidden"> (${esc(tt("f.required"))})</span>` : "";
}
function errorHtml(path) {
  const key = state.errors[path];
  return key ? `<p class="error-text" id="${fid(path)}-error">${esc(tt(key))}</p>` : "";
}
function described(path, hint) {
  const ids = [];
  if (hint) ids.push(`${fid(path)}-hint`);
  if (state.errors[path]) ids.push(`${fid(path)}-error`);
  return ids.length ? ` aria-describedby="${ids.join(" ")}"` : "";
}
function hintHtml(path, hint) { return hint ? `<p class="hint" id="${fid(path)}-hint">${esc(tt(hint))}</p>` : ""; }

function selectField(path, key, list, { required = false, hint = "" } = {}) {
  fieldLabels[path] = key;
  const value = getPath(state.profile, path) || "";
  return `
  <div class="field">
    <label for="${fid(path)}">${esc(tt(key))}${req(required)}</label>
    ${hintHtml(path, hint)}
    <select id="${fid(path)}" data-bind="${path}" data-kind="text" aria-invalid="${!!state.errors[path]}"${described(path, hint)}>
      <option value="">${esc(tt("f.choose"))}</option>
      ${list.map((o) => `<option value="${esc(o.id)}"${o.id === value ? " selected" : ""}>${esc(lab(o))}</option>`).join("")}
    </select>
    ${errorHtml(path)}
  </div>`;
}

function textField(path, key, { hint = "", max = 80, kind = "text", inputmode = "", short = false, autocomplete = "off" } = {}) {
  fieldLabels[path] = key;
  const raw = getPath(state.profile, path);
  const value = raw === null || raw === undefined ? "" : String(raw);
  return `
  <div class="field${short ? " field--short" : ""}">
    <label for="${fid(path)}">${esc(tt(key))}</label>
    ${hintHtml(path, hint)}
    <input type="text" id="${fid(path)}" data-bind="${path}" data-kind="${kind}" value="${esc(value)}" maxlength="${max}"
      autocomplete="${autocomplete}"${inputmode ? ` inputmode="${inputmode}"` : ""} aria-invalid="${!!state.errors[path]}"${described(path, hint)}>
    ${errorHtml(path)}
  </div>`;
}

function choiceGroup(path, key, list, { multiple = false, required = false, hint = "", cols = 2 } = {}) {
  fieldLabels[path] = key;
  const value = getPath(state.profile, path);
  const items = list.map((o) => {
    const checked = multiple ? (value || []).includes(o.id) : value === o.id;
    return `
      <label class="choice">
        <input type="${multiple ? "checkbox" : "radio"}" name="${fid(path)}" value="${esc(o.id)}" data-bind="${path}"
          data-kind="${multiple ? "array" : "text"}"${checked ? " checked" : ""}>
        <span>${esc(lab(o))}</span>
      </label>`;
  }).join("");
  return `
  <fieldset class="field choice-group" id="${fid(path)}" tabindex="-1" aria-invalid="${!!state.errors[path]}"${described(path, hint)}>
    <legend>${esc(tt(key))}${req(required)}</legend>
    ${hintHtml(path, hint)}
    <div class="choices choices--${cols}">${items}</div>
    ${errorHtml(path)}
  </fieldset>`;
}

// ---------- Form steps ----------
function stepPlace() {
  return `
    ${textField("name", "pj.f.name", { hint: "pj.f.nameHint", max: 60, autocomplete: "given-name" })}
    ${selectField("state", "pj.f.state", STATES, { required: true })}
    <div class="grid-fields">
      ${textField("district", "pj.f.district", { max: 60 })}
      ${textField("city", "pj.f.city", { max: 60, hint: "pj.f.cityHint" })}
    </div>
    ${textField("pin", "pj.f.pin", { hint: "pj.f.pinHint", max: 6, inputmode: "numeric", short: true, autocomplete: "postal-code" })}
    ${choiceGroup("locationPref", "pj.f.locationPref", PJ_LOCATION_PREF, { required: true })}
    ${selectField("radius", "pj.f.radius", PJ_RADIUS)}
    ${choiceGroup("relocate", "pj.f.relocate", PJ_YES_NO)}
    ${selectField("language", "pj.f.language", PJ_LANGUAGES)}
    <p class="alert alert--info small">${esc(tt("pj.f.contactNote"))}</p>`;
}

function stepEdu() {
  return `
    ${choiceGroup("edu.level", "pj.f.level", PJ_EDUCATION, { required: true, hint: "pj.f.levelHint" })}
    ${selectField("edu.stream", "pj.f.stream", PJ_STREAMS)}
    ${textField("edu.course", "pj.f.course", { hint: "pj.f.courseHint", max: 80 })}
    <div class="grid-fields">
      ${textField("edu.year", "pj.f.year", { max: 4, inputmode: "numeric", short: true, kind: "number" })}
      ${selectField("edu.institution", "pj.f.institution", PJ_INSTITUTION)}
    </div>
    ${choiceGroup("edu.status", "pj.f.status", PJ_STUDY_STATUS)}
    ${choiceGroup("edu.certs", "pj.f.certs", PJ_CERTS, { multiple: true, hint: "pj.f.certsHint" })}
    ${textField("edu.subjects", "pj.f.subjects", { max: 120 })}`;
}

function stepSkills() {
  return `
    ${choiceGroup("skills", "pj.f.skills", PJ_SKILLS, { multiple: true, hint: "pj.f.skillsHint" })}
    ${textField("customSkills", "pj.f.customSkills", { hint: "pj.f.customHint", max: 160 })}
    ${choiceGroup("experience", "pj.f.experience", PJ_EXPERIENCE, { required: true })}
    ${textField("pastRoles", "pj.f.pastRoles", { hint: "pj.f.pastHint", max: 160 })}
    ${textField("industries", "pj.f.industries", { max: 120 })}
    ${choiceGroup("internship", "pj.f.internship", PJ_YES_NO)}`;
}

function stepJob() {
  const roles = ROLES.map((r) => ({ id: r.id, en: r.title.en, hi: r.title.hi }));
  return `
    ${choiceGroup("prefs.cats", "pj.f.cats", PJ_CATEGORIES, { multiple: true, required: true, hint: "pj.f.catsHint" })}
    ${selectField("prefs.targetRole", "pj.f.targetRole", roles, { hint: "pj.f.targetHint" })}
    <div class="grid-fields">
      ${textField("prefs.title", "pj.f.title", { max: 80 })}
      ${textField("prefs.industry", "pj.f.industry", { max: 80 })}
    </div>
    ${choiceGroup("prefs.types", "pj.f.types", PJ_EMP_TYPES, { multiple: true, cols: 3 })}
    ${choiceGroup("prefs.mode", "pj.f.mode", PJ_WORK_MODES)}
    ${choiceGroup("prefs.shift", "pj.f.shift", PJ_SHIFTS)}
    ${textField("prefs.minSalary", "pj.f.minSalary", { hint: "pj.f.minSalaryHint", max: 7, inputmode: "numeric", short: true, kind: "number" })}
    ${choiceGroup("prefs.availability", "pj.f.availability", PJ_AVAILABILITY, { cols: 3 })}
    ${choiceGroup("prefs.travel", "pj.f.travel", PJ_YES_NO)}`;
}

function stepEnv() {
  return `
    ${choiceGroup("env.employerTypes", "pj.f.employerTypes", PJ_EMPLOYER_TYPES, { multiple: true })}
    <div class="grid-fields">
      ${choiceGroup("env.smartphone", "pj.f.smartphone", PJ_YES_NO)}
      ${choiceGroup("env.computer", "pj.f.computer", PJ_YES_NO)}
      ${choiceGroup("env.internet", "pj.f.internet", PJ_YES_NO)}
      ${choiceGroup("env.training", "pj.f.training", PJ_YES_NO)}
    </div>
    ${choiceGroup("env.certification", "pj.f.certification", PJ_YES_NO)}
    <label class="choice choice--single">
      <input type="checkbox" id="pj-remember"${state.remember ? " checked" : ""}>
      <span>${esc(tt("pj.f.remember"))}</span>
    </label>
    <p class="hint">${esc(tt("pj.f.rememberHint"))}</p>`;
}

function reviewRow(key, value) {
  return `<div class="review-row"><dt>${esc(tt(key))}</dt><dd>${esc(value || tt("pj.notGiven"))}</dd></div>`;
}
const many = (list, ids) => ids.map((id) => pjLabel(list, id, L())).join(", ");
const one = (list, id) => pjLabel(list, id, L());

function stepReview() {
  const p = normalizePJ(state.profile);
  const block = (step, title, rows) => `
    <div class="review-block">
      <div class="review-head"><h3>${esc(tt(title))}</h3>
        <button type="button" class="btn btn-ghost btn-small" data-action="goto" data-step="${step}">${esc(tt("pj.btn.editSection"))}</button></div>
      <dl>${rows}</dl>
    </div>`;
  return `
    ${block(0, "pj.step.place.t",
      reviewRow("pj.f.name", p.name) + reviewRow("pj.f.state", labelOf(STATES, p.state, L())) +
      reviewRow("pj.f.district", p.district) + reviewRow("pj.f.city", p.city) + reviewRow("pj.f.pin", p.pin) +
      reviewRow("pj.f.locationPref", one(PJ_LOCATION_PREF, p.locationPref)) + reviewRow("pj.f.radius", one(PJ_RADIUS, p.radius)) +
      reviewRow("pj.f.relocate", one(PJ_YES_NO, p.relocate)) + reviewRow("pj.f.language", one(PJ_LANGUAGES, p.language)))}
    ${block(1, "pj.step.edu.t",
      reviewRow("pj.f.level", one(PJ_EDUCATION, p.edu.level)) + reviewRow("pj.f.stream", one(PJ_STREAMS, p.edu.stream)) +
      reviewRow("pj.f.course", p.edu.course) + reviewRow("pj.f.year", p.edu.year ? String(p.edu.year) : "") +
      reviewRow("pj.f.status", one(PJ_STUDY_STATUS, p.edu.status)) + reviewRow("pj.f.institution", one(PJ_INSTITUTION, p.edu.institution)) +
      reviewRow("pj.f.certs", many(PJ_CERTS, p.edu.certs)) + reviewRow("pj.f.subjects", p.edu.subjects))}
    ${block(2, "pj.step.skills.t",
      reviewRow("pj.f.skills", many(PJ_SKILLS, p.skills)) + reviewRow("pj.f.customSkills", p.customSkills) +
      reviewRow("pj.f.experience", one(PJ_EXPERIENCE, p.experience)) + reviewRow("pj.f.pastRoles", p.pastRoles) +
      reviewRow("pj.f.industries", p.industries) + reviewRow("pj.f.internship", one(PJ_YES_NO, p.internship)))}
    ${block(3, "pj.step.job.t",
      reviewRow("pj.f.cats", many(PJ_CATEGORIES, p.prefs.cats)) + reviewRow("pj.f.targetRole", roleTitle(p.prefs.targetRole)) +
      reviewRow("pj.f.title", p.prefs.title) + reviewRow("pj.f.industry", p.prefs.industry) +
      reviewRow("pj.f.types", many(PJ_EMP_TYPES, p.prefs.types)) + reviewRow("pj.f.mode", one(PJ_WORK_MODES, p.prefs.mode)) +
      reviewRow("pj.f.shift", one(PJ_SHIFTS, p.prefs.shift)) + reviewRow("pj.f.minSalary", p.prefs.minSalary ? money(p.prefs.minSalary) : "") +
      reviewRow("pj.f.availability", one(PJ_AVAILABILITY, p.prefs.availability)) + reviewRow("pj.f.travel", one(PJ_YES_NO, p.prefs.travel)))}
    ${block(4, "pj.step.env.t",
      reviewRow("pj.f.employerTypes", many(PJ_EMPLOYER_TYPES, p.env.employerTypes)) +
      reviewRow("pj.f.smartphone", one(PJ_YES_NO, p.env.smartphone)) + reviewRow("pj.f.computer", one(PJ_YES_NO, p.env.computer)) +
      reviewRow("pj.f.internet", one(PJ_YES_NO, p.env.internet)) + reviewRow("pj.f.training", one(PJ_YES_NO, p.env.training)) +
      reviewRow("pj.f.certification", one(PJ_YES_NO, p.env.certification)))}
    <p class="alert alert--info small">${esc(tt(state.remember ? "pj.review.local" : "pj.review.session"))}</p>`;
}

const STEP_HTML = { place: stepPlace, edu: stepEdu, skills: stepSkills, job: stepJob, env: stepEnv, review: stepReview };

function stepperHtml() {
  const items = STEP_IDS.slice(0, LAST).map((s, i) => {
    const cls = i < state.step ? "done" : i === state.step ? "current" : "";
    return `<li class="${cls}"${i === state.step ? ' aria-current="step"' : ""}><span class="dot">${i < state.step ? "✓" : i + 1}</span><span class="name">${esc(tt(`pj.step.${s}.t`))}</span></li>`;
  }).join("");
  const text = state.step === LAST ? tt("form.reviewStep") : tt("form.progress", { n: state.step + 1, total: LAST });
  return `<nav class="stepper" aria-label="${esc(tt("form.progressLabel"))}"><p class="stepper-text">${esc(text)}</p><ol>${items}</ol></nav>`;
}

function errorSummaryHtml() {
  const entries = Object.entries(state.errors);
  if (!entries.length) return "";
  const items = entries.map(([path, key]) => {
    const name = fieldLabels[path] ? `${tt(fieldLabels[path]).replace(/[?:]\s*$/, "")}: ` : "";
    return `<li><a href="#${fid(path)}" data-focus="${fid(path)}">${esc(name + tt(key))}</a></li>`;
  }).join("");
  return `<div class="alert alert--error error-summary" id="error-summary" tabindex="-1" role="alert"><strong>${esc(tt("err.summary"))}</strong><ul>${items}</ul></div>`;
}

function formHtml() {
  const id = STEP_IDS[state.step];
  const body = STEP_HTML[id]();
  return `
  ${state.notice ? `<p class="alert alert--ok" role="status">${esc(tt(state.notice))}</p>` : ""}
  ${stepperHtml()}
  <form class="card form-card" id="pj-form" novalidate>
    <h2 id="pj-step-title" tabindex="-1">${esc(tt(`pj.step.${id}.t`))}</h2>
    <p class="muted step-desc">${esc(tt(`pj.step.${id}.d`))}</p>
    <div id="pj-error-slot">${errorSummaryHtml()}</div>
    ${body}
    <div class="form-nav">
      ${state.step > 0 ? `<button type="button" class="btn btn-ghost" data-action="back">← ${esc(tt("btn.back"))}</button>` : "<span></span>"}
      <div class="btn-row">
        <button type="submit" class="btn btn-primary">${esc(tt(state.step === LAST ? "pj.btn.find" : "btn.next"))}${state.step === LAST ? "" : " →"}</button>
      </div>
    </div>
  </form>`;
}

// ---------- Results ----------
function stateName(p) { return labelOf(STATES, p.state, "en"); }

function salaryHtml(role, p) {
  const v = salaryView(role.salary, todayISO());
  if (!v.show) {
    return `<p class="pj-salary pj-salary--none"><strong>${esc(tt("pj.salary.hidden"))}</strong> ${esc(tt(`pj.salary.why.${v.reason}`, { n: v.profiles || 0 }))}</p>`;
  }
  const cmp = salaryVsMin(v, p.prefs.minSalary);
  return `
  <div class="pj-salary">
    <p class="pj-salary-range"><strong>${esc(tt("pj.salary.range", { low: money(v.low), high: money(v.high) }))}</strong></p>
    <p class="small muted">${esc(tt("pj.salary.basis", { avg: money(v.avg) }))}</p>
    <p class="small muted">${esc(tt("pj.salary.source", { n: v.profiles.toLocaleString("en-IN"), date: formatDate(v.updated, L()) }))}
      ${extLink(v.url, SALARY_SOURCE.name, tt("rec.newTab"))}</p>
    ${v.limited ? `<p class="small pj-note">${esc(tt("pj.salary.limited"))}</p>` : ""}
    ${cmp ? `<p class="small pj-note">${esc(tt(`pj.salary.vs.${cmp}`, { min: money(p.prefs.minSalary) }))}</p>` : ""}
  </div>`;
}

function roleCard(r, p, idx) {
  const role = r.role;
  const s = searchLinks(role, p, stateName(p));
  const cos = companiesForRole(role).slice(0, 8);
  const linkText = { ncs: "pj.link.ncs", indeed: "pj.link.indeed", linkedin: "pj.link.linkedin", apprenticeship: "pj.link.apprenticeship" };
  return `
  <article class="card rec-card pj-card" aria-labelledby="pj-r-${role.id}">
    <div class="rec-top">
      <span class="fit pj-cat pj-cat--${r.category}">${esc(tt(`pj.cat.${r.category}`))}</span>
      ${r.isTarget ? `<span class="interest-tag">🎯 ${esc(tt("pj.targetTag"))}</span>` : ""}
    </div>
    <h3 id="pj-r-${role.id}">${esc(txt(role.title))}</h3>
    <p><span class="status status--potential"><span aria-hidden="true">◆</span> ${esc(tt("pj.kind.general"))}</span></p>
    <p>${esc(txt(role.does))}</p>
    <dl class="facts">
      <div class="review-row"><dt>${esc(tt("pj.eduUsual"))}</dt><dd>${esc(txt(role.eduNote))}</dd></div>
      <div class="review-row"><dt>${esc(tt("pj.skillsNeeded"))}</dt><dd>${esc(role.required.length ? role.required.map(skillName).join(", ") : tt("pj.noneSpecial"))}</dd></div>
      <div class="review-row"><dt>${esc(tt("pj.expNeeded"))}</dt><dd>${esc(role.expYears ? tt("pj.years", { n: role.expYears }) : tt("pj.freshersOk"))}</dd></div>
      <div class="review-row"><dt>${esc(tt("pj.workT"))}</dt><dd>${esc([many(PJ_EMP_TYPES, role.types), many(PJ_WORK_MODES, role.modes), many(PJ_SHIFTS, role.shifts)].join(" · "))}</dd></div>
    </dl>
    ${role.formal ? `<p class="alert alert--warn small"><strong>${esc(tt("pj.formalT"))}</strong> ${esc(txt(role.formal.note))}</p>` : ""}
    <h4>${esc(tt("pj.whyT"))}</h4>
    <ul class="list-check compact">${r.reasons.map((m) => `<li>${esc(say(m))}</li>`).join("")}</ul>
    ${r.gaps.length ? `<h4>${esc(tt("pj.gapsT"))}</h4><ul class="list-warn compact">${r.gaps.map((m) => `<li>${esc(say(m))}</li>`).join("")}</ul>` : ""}
    <h4>${esc(tt("pj.salaryT"))}</h4>
    ${salaryHtml(role, p)}
    <details class="rec-more"${idx < 2 ? " open" : ""}>
      <summary>${esc(tt("pj.searchT"))}</summary>
      <p class="small muted">${esc(tt("pj.searchD", { place: s.place }))}</p>
      <ul class="road-links">${s.links.map((l) => `<li>${extLink(l.url, tt(linkText[l.id]), tt("rec.newTab"))}${l.official ? "" : ` <span class="small muted">(${esc(tt("pj.link.thirdParty"))})</span>`}</li>`).join("")}</ul>
      ${role.next.length ? `<h4>${esc(tt("pj.nextT"))}</h4><p>${esc(role.next.map(roleTitle).join(" → "))}</p>` : ""}
      <h4>${esc(tt("pj.companiesT"))}</h4>
      <p class="small muted">${esc(tt("pj.companiesD"))}</p>
      <ul class="chip-list">${cos.map((c) => `<li><button type="button" class="chip chip--plain chip-btn" data-action="company" data-id="${c.id}">${esc(c.name)}</button></li>`).join("")}</ul>
    </details>
    <p class="btn-row"><button type="button" class="btn btn-secondary btn-small" data-action="gap" data-role="${role.id}">${esc(tt("pj.seeGap"))}</button></p>
  </article>`;
}

function jobsTab(p, results) {
  const counts = Object.fromEntries(CATEGORY_ORDER.map((c) => [c, results.filter((r) => r.category === c).length]));
  let list = results.filter((r) => state.catFilter === "all" || r.category === state.catFilter);
  if (state.sort === "salary") {
    const val = (r) => { const v = salaryView(r.role.salary, todayISO()); return v.show ? v.avg : -1; };
    list = [...list].sort((a, b) => val(b) - val(a));
  } else if (state.sort === "missing") {
    list = [...list].sort((a, b) => a.missing.length - b.missing.length || CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category));
  }
  const filters = ["all", ...CATEGORY_ORDER].map((c) => `
    <button type="button" class="filter-btn" data-cat="${c}" aria-pressed="${state.catFilter === c}">${esc(tt(c === "all" ? "pj.filter.all" : `pj.cat.${c}`))}
      <span class="count">${c === "all" ? results.length : counts[c]}</span></button>`).join("");
  return `
  <details class="pj-legend card">
    <summary><strong>${esc(tt("pj.catsT"))}</strong></summary>
    <ul class="compact">${CATEGORY_ORDER.map((c) => `<li><strong>${esc(tt(`pj.cat.${c}`))}:</strong> ${esc(tt(`pj.cat.${c}D`))}</li>`).join("")}</ul>
  </details>
  <div class="filter-bar" role="group" aria-label="${esc(tt("pj.filterLabel"))}">${filters}</div>
  <div class="field field--inline">
    <label for="pj-sort">${esc(tt("pj.sort.label"))}</label>
    <select id="pj-sort" data-control="sort">
      ${["best", "missing", "salary"].map((s) => `<option value="${s}"${state.sort === s ? " selected" : ""}>${esc(tt(`pj.sort.${s}`))}</option>`).join("")}
    </select>
  </div>
  <p class="muted" aria-live="polite">${esc(tt("pj.count", { n: list.length }))}</p>
  ${list.length ? `<div class="rec-grid">${list.map((r, i) => roleCard(r, p, i)).join("")}</div>` : `<p class="alert alert--info">${esc(tt("pj.none"))}</p>`}`;
}

function verifyRows(c) {
  const identity = c.listing ? tt("pj.v.identityListed", { listing: c.listing })
    : c.parent ? tt("pj.v.identitySub", { parent: c.parent }) : tt("pj.v.identityNone");
  const rows = [
    ["pj.v.identity", identity, c.listing || c.parent ? "ok" : "warn"],
    ["pj.v.website", tt("pj.v.websiteD"), "ok"],
    ["pj.v.careers", c.careers.checked ? tt("pj.v.careersYes", { date: formatDate(COMPANIES_CHECKED, L()) }) : tt("pj.v.careersNo"), c.careers.checked ? "ok" : "warn"],
    ["pj.v.vacancy", tt("pj.v.vacancyD"), "warn"],
    ["pj.v.contact", tt("pj.v.contactD"), "warn"],
    ["pj.v.reputation", tt("pj.v.reputationD"), "warn"]
  ];
  return `<ul class="pj-verify">${rows.map(([k, v, s]) => `<li class="pj-v pj-v--${s}"><span class="pj-v-icon" aria-hidden="true">${s === "ok" ? "✓" : "!"}</span><span><strong>${esc(tt(k))}:</strong> ${esc(v)}</span></li>`).join("")}</ul>`;
}

function companyCard(c, p, results) {
  const type = COMPANY_TYPES.find((x) => x.id === c.type);
  const ind = INDUSTRIES.find((x) => x.id === c.industry);
  const mine = results.filter((r) => r.role.cats.some((x) => c.cats.includes(x)) && ["strong", "good", "entry"].includes(r.category)).slice(0, 5);
  const fact = (key, val) => `<div class="review-row"><dt>${esc(tt(key))}</dt><dd>${esc(val || tt("pj.co.notPublic"))}</dd></div>`;
  return `
  <article class="card pj-co" id="co-${c.id}" aria-labelledby="co-${c.id}-t" tabindex="-1">
    <div class="rec-top">
      <span class="sector">${esc(lab(ind))}</span>
      <span class="pj-co-type">${esc(lab(type))}</span>
    </div>
    <h3 id="co-${c.id}-t">${esc(c.name)}</h3>
    <p>${esc(txt(c.business))}</p>
    <p class="status status--unverified"><span aria-hidden="true">?</span> ${esc(tt("pj.v.overall"))}</p>
    ${c.fraudNotice ? `<p class="small pj-note">🛡️ ${esc(tt("pj.v.fraud"))}</p>` : ""}
    <p class="btn-row">
      ${extLink(c.website, tt("pj.co.website"), tt("rec.newTab"), "btn btn-secondary btn-small")}
      ${c.careers.checked ? extLink(c.careers.url, tt("pj.co.careers"), tt("rec.newTab"), "btn btn-primary btn-small") : ""}
    </p>
    ${c.careers.checked ? "" : `<p class="small muted">${esc(tt("pj.co.careersNone"))}</p>`}
    ${mine.length ? `<h4>${esc(tt("pj.co.rolesForYou"))}</h4><ul class="chip-list">${mine.map((r) => `<li><span class="chip chip--plain">${esc(txt(r.role.title))}</span></li>`).join("")}</ul>` : ""}
    <details class="rec-more">
      <summary>${esc(tt("pj.co.profile"))}</summary>
      <dl class="facts">
        ${fact("pj.co.founded", c.founded)}
        ${fact("pj.co.founders", c.founders)}
        ${fact("pj.co.hq", c.hq)}
        ${c.parent ? fact("pj.co.parent", c.parent) : ""}
        ${fact("pj.co.listing", c.listing)}
        ${fact("pj.co.people", c.keyPeople)}
        ${fact("pj.co.employees", c.employees ? tt("pj.co.employeesV", { n: c.employees.n, asOf: c.employees.asOf }) : "")}
        ${fact("pj.co.oftenHires", many(PJ_CATEGORIES, c.cats))}
      </dl>
      ${c.notes ? `<p class="small">${esc(txt(c.notes))}</p>` : ""}
      <h4>${esc(tt("pj.co.verifyT"))}</h4>
      ${verifyRows(c)}
      <p class="small muted">${esc(tt("pj.co.wikiNote"))}</p>
      <h4>${esc(tt("pj.co.sources"))}</h4>
      <ul class="source-list compact">${c.sources.map((u) => `<li>${extLink(u, u.replace(/^https:\/\/(www\.)?/, "").slice(0, 60), tt("rec.newTab"))}</li>`).join("")}</ul>
      <p class="small muted">${esc(tt("pj.co.checked", { date: formatDate(COMPANIES_CHECKED, L()) }))}</p>
    </details>
  </article>`;
}

function companiesTab(p, results) {
  const myCats = new Set(results.flatMap((r) => r.role.cats));
  let list = COMPANIES.filter((c) =>
    (state.coType === "all" || c.type === state.coType) &&
    (state.coInd === "all" || c.industry === state.coInd) &&
    (!state.coMine || c.cats.some((x) => myCats.has(x))));
  const year = (c) => Number.parseInt(c.founded, 10) || 9999;
  list = [...list].sort(state.coSort === "old" ? (a, b) => year(a) - year(b)
    : state.coSort === "new" ? (a, b) => year(b) - year(a) : (a, b) => a.name.localeCompare(b.name));
  const opt = (arr, v) => arr.map((o) => `<option value="${o.id}"${v === o.id ? " selected" : ""}>${esc(lab(o))}</option>`).join("");
  return `
  <p class="lead">${esc(tt("pj.co.lead"))}</p>
  <div class="pj-controls">
    <div class="field"><label for="pj-co-type">${esc(tt("pj.co.type"))}</label>
      <select id="pj-co-type" data-control="coType"><option value="all">${esc(tt("pj.co.all"))}</option>${opt(COMPANY_TYPES, state.coType)}</select></div>
    <div class="field"><label for="pj-co-ind">${esc(tt("pj.co.industry"))}</label>
      <select id="pj-co-ind" data-control="coInd"><option value="all">${esc(tt("pj.co.all"))}</option>${opt(INDUSTRIES, state.coInd)}</select></div>
    <div class="field"><label for="pj-co-sort">${esc(tt("pj.sort.label"))}</label>
      <select id="pj-co-sort" data-control="coSort">
        ${["name", "old", "new"].map((s) => `<option value="${s}"${state.coSort === s ? " selected" : ""}>${esc(tt(`pj.co.sort.${s}`))}</option>`).join("")}
      </select></div>
  </div>
  <label class="choice choice--single"><input type="checkbox" data-control="coMine"${state.coMine ? " checked" : ""}><span>${esc(tt("pj.co.mine"))}</span></label>
  <p class="muted" aria-live="polite">${esc(tt("pj.co.count", { n: list.length, total: COMPANIES.length }))}</p>
  ${list.length ? `<div class="rec-grid">${list.map((c) => companyCard(c, p, results)).join("")}</div>` : `<p class="alert alert--info">${esc(tt("pj.co.none"))}</p>`}
  <section class="card pj-local" aria-labelledby="pj-local-t">
    <h3 id="pj-local-t">${esc(tt("pj.local.t"))}</h3>
    <p>${esc(tt("pj.local.d"))}</p>
    <ul class="compact">${[1, 2, 3, 4].map((i) => `<li>${esc(tt(`pj.local.${i}`))}</li>`).join("")}</ul>
    <h4>${esc(tt("pj.verify.t"))}</h4>
    <ul class="road-links">${VERIFY_TOOLS.map((v) => `<li>${extLink(v.url, txt(v.name), tt("rec.newTab"))}<br><span class="small muted">${esc(txt(v.how))}</span></li>`).join("")}</ul>
    <h4>${esc(tt("pj.co.reviewsT"))}</h4>
    <p class="small">${esc(tt("pj.co.reviewsD"))}</p>
    <ul class="chip-list">${REVIEW_SITES.map((r) => `<li>${extLink(r.url, r.name, tt("rec.newTab"), "chip chip-link")}</li>`).join("")}</ul>
  </section>`;
}

function gapTab(p, results) {
  const options = results.map((r) => r.role);
  ROLES.forEach((r) => { if (!options.includes(r)) options.push(r); });
  const target = state.gapRole || p.prefs.targetRole || results.find((r) => !["strong", "good"].includes(r.category))?.roleId || results[0]?.roleId || ROLES[0].id;
  const g = gapAnalysis(p, target, todayISO());
  const chips = (ids, cls = "") => ids.length ? `<ul class="chip-list">${ids.map((s) => `<li><span class="chip chip--plain ${cls}">${esc(skillName(s))}</span></li>`).join("")}</ul>` : `<p class="muted small">${esc(tt("pj.gap.noneLeft"))}</p>`;
  const role = g.role;
  return `
  <div class="field">
    <label for="pj-gap-role">${esc(tt("pj.gap.choose"))}</label>
    <select id="pj-gap-role" data-control="gapRole">
      ${options.map((r) => `<option value="${r.id}"${r.id === target ? " selected" : ""}>${esc(txt(r.title))}</option>`).join("")}
    </select>
  </div>
  <div class="grid grid-2 pj-gap-grid">
    <section class="card" aria-labelledby="pj-cur-t">
      <h3 id="pj-cur-t">${esc(tt("pj.gap.current"))}</h3>
      <dl class="facts">
        <div class="review-row"><dt>${esc(tt("pj.f.level"))}</dt><dd>${esc(one(PJ_EDUCATION, p.edu.level) || tt("pj.notGiven"))}</dd></div>
        <div class="review-row"><dt>${esc(tt("pj.f.experience"))}</dt><dd>${esc(one(PJ_EXPERIENCE, p.experience) || tt("pj.notGiven"))}</dd></div>
        <div class="review-row"><dt>${esc(tt("pj.f.certs"))}</dt><dd>${esc(many(PJ_CERTS, p.edu.certs) || tt("pj.notGiven"))}</dd></div>
      </dl>
      <h4>${esc(tt("pj.f.skills"))}</h4>
      ${chips(p.skills)}
      <h4>${esc(tt("pj.gap.nowT"))}</h4>
      <p class="small">${esc(results.filter((r) => ["strong", "good", "entry"].includes(r.category)).slice(0, 5).map((r) => txt(r.role.title)).join(", ") || tt("pj.gap.nowNone"))}</p>
    </section>
    <section class="card" aria-labelledby="pj-tgt-t">
      <h3 id="pj-tgt-t">${esc(tt("pj.gap.target"))}: ${esc(txt(role.title))}</h3>
      <p><span class="fit pj-cat pj-cat--${g.category}">${esc(tt(`pj.cat.${g.category}`))}</span></p>
      <dl class="facts">
        <div class="review-row"><dt>${esc(tt("pj.eduUsual"))}</dt><dd>${esc(txt(role.eduNote))}</dd></div>
        <div class="review-row"><dt>${esc(tt("pj.skillsNeeded"))}</dt><dd>${esc(role.required.map(skillName).join(", ") || tt("pj.noneSpecial"))}</dd></div>
        <div class="review-row"><dt>${esc(tt("pj.expNeeded"))}</dt><dd>${esc(role.expYears ? tt("pj.years", { n: role.expYears }) : tt("pj.freshersOk"))}</dd></div>
      </dl>
      ${role.formal ? `<p class="alert alert--warn small"><strong>${esc(tt("pj.formalT"))}</strong> ${esc(txt(role.formal.note))}</p>` : ""}
      <p class="small muted">${esc(tt("pj.gap.typical"))}</p>
      <h4>${esc(tt("pj.salaryT"))}</h4>
      ${salaryHtml(role, p)}
    </section>
  </div>
  <section class="card pj-gap" aria-labelledby="pj-gap-t">
    <h3 id="pj-gap-t">${esc(tt("pj.gap.gapT"))}</h3>
    ${g.ready ? `<p class="alert alert--ok">${esc(tt("pj.gap.ready"))}</p>` : ""}
    <div class="pj-gap-rows">
      <div><h4>✓ ${esc(tt("pj.gap.have"))}</h4>${chips(g.have)}</div>
      <div><h4>📘 ${esc(tt("pj.gap.course"))}</h4>${chips(g.missingCourse)}</div>
      <div><h4>🛠️ ${esc(tt("pj.gap.practice"))}</h4>${chips(g.missingPractice)}</div>
      <div><h4>📜 ${esc(tt("pj.gap.licence"))}</h4>${g.missingLicence.length || !g.formalOk ? `${chips(g.missingLicence)}${!g.formalOk ? `<p class="small">${esc(txt(role.formal.note))}</p>` : ""}` : `<p class="muted small">${esc(tt("pj.gap.noneLeft"))}</p>`}</div>
      <div><h4>🎓 ${esc(tt("pj.gap.eduRow"))}</h4><p class="small">${esc(g.eduGap ? tt("pj.gap.eduNeeded", { level: lab(PJ_EDUCATION.find((e) => e.rank === role.eduRank)) }) : tt("pj.gap.eduOk"))}</p></div>
      <div><h4>⏳ ${esc(tt("pj.gap.expRow"))}</h4><p class="small">${esc(g.expGap ? tt("pj.gap.expNeeded", { n: g.expGap }) : tt("pj.gap.expOk"))}</p></div>
      ${g.improve.length ? `<div><h4>➕ ${esc(tt("pj.gap.improve"))}</h4>${chips(g.improve)}</div>` : ""}
    </div>
    <h3>${esc(tt("pj.gap.planT"))}</h3>
    <ol class="pj-plan">${g.steps.map((m) => `<li>${esc(say(m))}</li>`).join("")}</ol>
    <p class="alert alert--warn small">${esc(tt("pj.gap.planNote"))}</p>
    <div class="cta-band pj-consent">
      <h3>${esc(tt("pj.consent.q"))}</h3>
      <p>${esc(tt("pj.consent.d"))}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="skill-development.html?role=${encodeURIComponent(role.id)}">${esc(tt("pj.consent.yes"))}</a>
        <button type="button" class="btn btn-secondary" data-action="tab" data-tab="jobs">${esc(tt("pj.consent.no"))}</button>
      </div>
    </div>
  </section>`;
}

function safetyTab() {
  return `
  <section class="card" aria-labelledby="pj-safe-t">
    <h3 id="pj-safe-t">${esc(tt("pj.safe.t"))}</h3>
    <ul class="list-warn">${[1, 2, 3, 4, 5, 6, 7, 8].map((i) => `<li>${esc(tt(`pj.safe.${i}`))}</li>`).join("")}</ul>
    <h3>${esc(tt("pj.safe.doT"))}</h3>
    <ol>${[1, 2, 3].map((i) => `<li>${esc(tt(`pj.safe.do${i}`))}</li>`).join("")}</ol>
    <p>${extLink("https://cybercrime.gov.in/", tt("pj.safe.report"), tt("rec.newTab"), "btn btn-secondary btn-small")}</p>
    <p><a href="guide-avoid-job-scams.html">${esc(tt("pj.safe.guide"))} →</a></p>
  </section>`;
}

function resultsHtml() {
  const p = normalizePJ(state.profile);
  const results = matchRoles(p);
  const tabs = ["jobs", "companies", "gap", "safety"].map((id) => `
    <button type="button" class="filter-btn pj-tab" data-action="tab" data-tab="${id}" aria-pressed="${state.tab === id}">${esc(tt(`pj.tab.${id}`))}</button>`).join("");
  const body = state.tab === "companies" ? companiesTab(p, results) : state.tab === "gap" ? gapTab(p, results) : state.tab === "safety" ? safetyTab() : jobsTab(p, results);
  const strong = results.filter((r) => r.category === "strong" || r.category === "good").length;
  return `
  <section class="card pj-summary" aria-labelledby="pj-res-t">
    <h2 id="pj-res-t" tabindex="-1">${esc(p.name ? tt("pj.res.tName", { name: p.name }) : tt("pj.res.t"))}</h2>
    <p>${esc(tt("pj.res.summary", { n: results.length, s: strong }))}</p>
    <p class="small muted">${esc(tt(state.where === "local" ? "pj.res.savedLocal" : "pj.res.savedSession"))}</p>
    <div class="btn-row">
      <button type="button" class="btn btn-secondary btn-small" data-action="edit">${esc(tt("pj.btn.edit"))}</button>
      <button type="button" class="btn btn-danger btn-small" data-action="clear">${esc(tt("pj.btn.clear"))}</button>
    </div>
  </section>
  <details class="pj-kinds card">
    <summary><strong>${esc(tt("pj.kinds.t"))}</strong></summary>
    <ul class="compact">
      <li><span class="status status--vacancy">★ ${esc(tt("pj.kind.vacancy"))}</span> ${esc(tt("pj.kind.vacancyD"))}</li>
      <li><span class="status status--unverified">? ${esc(tt("pj.kind.employer"))}</span> ${esc(tt("pj.kind.employerD"))}</li>
      <li><span class="status status--potential">◆ ${esc(tt("pj.kind.general"))}</span> ${esc(tt("pj.kind.generalD"))}</li>
    </ul>
  </details>
  <div class="filter-bar pj-tabs" role="group" aria-label="${esc(tt("pj.tabsLabel"))}">${tabs}</div>
  <div id="pj-tab-body">${body}</div>`;
}

// ---------- Drawing and events ----------
function render(focus) {
  root.setAttribute("aria-busy", "false");
  root.innerHTML = state.mode === "results" ? resultsHtml() : formHtml();
  // The privacy box matters before filling the form; on results it only pushes content down.
  document.querySelectorAll(".pj-privacy, .pj-how").forEach((el) => { el.hidden = state.mode === "results"; });
  let el = null;
  if (focus === "heading") el = document.getElementById(state.mode === "results" ? "pj-res-t" : "pj-step-title");
  else if (focus === "summary") el = document.getElementById("error-summary");
  else if (focus) el = root.querySelector(focus);
  if (el) { el.focus({ preventScroll: false }); }
}

function persistDraft() { if (state.mode === "form") saveDraftPJ(state.profile, state.step); }

function onInput(e) {
  const el = e.target;
  if (el.id === "pj-remember") { state.remember = el.checked; return; }
  const ctl = el.dataset.control;
  if (ctl) {
    if (ctl === "coMine") state.coMine = el.checked; else state[ctl] = el.value;
    if (e.type === "change") render(`[data-control="${ctl}"]`);
    return;
  }
  const path = el.dataset.bind;
  if (!path) return;
  const kind = el.dataset.kind;
  if (kind === "array") {
    const set = new Set(getPath(state.profile, path) || []);
    el.checked ? set.add(el.value) : set.delete(el.value);
    setPath(state.profile, path, [...set]);
  } else if (kind === "number") {
    const v = el.value.trim();
    setPath(state.profile, path, v === "" ? null : v);
  } else {
    setPath(state.profile, path, el.value);
  }
  if (state.errors[path]) {
    delete state.errors[path];
    document.getElementById(`${fid(path)}-error`)?.remove();
    const f = document.getElementById(fid(path));
    if (f) f.setAttribute("aria-invalid", "false");
    const slot = document.getElementById("pj-error-slot");
    if (slot) slot.innerHTML = errorSummaryHtml();
  }
  persistDraft();
}

function checkStep() {
  if (state.step === LAST) return validatePJ(state.profile, 0);
  return validatePJ(state.profile, state.step + 1);
}

function onSubmit(e) {
  e.preventDefault();
  const errs = checkStep();
  state.errors = Object.fromEntries(errs.map((x) => [fieldPath(x.field), x.key]));
  if (errs.length) {
    if (state.step === LAST) state.step = stepOfField(errs[0].field);
    render("summary");
    return;
  }
  state.notice = "";
  if (state.step < LAST) { state.step += 1; persistDraft(); render("heading"); window.scrollTo({ top: 0 }); return; }
  state.profile = normalizePJ(state.profile);
  state.where = savePJ(state.profile, state.remember) || "session";
  state.mode = "results";
  state.tab = "jobs";
  render("heading");
  window.scrollTo({ top: 0 });
}

const FIELD_PATHS = { level: "edu.level", year: "edu.year", cats: "prefs.cats", minSalary: "prefs.minSalary" };
const fieldPath = (f) => FIELD_PATHS[f] || f;
function stepOfField(f) {
  if (["state", "pin", "locationPref"].includes(f)) return 0;
  if (["level", "year"].includes(f)) return 1;
  if (f === "experience") return 2;
  return 3;
}

function onClick(e) {
  const link = e.target.closest("[data-focus]");
  if (link) {
    e.preventDefault();
    const target = document.getElementById(link.dataset.focus);
    (target?.matches("fieldset") ? target.querySelector("input") : target)?.focus();
    return;
  }
  const cat = e.target.closest("[data-cat]");
  if (cat) { state.catFilter = cat.dataset.cat; render(`[data-cat="${state.catFilter}"]`); return; }
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  switch (btn.dataset.action) {
    case "back": state.errors = {}; state.step = Math.max(0, state.step - 1); persistDraft(); render("heading"); break;
    case "goto": state.errors = {}; state.step = Number(btn.dataset.step); persistDraft(); render("heading"); break;
    case "edit": state.mode = "form"; state.step = 0; state.errors = {}; render("heading"); window.scrollTo({ top: 0 }); break;
    case "clear":
      clearPJ();
      Object.assign(state, { mode: "form", step: 0, profile: emptyPJ(), errors: {}, remember: false, gapRole: "", notice: "pj.cleared" });
      render("heading"); window.scrollTo({ top: 0 });
      break;
    case "tab": state.tab = btn.dataset.tab; render(`[data-tab="${state.tab}"]`); break;
    case "gap": state.gapRole = btn.dataset.role; state.tab = "gap"; render("#pj-gap-role"); window.scrollTo({ top: 0 }); break;
    case "company":
      state.tab = "companies"; state.coMine = false; state.coType = "all"; state.coInd = "all";
      render(`#co-${btn.dataset.id}`);
      document.getElementById(`co-${btn.dataset.id}`)?.scrollIntoView({ block: "start" });
      break;
    default: break;
  }
}

function init() {
  if (!root) return;
  const saved = loadPJ();
  const draft = loadDraftPJ();
  if (saved) {
    state.profile = saved.profile; state.where = saved.where; state.remember = saved.where === "local"; state.mode = "results";
  } else if (draft) {
    state.profile = draft.profile; state.step = Math.min(Math.max(draft.step, 0), LAST);
  }
  const roleParam = new URLSearchParams(location.search).get("role");
  if (roleParam && roleById(roleParam)) { state.gapRole = roleParam; if (saved) state.tab = "gap"; }
  root.addEventListener("input", onInput);
  root.addEventListener("change", onInput);
  root.addEventListener("submit", onSubmit);
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
