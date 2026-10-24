// "Courses & Skill Development" page. Uses the Private Job Finder answers saved in
// this browser and the chosen target role (?role=...) to suggest learning options.
// It only opens official pages — it never enrols, pays or sends anyone's details.

import { t } from "./i18n.js";
import { getLang } from "./layout.js";
import { esc, extLink, formatDate } from "./ui.js";
import { PJ_SKILLS, pjLabel } from "../data/pj-options.js";
import { ALL_SKILLS, labelOf } from "../data/options.js";
import { ROLES } from "../data/private-roles.js";
import { loadPJ } from "./pj-store.js";
import { normalizePJ, gapAnalysis, recommendLearning, skillsToLearn, roleById, LEARNING_PATHS } from "./pj-model.js";
import { todayISO, ageInDays, STALE_DAYS } from "./vacancy-match.js";

const root = document.getElementById("sd-app");
const state = { profile: null, hasProfile: false, role: "", path: "all", extraSkills: [] };

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => (o ? o[L()] || o.en : "");
const skillName = (id) => pjLabel(PJ_SKILLS, id, L());
const courseSkillName = (id) => labelOf(ALL_SKILLS, id, L());
// Show what the provider teaches in the provider's own terms (e.g. "Spreadsheets"),
// so a related skill is never presented as the one the person asked for.
const taughtNames = (t) => (t.vocab === "course" ? t.ids.map(courseSkillName) : t.ids.map(skillName)).join(", ");

const COST_KEY = { free: "sd.cost.free", "free-exam-fee": "sd.cost.freeExam", fee: "sd.cost.fee" };
const CERT_KEY = { recognised: "sd.cert.recognised", provider: "sd.cert.provider" };

function optionCard(o, picks) {
  const badges = Object.entries(picks).filter(([, id]) => id === o.id).map(([k]) => `<span class="fit fit--strong">${esc(tt(`sd.pick.${k}`))}</span>`).join(" ");
  const fact = (key, val) => (val ? `<div class="review-row"><dt>${esc(tt(key))}</dt><dd>${esc(val)}</dd></div>` : "");
  return `
  <article class="card rec-card sd-card" aria-labelledby="sd-${o.id}">
    <div class="rec-top">
      <span class="sector">${esc(tt(`sd.mode.${o.mode}`))}</span>
      ${o.govt ? `<span class="pj-co-type">${esc(tt("sd.govt"))}</span>` : ""}
    </div>
    ${badges ? `<p class="sd-badges">${badges}</p>` : ""}
    <h3 id="sd-${o.id}">${esc(txt(o.title))}</h3>
    <p class="muted small">${esc(txt(o.provider))}</p>
    <p>${esc(txt(o.about))}</p>
    ${o.covers.length ? `<p class="sd-why"><strong>${esc(tt("sd.why"))}</strong> ${esc(taughtNames(o.teaches))}</p>` : `<p class="sd-why small">${esc(tt("sd.whyGeneral"))}</p>`}
    ${o.unverifiedCourseSkills?.length ? `<p class="small muted">${esc(tt("courses.unverifiedSkills", { skills: o.unverifiedCourseSkills.map(courseSkillName).join(", ") }))}</p>` : ""}
    ${o.note ? `<p class="alert alert--warn small">${esc(txt(o.note))}</p>` : ""}
    <dl class="facts">
      ${fact("sd.costT", o.cost ? tt(COST_KEY[o.cost]) + (o.costNote ? ` — ${txt(o.costNote)}` : "") : tt("sd.cost.none"))}
      ${fact("sd.certT", o.cert ? tt(CERT_KEY[o.cert]) : tt("sd.cert.none"))}
      ${fact("sd.duration", txt(o.duration))}
      ${fact("sd.eligibility", txt(o.eligibility))}
      ${fact("sd.language", txt(o.language))}
    </dl>
    ${o.searchTip ? `<p class="small">${esc(txt(o.searchTip))}</p>` : ""}
    <p>${extLink(o.url, tt("sd.open"), tt("rec.newTab"), "btn btn-primary btn-small")}</p>
    ${o.evidence ? `<p class="muted small">${esc(tt("courses.evidence", { date: formatDate(o.evidence.checked, L()) }))} ${esc(txt(o.evidence.text))}</p>` : ""}
    <p class="muted small">${esc(tt("sd.checked", { date: formatDate(o.checked, L()), source: txt(o.checkedFrom) }))}</p>
    ${ageInDays(o.checked, todayISO()) > STALE_DAYS ? `<p class="alert alert--warn small">${esc(tt("stale.warn", { n: ageInDays(o.checked, todayISO()) }))}</p>` : ""}
  </article>`;
}

