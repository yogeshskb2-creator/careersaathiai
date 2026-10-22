// Where the profile is kept in the browser. Other pages (recommendations,
// dashboard) will use loadProfile() to read it.

import { getJSON, setJSON, removeItem, getItem, setItem } from "./storage.js";
import { normalizeProfile } from "./profile-model.js";

const KEY = "profile";
const DRAFT = "profile_draft";
const STEP = "profile_step";

/** Returns { profile, where: "local" | "session" } or null if nothing is saved. */
export function loadProfile() {
  for (const where of ["local", "session"]) {
    const raw = getJSON(KEY, null, where);
    if (raw) return { profile: normalizeProfile(raw), where };
  }
  return null;
}

/** Saves the finished profile. remember=true → survives closing the browser. */
export function saveProfile(profile, remember) {
  const data = { ...normalizeProfile(profile), savedAt: new Date().toISOString() };
  const where = remember ? "local" : "session";
  const other = remember ? "session" : "local";
  const ok = setJSON(KEY, data, where);
  removeItem(KEY, other);
  clearDraft();
  return ok ? { profile: data, where } : null;
}

export function deleteProfile() {
  removeItem(KEY, "local");
  removeItem(KEY, "session");
  removeItem("plan_done", "local");   // 30-day plan ticks belong to the profile
  removeItem("plan_done", "session");
  clearDraft();
}

// Drafts protect half-filled forms from an accidental refresh.
// They live in sessionStorage only, so they vanish when the tab closes.
export function saveDraft(profile, stepIndex) {
  setJSON(DRAFT, profile, "session");
  setItem(STEP, String(stepIndex), "session");
}

export function loadDraft() {
  const raw = getJSON(DRAFT, null, "session");
  if (!raw) return null;
  const step = Number(getItem(STEP, "0", "session"));
  return { profile: normalizeProfile(raw), step: Number.isInteger(step) ? step : 0 };
}

export function clearDraft() {
  removeItem(DRAFT, "session");
  removeItem(STEP, "session");
}
