// The 6-step Career Profile form.
// How it works (simple version):
//   - `state.profile` holds the answers. It is the single source of truth.
//   - render() draws the current step from `state.profile`.
//   - Inputs carry data-bind="some.path"; when they change we update the profile.
//   - Rules for "is this step OK?" live in profile-model.js (tested separately).

import { t } from "./i18n.js";
import { getLang, setLang } from "./layout.js";
import {
  STEPS, SKIPPABLE_STEPS, LIMITS, emptyProfile, emptyQualification,
  validateStep, firstInvalidStep, addCustomSkill, setPath, getPath, normalizeProfile
} from "./profile-model.js";
import { loadProfile, saveProfile, deleteProfile, saveDraft, loadDraft } from "./profile-store.js";
import {
  AGE_RANGES, STATES, LOCATION_PREFS, EMPLOYMENT_STATUS, EDUCATION_LEVELS, STREAMS,
  SKILL_GROUPS, ALL_SKILLS, GOALS, LEARNING_BUDGETS, EXPERIENCE_TYPES,
  CATEGORIES, GENDERS, YES_NO, labelOf
} from "../data/options.js";

const LANGUAGES = [
  { id: "en", en: "English", hi: "English" },
  { id: "hi", en: "हिंदी (Hindi)", hi: "हिंदी" }
];
const FORM_STEPS = STEPS.length - 1; // 6 real steps + the review screen

const root = document.getElementById("profile-app");

const state = {
  mode: "form",        // "form" | "saved"
  step: 0,
  profile: emptyProfile(),
  errors: {},          // { "field.path": "err.key" }
  skillError: "",
  remember: false,
  savedWhere: "",
  justSaved: false,
  notice: ""           // one-off message, e.g. after deleting
};

// ---------- Small helpers ----------
const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const lab = (item) => item[L()] || item.en;
const fid = (path) => "f-" + path.replace(/\./g, "-");

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function showNum(v) {
  return v === null || v === undefined || Number.isNaN(v) ? "" : String(v);
}

function errorHtml(path) {
  const key = state.errors[path];
  return key ? `<p class="error-text" id="${fid(path)}-error">${esc(tt(key))}</p>` : "";
}

function describedBy(path, hintKey) {
  const ids = [];
  if (hintKey) ids.push(`${fid(path)}-hint`);
  if (state.errors[path]) ids.push(`${fid(path)}-error`);
  return ids.length ? ` aria-describedby="${ids.join(" ")}"` : "";
}

// Remembers each field's label so the error summary can name the field.
const fieldLabels = {};

function labelText(labelKey, required) {
  return `${esc(tt(labelKey))}${required ? ` <span class="req" aria-hidden="true">*</span><span class="visually-hidden"> (${esc(tt("f.required"))})</span>` : ""}`;
}

// ---------- Field builders ----------
function selectField(path, labelKey, list, { required = false, hintKey = "" } = {}) {
  if (labelKey) fieldLabels[path] = labelKey;
  const value = getPath(state.profile, path) || "";
  const options = list.map((o) =>
    `<option value="${esc(o.id)}"${o.id === value ? " selected" : ""}>${esc(lab(o))}</option>`).join("");
  return `
  <div class="field">
    <label for="${fid(path)}">${labelText(labelKey, required)}</label>
    ${hintKey ? `<p class="hint" id="${fid(path)}-hint">${esc(tt(hintKey))}</p>` : ""}
    <select id="${fid(path)}" data-bind="${path}" data-kind="text"${required ? " required" : ""}
      aria-invalid="${!!state.errors[path]}"${describedBy(path, hintKey)}>
      <option value="">${esc(tt("f.choose"))}</option>${options}
    </select>
    ${errorHtml(path)}
  </div>`;
}

