// Privacy page: "Delete my saved data" button.
import { clearAll } from "./storage.js";
import { t } from "./i18n.js";
import { getLang } from "./layout.js";

const button = document.getElementById("delete-data");
const result = document.getElementById("delete-result");

if (button && result) {
  button.addEventListener("click", () => {
    const removed = clearAll();
    let key = "privacy.deleteDone";
    let kind = "ok";
    if (removed === 0) { key = "privacy.deleteNone"; kind = "info"; }
    if (removed < 0)   { key = "privacy.deleteError"; kind = "info"; }

    result.className = `alert alert--${kind}`;
    result.dataset.i18n = key; // so it re-translates if the language changes
    result.textContent = t(key, getLang());
  });
}