function render(focus) {
  root.setAttribute("aria-busy", "false");
  const p = state.profile;
  const gap = gapAnalysis(p, state.role, todayISO());
  const skills = [...new Set([...skillsToLearn(gap), ...state.extraSkills])];
  const primary = gap ? [...gap.missingCourse, ...gap.missingLicence, ...gap.missingPractice, ...state.extraSkills] : skills;
  const rec = recommendLearning(skills, p, state.path, primary);
  const roleOptions = ROLES.map((r) => `<option value="${r.id}"${r.id === state.role ? " selected" : ""}>${esc(txt(r.title))}</option>`).join("");
  const paths = LEARNING_PATHS.map((id) => `
    <button type="button" class="filter-btn" data-path="${id}" aria-pressed="${state.path === id}">${esc(tt(`sd.path.${id}`))}</button>`).join("");
  const picked = Object.entries(rec.picks).filter(([, id]) => id);
  root.innerHTML = `
  ${state.hasProfile ? "" : `<p class="alert alert--info">${esc(tt("sd.noProfile"))} <a href="private-jobs.html">${esc(tt("sd.fillForm"))} →</a></p>`}
  <section class="card" aria-labelledby="sd-for-t">
    <h2 id="sd-for-t" tabindex="-1">${esc(tt("sd.forRole", { role: txt(gap.role.title) }))}</h2>
    <div class="field">
      <label for="sd-role">${esc(tt("sd.chooseRole"))}</label>
      <select id="sd-role" data-control="role">${roleOptions}</select>
    </div>
    <h3>${esc(tt("sd.skillsT"))}</h3>
    ${skills.length ? `<ul class="chip-list">${skills.map((s) => `<li><span class="chip chip--plain">${esc(skillName(s))}</span></li>`).join("")}</ul>`
      : `<p class="alert alert--ok">${esc(tt("sd.noGap"))}</p>`}
    <details class="rec-more"${state.extraSkills.length ? " open" : ""}>
      <summary>${esc(tt("sd.addSkills"))}</summary>
      <div class="choices choices--3">
        ${PJ_SKILLS.map((s) => `<label class="choice"><input type="checkbox" data-skill="${s.id}"${state.extraSkills.includes(s.id) ? " checked" : ""}><span>${esc(txt(s))}</span></label>`).join("")}
      </div>
    </details>
  </section>
  <section aria-labelledby="sd-path-t">
    <h2 id="sd-path-t">${esc(tt("sd.pathQ"))}</h2>
    <div class="filter-bar sd-paths" role="group" aria-label="${esc(tt("sd.pathQ"))}">${paths}
      <a class="filter-btn sd-jobs-link" href="private-jobs.html">${esc(tt("sd.path.jobs"))}</a>
    </div>
  </section>
  ${picked.length && state.path === "all" ? `
  <section class="card sd-picks" aria-labelledby="sd-picks-t">
    <h2 id="sd-picks-t">${esc(tt("sd.picksT"))}</h2>
    <ul class="compact">${picked.map(([k, id]) => {
      const o = rec.items.find((x) => x.id === id);
      return `<li><strong>${esc(tt(`sd.pick.${k}`))}:</strong> <a href="#sd-${id}">${esc(txt(o.title))}</a></li>`;
    }).join("")}</ul>
    <p class="small muted">${esc(tt("sd.picksNote"))}</p>
  </section>` : ""}
  <p class="muted" aria-live="polite">${esc(tt("sd.count", { n: rec.items.length }))}</p>
  ${rec.missing.length && rec.items.length ? `<p class="alert alert--info" role="status">${esc(tt("sd.missing", { skills: rec.missing.map(skillName).join(", ") }))}</p>` : ""}
  ${rec.items.length ? `<div class="rec-grid">${rec.items.map((o) => optionCard(o, rec.picks)).join("")}</div>`
    : `<div class="alert alert--info" role="status"><p><strong>${esc(tt("sd.noVerified"))}</strong></p>${skills.length ? `<p class="small">${esc(tt("sd.noVerifiedFor", { skills: (rec.missing.length ? rec.missing : skills).map(skillName).join(", ") }))}</p>` : ""}${state.path !== "all" ? `<p class="small">${esc(tt("sd.none"))}</p>` : ""}</div>`}
  ${rec.general.length ? `
  <section aria-labelledby="sd-gen-t" class="sd-general">
    <h2 id="sd-gen-t">${esc(tt("sd.generalT"))}</h2>
    <p class="muted">${esc(tt("sd.generalD"))}</p>
    <div class="rec-grid">${rec.general.map((o) => optionCard(o, {})).join("")}</div>
  </section>` : ""}
  <p class="alert alert--warn small">${esc(tt("sd.honest"))}</p>
  <p class="btn-row">
    <a class="btn btn-secondary" href="private-jobs.html?role=${encodeURIComponent(state.role)}">← ${esc(tt("sd.back"))}</a>
    <a class="btn btn-ghost" href="courses.html">${esc(tt("sd.allCourses"))}</a>
  </p>`;
  if (focus) root.querySelector(focus)?.focus();
}

function init() {
  if (!root) return;
  const saved = loadPJ();
  state.hasProfile = Boolean(saved);
  state.profile = saved ? saved.profile : normalizePJ({});
  const param = new URLSearchParams(location.search).get("role");
  state.role = (param && roleById(param) && param) || state.profile.prefs.targetRole || ROLES[0].id;
  root.addEventListener("click", (e) => {
    const b = e.target.closest("[data-path]");
    if (b) { state.path = b.dataset.path; render(`[data-path="${state.path}"]`); }
  });
  root.addEventListener("change", (e) => {
    const el = e.target;
    if (el.dataset.control === "role") {
      state.role = el.value;
      try { history.replaceState(null, "", `?role=${encodeURIComponent(state.role)}`); } catch { /* file:// may block */ }
      render("#sd-role");
    } else if (el.dataset.skill) {
      const s = new Set(state.extraSkills);
      el.checked ? s.add(el.dataset.skill) : s.delete(el.dataset.skill);
      state.extraSkills = [...s];
      render(`[data-skill="${el.dataset.skill}"]`);
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