function textField(path, labelKey, { required = false, hintKey = "", max = 100, numeric = false, autocomplete = "off" } = {}) {
  if (labelKey) fieldLabels[path] = labelKey;
  const raw = getPath(state.profile, path);
  const value = numeric ? showNum(raw) : raw || "";
  const extra = numeric ? ` inputmode="numeric" maxlength="4"` : ` maxlength="${max}"`;
  return `
  <div class="field${numeric ? " field--short" : ""}">
    <label for="${fid(path)}">${labelText(labelKey, required)}</label>
    ${hintKey ? `<p class="hint" id="${fid(path)}-hint">${esc(tt(hintKey))}</p>` : ""}
    <input type="text" id="${fid(path)}" data-bind="${path}" data-kind="${numeric ? "number" : "text"}"
      value="${esc(value)}" autocomplete="${autocomplete}"${extra}${required ? " required" : ""}
      aria-invalid="${!!state.errors[path]}"${describedBy(path, hintKey)}>
    ${errorHtml(path)}
  </div>`;
}

function textareaField(path, labelKey, { hintKey = "", max = 300 } = {}) {
  return `
  <div class="field">
    <label for="${fid(path)}">${labelText(labelKey, false)}</label>
    ${hintKey ? `<p class="hint" id="${fid(path)}-hint">${esc(tt(hintKey))}</p>` : ""}
    <textarea id="${fid(path)}" data-bind="${path}" data-kind="text" rows="3" maxlength="${max}"${describedBy(path, hintKey)}>${esc(getPath(state.profile, path) || "")}</textarea>
  </div>`;
}

// Radio buttons (one choice) or checkboxes (many choices) shown as tappable "choice cards".
function choiceGroup(path, labelKey, list, { multiple = false, required = false, hintKey = "", cols = 2 } = {}) {
  if (labelKey) fieldLabels[path] = labelKey;
  const value = getPath(state.profile, path);
  const items = list.map((o) => {
    const checked = multiple ? (value || []).includes(o.id) : value === o.id;
    return `
      <label class="choice">
        <input type="${multiple ? "checkbox" : "radio"}" name="${fid(path)}" value="${esc(o.id)}"
          id="${fid(path)}--${esc(o.id)}" data-bind="${path}" data-kind="${multiple ? "array" : "text"}"${checked ? " checked" : ""}>
        <span>${esc(lab(o))}</span>
      </label>`;
  }).join("");
  return `
  <fieldset class="field choice-group" id="${fid(path)}" tabindex="-1"
    aria-invalid="${!!state.errors[path]}"${describedBy(path, hintKey)}>
    <legend>${labelText(labelKey, required)}</legend>
    ${hintKey ? `<p class="hint" id="${fid(path)}-hint">${esc(tt(hintKey))}</p>` : ""}
    <div class="choices choices--${cols}">${items}</div>
    ${errorHtml(path)}
  </fieldset>`;
}

function checkboxField(path, labelKey) {
  return `
  <label class="choice choice--single">
    <input type="checkbox" id="${fid(path)}" data-bind="${path}" data-kind="bool"${getPath(state.profile, path) ? " checked" : ""}>
    <span>${esc(tt(labelKey))}</span>
  </label>`;
}

// ---------- Steps ----------
function stepBasic() {
  return [
    textField("name", "f.name", { hintKey: "f.nameHint", max: LIMITS.name, autocomplete: "nickname" }),
    selectField("ageRange", "f.ageRange", AGE_RANGES, { required: true }),
    selectField("state", "f.state", STATES, { required: true }),
    textField("district", "f.district", { hintKey: "f.districtHint", max: LIMITS.district }),
    choiceGroup("preferredLocation", "f.preferredLocation", LOCATION_PREFS, { required: true }),
    choiceGroup("employmentStatus", "f.employmentStatus", EMPLOYMENT_STATUS, { required: true }),
    choiceGroup("language", "f.language", LANGUAGES)
  ].join("");
}

