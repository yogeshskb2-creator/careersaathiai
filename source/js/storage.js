// Safe wrappers around browser storage.
//   "local"   = localStorage   → stays after the browser closes ("Remember me")
//   "session" = sessionStorage → deleted when the tab is closed (default)
// Some browsers (private mode, strict settings) block storage and throw errors.
// These helpers never crash the page — they just return a fallback.

const PREFIX = "cs_"; // every CareerSaathi key starts with this

function area(name) {
  return name === "session" ? window.sessionStorage : window.localStorage;
}

export function getItem(key, fallback = null, where = "local") {
  try {
    const value = area(where).getItem(PREFIX + key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

export function setItem(key, value, where = "local") {
  try {
    area(where).setItem(PREFIX + key, String(value));
    return true;
  } catch {
    return false;
  }
}

export function removeItem(key, where = "local") {
  try {
    area(where).removeItem(PREFIX + key);
  } catch {
    /* storage blocked: nothing to remove */
  }
}

/** Reads JSON. Broken or missing data returns the fallback instead of crashing. */
export function getJSON(key, fallback = null, where = "local") {
  const raw = getItem(key, null, where);
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function setJSON(key, value, where = "local") {
  try {
    return setItem(key, JSON.stringify(value), where);
  } catch {
    return false;
  }
}

/**
 * Deletes every CareerSaathi key from this browser (both storage areas).
 * Returns the number of keys removed, or -1 if storage is blocked.
 */
export function clearAll() {
  let removed = 0;
  let blocked = 0;
  for (const where of ["local", "session"]) {
    try {
      const store = area(where);
      const ours = [];
      for (let i = 0; i < store.length; i++) {
        const k = store.key(i);
        if (k && k.startsWith(PREFIX)) ours.push(k);
      }
      ours.forEach((k) => store.removeItem(k));
      removed += ours.length;
    } catch {
      blocked++;
    }
  }
  return blocked === 2 ? -1 : removed;
}
