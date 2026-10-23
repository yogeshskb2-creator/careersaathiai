// Where the Private Job Finder answers are kept — only in this browser.
//   Default: sessionStorage (deleted when the tab is closed).
//   "Remember on this device": localStorage, until the person clears it.
// "Delete my saved data" on the Privacy page also removes these (all cs_ keys).

import { getJSON, setJSON, removeItem } from "./storage.js";
import { normalizePJ } from "./pj-model.js";

const KEY = "pj_profile";
const DRAFT = "pj_draft";

export function loadPJ() {
  for (const where of ["local", "session"]) {
    const raw = getJSON(KEY, null, where);
    if (raw && typeof raw === "object") return { profile: normalizePJ(raw), where };
  }
  return null;
}

export function savePJ(profile, remember) {
  const where = remember ? "local" : "session";
  const ok = setJSON(KEY, normalizePJ(profile), where);
  removeItem(KEY, remember ? "session" : "local");
  removeItem(DRAFT, "session");
  return ok ? where : null;
}

export function clearPJ() {
  removeItem(KEY, "local");
  removeItem(KEY, "session");
  removeItem(DRAFT, "session");
}

export function saveDraftPJ(profile, step) { setJSON(DRAFT, { profile, step }, "session"); }
export function loadDraftPJ() {
  const d = getJSON(DRAFT, null, "session");
  return d && typeof d === "object" && d.profile ? { profile: normalizePJ(d.profile), step: Number(d.step) || 0 } : null;
}