function stepEducation() {
  const extras = state.profile.additionalQualifications.map((q, i) => `
    <div class="sub-card">
      <div class="sub-card-head">
        <h4>${esc(tt("f.qualN", { n: i + 1 }))}</h4>
        <button type="button" class="btn btn-ghost btn-small" data-action="remove-qual" data-index="${i}">
          ${esc(tt("f.removeQual", { n: i + 1 }))}
        </button>
      </div>
      ${selectField(`additionalQualifications.${i}.level`, "f.qualLevel", EDUCATION_LEVELS, { required: true })}
      ${textField(`additionalQualifications.${i}.specialization`, "f.specialization", { max: LIMITS.specialization })}
      ${textField(`additionalQualifications.${i}.passingYear`, "f.passingYear", { numeric: true })}
    </div>`).join("");

  const canAdd = state.profile.additionalQualifications.length < LIMITS.extraQualsMax;
  return [
    selectField("education.level", "f.eduLevel", EDUCATION_LEVELS, { required: true }),
    selectField("education.stream", "f.stream", STREAMS, { hintKey: "f.streamHint" }),
    textField("education.specialization", "f.specialization", { hintKey: "f.specializationHint", max: LIMITS.specialization }),
    textField("education.passingYear", "f.passingYear", { hintKey: "f.passingYearHint", numeric: true }),
    textField("education.certificates", "f.certificates", { hintKey: "f.certificatesHint", max: LIMITS.certificates }),
    `<div class="field">
       <h3 class="field-heading">${esc(tt("f.extraQuals"))}</h3>
       <p class="hint">${esc(tt("f.extraQualsHint"))}</p>
       ${extras}
       ${canAdd ? `<button type="button" class="btn btn-secondary" data-action="add-qual">+ ${esc(tt("f.addQual"))}</button>` : ""}
     </div>`
  ].join("");
}

function stepSkills() {
  const groups = SKILL_GROUPS.map((g) => choiceGroup("skills", null, g.skills, { multiple: true })
    .replace(/<legend>.*?<\/legend>/s, `<legend>${esc(lab(g))}</legend>`)
    .replace(` id="${fid("skills")}" tabindex="-1"`, ` id="${fid("skills")}-${g.id}"`)
  ).join("");

  const chips = state.profile.customSkills.map((s, i) => `
    <li class="chip">
      <span>${esc(s)}</span>
      <button type="button" data-action="remove-skill" data-index="${i}" aria-label="${esc(tt("f.removeSkill", { skill: s }))}">×</button>
    </li>`).join("");

  const nothing = !state.profile.skills.length && !state.profile.customSkills.length;
  return `
    ${groups}
    <div class="field">
      <label for="custom-skill">${esc(tt("f.customSkill"))}</label>
      <p class="hint" id="custom-skill-hint">${esc(tt("f.customSkillHint"))}</p>
      <div class="input-row">
        <input type="text" id="custom-skill" maxlength="${LIMITS.customSkill + 10}" autocomplete="off"
          aria-describedby="custom-skill-hint${state.skillError ? " custom-skill-error" : ""}"
          aria-invalid="${!!state.skillError}">
        <button type="button" class="btn btn-secondary" data-action="add-skill">${esc(tt("f.addSkill"))}</button>
      </div>
      ${state.skillError ? `<p class="error-text" id="custom-skill-error">${esc(tt(state.skillError))}</p>` : ""}
      ${chips ? `<p class="chips-label">${esc(tt("f.yourSkills"))}</p><ul class="chip-list">${chips}</ul>` : ""}
    </div>
    ${nothing ? `<p class="alert alert--info">${esc(tt("f.skillsNone"))}</p>` : ""}`;
}

function stepExperience() {
  const ex = state.profile.experience;
  let html = choiceGroup("experience.type", "f.expType", EXPERIENCE_TYPES, { required: true });
  if (ex.type === "experienced") {
    html += textField("experience.years", "f.expYears", { required: true, hintKey: "f.expYearsHint", numeric: true });
    html += textField("experience.title", "f.expTitle", { hintKey: "f.expTitleHint", max: LIMITS.title });
    html += textField("experience.industry", "f.expIndustry", { hintKey: "f.expIndustryHint", max: LIMITS.industry });
  }
  html += textareaField("experience.previous", "f.expPrevious", { hintKey: "f.expPreviousHint", max: LIMITS.previous });
  html += checkboxField("experience.freelance", "f.freelance");
  return html;
}

function stepGoals() {
  return choiceGroup("goals", "f.goals", GOALS, { multiple: true, required: true }) +
    choiceGroup("learningBudget", "f.budget", LEARNING_BUDGETS, { hintKey: "f.budgetHint", cols: 3 });
}

function stepEligibility() {
  return [
    textField("eligibility.exactAge", "f.exactAge", { hintKey: "f.exactAgeHint", numeric: true }),
    choiceGroup("eligibility.category", "f.category", CATEGORIES, { hintKey: "f.categoryHint", cols: 3 }),
    choiceGroup("eligibility.gender", "f.gender", GENDERS, { hintKey: "f.genderHint" }),
    choiceGroup("eligibility.pwd", "f.pwd", YES_NO, { hintKey: "f.optional", cols: 3 }),
    choiceGroup("eligibility.exServiceman", "f.exServiceman", YES_NO, { hintKey: "f.optional", cols: 3 })
  ].join("");
}

// ---------- Review / summary ----------
function row(labelKey, value) {
  const shown = value === "" || value === null || value === undefined
    ? `<span class="muted">${esc(tt("review.notGiven"))}</span>` : esc(value);
  return `<div class="review-row"><dt>${esc(tt(labelKey))}</dt><dd>${shown}</dd></div>`;
}

function summarySections() {
  const p = state.profile;
  const lang = L();
  const yesNo = (v) => labelOf(YES_NO, v, lang);
  const skills = [...p.skills.map((id) => labelOf(ALL_SKILLS, id, lang)), ...p.customSkills].join(", ");
  const extra = p.additionalQualifications
    .map((q) => [labelOf(EDUCATION_LEVELS, q.level, lang), q.specialization, showNum(q.passingYear)].filter(Boolean).join(" · "))
    .join("; ");

  const skipped = `<p class="muted">${esc(tt("review.skipped"))}</p>`;
  return [
    ["basic", `<dl>
      ${row("f.name", p.name)}
      ${row("f.ageRange", labelOf(AGE_RANGES, p.ageRange, lang))}
      ${row("f.state", labelOf(STATES, p.state, lang))}
      ${row("f.district", p.district)}
      ${row("f.preferredLocation", labelOf(LOCATION_PREFS, p.preferredLocation, lang))}
      ${row("f.language", labelOf(LANGUAGES, p.language, lang))}
      ${row("f.employmentStatus", labelOf(EMPLOYMENT_STATUS, p.employmentStatus, lang))}</dl>`],
    ["education", `<dl>
      ${row("f.eduLevel", labelOf(EDUCATION_LEVELS, p.education.level, lang))}
      ${row("f.stream", labelOf(STREAMS, p.education.stream, lang))}
      ${row("f.specialization", p.education.specialization)}
      ${row("f.passingYear", showNum(p.education.passingYear))}
      ${row("f.certificates", p.education.certificates)}
      ${row("f.extraQuals", extra)}</dl>`],
    ["skills", `<dl>${row("step.skills.t", skills)}</dl>`],
    ["experience", p.experience.skipped ? skipped : `<dl>
      ${row("f.expType", labelOf(EXPERIENCE_TYPES, p.experience.type, lang))}
      ${p.experience.type === "experienced" ? row("f.expYears", showNum(p.experience.years) === "" ? "" : tt("review.years", { n: p.experience.years })) : ""}
      ${p.experience.type === "experienced" ? row("f.expTitle", p.experience.title) : ""}
      ${p.experience.type === "experienced" ? row("f.expIndustry", p.experience.industry) : ""}
      ${row("f.expPrevious", p.experience.previous)}
      ${row("f.freelance", p.experience.freelance ? tt("review.yes") : tt("review.no"))}</dl>`],
    ["goals", `<dl>
      ${row("f.goals", p.goals.map((g) => labelOf(GOALS, g, lang)).join(", "))}
      ${row("f.budget", labelOf(LEARNING_BUDGETS, p.learningBudget, lang))}</dl>`],
    ["eligibility", p.eligibility.skipped ? skipped : `<dl>
      ${row("f.exactAge", showNum(p.eligibility.exactAge))}
      ${row("f.category", labelOf(CATEGORIES, p.eligibility.category, lang))}
      ${row("f.gender", labelOf(GENDERS, p.eligibility.gender, lang))}
      ${row("f.pwd", yesNo(p.eligibility.pwd))}
      ${row("f.exServiceman", yesNo(p.eligibility.exServiceman))}</dl>`]
  ];
}

function summaryHtml(editable) {
  return summarySections().map(([step, body], i) => `
    <section class="review-block" aria-labelledby="rv-${step}">
      <div class="review-head">
        <h3 id="rv-${step}">${esc(tt(`step.${step}.t`))}</h3>
        ${editable ? `<button type="button" class="btn btn-ghost btn-small" data-action="goto" data-step="${i}"
          aria-label="${esc(tt("btn.edit"))}: ${esc(tt(`step.${step}.t`))}">${esc(tt("btn.edit"))}</button>` : ""}
      </div>
      ${body}
    </section>`).join("");
}

function stepReview() {
  return `
    ${summaryHtml(true)}
    <div class="remember-box">
      <label class="choice choice--single">
        <input type="checkbox" id="remember" ${state.remember ? "checked" : ""} aria-describedby="remember-hint">
        <span>${esc(tt("review.remember"))}</span>
      </label>
      <p class="hint" id="remember-hint">${esc(tt("review.rememberHint"))}</p>
    </div>`;
}

const STEP_RENDERERS = {
  basic: stepBasic, education: stepEducation, skills: stepSkills, experience: stepExperience,
  goals: stepGoals, eligibility: stepEligibility, review: stepReview
};

// ---------- Page pieces ----------
function progressHtml() {
  const isReview = state.step === FORM_STEPS;
  const items = STEPS.slice(0, FORM_STEPS).map((s, i) => {
    const cls = i < state.step ? "done" : i === state.step ? "current" : "";
    return `<li class="${cls}"${i === state.step ? ' aria-current="step"' : ""}><span class="dot">${i < state.step ? "✓" : i + 1}</span><span class="name">${esc(tt(`step.${s}.t`))}</span></li>`;
  }).join("");
  const text = isReview ? tt("form.reviewStep") : tt("form.progress", { n: state.step + 1, total: FORM_STEPS });
  return `
  <nav class="stepper" aria-label="${esc(tt("form.progressLabel"))}">
    <p class="stepper-text">${esc(text)}</p>
    <ol>${items}</ol>
  </nav>`;
}

function errorSummaryHtml() {
  const entries = Object.entries(state.errors);
  if (!entries.length) return "";
  const items = entries.map(([path, key]) => {
    const target = fid(path);
    const name = fieldLabels[path] ? `${tt(fieldLabels[path]).replace(/[?:]\s*$/, "")}: ` : "";
    return `<li><a href="#${target}" data-focus="${target}">${esc(name + tt(key))}</a></li>`;
  }).join("");
  return `<div class="alert alert--error error-summary" id="error-summary" tabindex="-1" role="alert">
    <strong>${esc(tt("err.summary"))}</strong><ul>${items}</ul></div>`;
}

function renderForm() {
  const stepId = STEPS[state.step];
  const isReview = stepId === "review";
  const canSkip = SKIPPABLE_STEPS.includes(stepId);
  const body = STEP_RENDERERS[stepId](); // build fields first so their labels are known
  return `
  ${state.notice ? `<p class="alert alert--ok" role="status">${esc(tt(state.notice))}</p>` : ""}
  ${progressHtml()}
  <form class="card form-card" id="profile-form" novalidate>
    <h2 id="step-title" tabindex="-1">${esc(tt(`step.${stepId}.t`))}</h2>
    <p class="muted step-desc">${esc(tt(`step.${stepId}.d`))}</p>
    <div id="error-slot">${errorSummaryHtml()}</div>
    ${body}
    <div class="form-nav">
      ${state.step > 0 ? `<button type="button" class="btn btn-ghost" data-action="back">← ${esc(tt("btn.back"))}</button>` : "<span></span>"}
      <div class="btn-row">
        ${canSkip ? `<button type="button" class="btn btn-secondary" data-action="skip">${esc(tt("btn.skip"))}</button>` : ""}
        <button type="submit" class="btn btn-primary">${esc(tt(isReview ? "btn.save" : "btn.next"))}${isReview ? "" : " →"}</button>
      </div>
    </div>
  </form>`;
}

function renderSaved() {
  const whereKey = state.savedWhere === "local" ? "saved.local" : "saved.session";
  return `
  <section class="card saved-card" aria-labelledby="saved-title">
    <div class="saved-head">
      <div class="icon-tile icon-tile--ok" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="m5 12 4 4 10-10" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div>
        <h2 id="saved-title" tabindex="-1">${esc(tt(state.justSaved ? "saved.title" : "resume.title"))}</h2>
        <p class="muted">${state.justSaved ? "" : esc(tt("resume.text")) + " "}${esc(tt(whereKey))}</p>
      </div>
    </div>
    <p class="alert alert--info">${esc(tt("saved.next"))}</p>
    ${summaryHtml(false)}
    <div class="btn-row">
      <a class="btn btn-primary" href="dashboard.html">${esc(tt("saved.seeDash"))} →</a>
      <a class="btn btn-secondary" href="recommendations.html">${esc(tt("saved.seeRecs"))}</a>
      <button type="button" class="btn btn-secondary" data-action="edit-saved">${esc(tt("btn.editProfile"))}</button>
      <button type="button" class="btn btn-danger" data-action="delete-saved">${esc(tt("btn.deleteProfile"))}</button>
    </div>
  </section>`;
}

/**
 * Draws the page. `focus` decides what gets keyboard focus afterwards:
 * "heading" (new step), "summary" (errors), an element id, or nothing.
 */
function render(focus) {
  root.innerHTML = (state.mode === "saved" ? renderSaved() : renderForm()) +
    `<p class="visually-hidden" id="live" aria-live="polite"></p>`;
  root.setAttribute("aria-busy", "false");

  let el = null;
  if (focus === "heading") el = document.getElementById(state.mode === "saved" ? "saved-title" : "step-title");
  else if (focus === "summary") el = document.getElementById("error-summary");
  else if (focus) el = document.getElementById(focus);
  if (el) {
    el.focus({ preventScroll: true });
    el.scrollIntoView({ block: focus === "heading" || focus === "summary" ? "center" : "nearest" });
  }
}

function announce(text) {
  const live = document.getElementById("live");
  if (live) live.textContent = text;
}

// ---------- Actions ----------
function persistDraft() {
  if (state.mode === "form") saveDraft(state.profile, state.step);
}

function goTo(index) {
  state.step = Math.max(0, Math.min(FORM_STEPS, index));
  state.errors = {};
  state.skillError = "";
  state.notice = "";
  persistDraft();
  render("heading");
}

function next() {
  const stepId = STEPS[state.step];

  if (stepId === "review") return finish();

  if (SKIPPABLE_STEPS.includes(stepId)) state.profile[stepId].skipped = false;
  const errors = validateStep(stepId, state.profile);
  if (Object.keys(errors).length) {
    state.errors = errors;
    render("summary");
    return;
  }
  goTo(state.step + 1);
}

function skip() {
  const stepId = STEPS[state.step];
  if (!SKIPPABLE_STEPS.includes(stepId)) return;
  state.profile[stepId].skipped = true;
  goTo(state.step + 1);
}

function finish() {
  const bad = firstInvalidStep(state.profile);
  if (bad !== -1 && bad < FORM_STEPS) {
    state.step = bad;
    state.errors = validateStep(STEPS[bad], state.profile);
    render("summary");
    return;
  }
  const result = saveProfile(state.profile, state.remember);
  state.profile = result ? result.profile : normalizeProfile(state.profile);
  state.savedWhere = result ? result.where : "";
  state.mode = "saved";
  state.justSaved = true;
  render("heading");
}

function addSkill() {
  const input = document.getElementById("custom-skill");
  if (!input) return;
  const { profile, error } = addCustomSkill(state.profile, input.value);
  state.skillError = error;
  if (!error) {
    const added = profile.customSkills[profile.customSkills.length - 1];
    state.profile = profile;
    persistDraft();
    render("custom-skill");
    announce(tt("f.skillAdded", { skill: added }));
  } else {
    const value = input.value;
    render("custom-skill");
    document.getElementById("custom-skill").value = value; // keep what they typed
  }
}

function clearFieldError(path) {
  if (!state.errors[path]) return;
  delete state.errors[path];
  const field = document.getElementById(fid(path));
  if (field) field.setAttribute("aria-invalid", "false");
  document.querySelectorAll(`#${fid(path)}, [name="${fid(path)}"]`).forEach((n) => n.setAttribute("aria-invalid", "false"));
  document.getElementById(`${fid(path)}-error`)?.remove();
  const slot = document.getElementById("error-slot");
  if (slot) slot.innerHTML = errorSummaryHtml();
}

function onInput(e) {
  const el = e.target;
  if (el.id === "remember") { state.remember = el.checked; return; }
  const path = el.dataset.bind;
  if (!path) return;

  const kind = el.dataset.kind;
  if (kind === "number") {
    setPath(state.profile, path, el.value.trim() === "" ? null : Number(el.value.trim()));
  } else if (kind === "bool") {
    setPath(state.profile, path, el.checked);
  } else if (kind === "array") {
    const list = new Set(getPath(state.profile, path) || []);
    el.checked ? list.add(el.value) : list.delete(el.value);
    setPath(state.profile, path, [...list]);
  } else {
    setPath(state.profile, path, el.value);
  }

  clearFieldError(path);
  persistDraft();

  // Some answers change what is shown.
  if (e.type === "change" && path === "experience.type") render(el.id);
  if (e.type === "change" && path === "language") setLang(el.value); // re-renders via event
}

function onClick(e) {
  const link = e.target.closest("[data-focus]");
  if (link) {
    e.preventDefault();
    const target = document.getElementById(link.dataset.focus);
    const focusable = target?.matches("fieldset") ? target.querySelector("input") : target;
    focusable?.focus();
    return;
  }

  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const index = Number(btn.dataset.index);

  switch (btn.dataset.action) {
    case "back": goTo(state.step - 1); break;
    case "skip": skip(); break;
    case "goto": goTo(Number(btn.dataset.step)); break;
    case "add-skill": addSkill(); break;
    case "remove-skill":
      state.profile.customSkills.splice(index, 1);
      persistDraft();
      render("custom-skill");
      break;
    case "add-qual": {
      state.profile.additionalQualifications.push(emptyQualification());
      persistDraft();
      const n = state.profile.additionalQualifications.length - 1;
      render(fid(`additionalQualifications.${n}.level`));
      break;
    }
    case "remove-qual":
      state.profile.additionalQualifications.splice(index, 1);
      state.errors = {};
      persistDraft();
      render("step-title");
      break;
    case "edit-saved":
      state.mode = "form";
      state.remember = state.savedWhere === "local";
      goTo(FORM_STEPS);
      break;
    case "delete-saved":
      deleteProfile();
      Object.assign(state, {
        mode: "form", step: 0, profile: { ...emptyProfile(), language: L() },
        errors: {}, remember: false, savedWhere: "", justSaved: false, notice: "saved.deleted"
      });
      render("heading");
      break;
  }
}

function onKeydown(e) {
  // Enter inside "Add your own skill" adds the skill instead of going to the next step.
  if (e.key === "Enter" && e.target.id === "custom-skill") {
    e.preventDefault();
    addSkill();
  }
}

function onSubmit(e) {
  e.preventDefault();
  next();
}

// ---------- Start ----------
function init() {
  if (!root) return;
  const saved = loadProfile();
  const draft = loadDraft();

  if (draft) {
    // A half-filled form (e.g. after a refresh) wins over the saved copy.
    state.profile = draft.profile;
    state.step = Math.max(0, Math.min(FORM_STEPS, draft.step));
    state.remember = saved?.where === "local";
  } else if (saved) {
    state.profile = saved.profile;
    state.savedWhere = saved.where;
    state.mode = "saved";
  } else {
    state.profile.language = L();
  }

  root.addEventListener("input", onInput);
  root.addEventListener("change", onInput);
  root.addEventListener("click", onClick);
  root.addEventListener("keydown", onKeydown);
  root.addEventListener("submit", onSubmit);

  // Language switch: redraw in the new language and keep the user's place.
  document.addEventListener("cs:langchange", (e) => {
    state.profile.language = e.detail.lang;
    persistDraft();
    const active = document.activeElement && root.contains(document.activeElement) ? document.activeElement.id : null;
    render(active);
  });

  render(null);
}

try {
  init();
} catch (err) {
  console.error(err);
  if (root) root.innerHTML = `<p class="alert alert--error" role="alert">${esc(tt("state.error"))}</p>`;
}
