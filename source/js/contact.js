// Contact page: "Copy email" button.
import { t } from "./i18n.js";
import { getLang } from "./layout.js";

const button = document.getElementById("copy-email");
const link = document.getElementById("support-email");
const result = document.getElementById("copy-result");

function selectAddress() {
  // Fallback: select the address so the person can copy it themselves.
  const range = document.createRange();
  range.selectNodeContents(link);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

if (button && link && result) {
  button.addEventListener("click", () => {
    const address = link.textContent.trim();
    const done = (key) => { result.dataset.i18n = key; result.textContent = t(key, getLang()); };
    try {
      navigator.clipboard.writeText(address)
        .then(() => done("contact.copied"))
        .catch(() => { selectAddress(); done("contact.copyFail"); });
    } catch {
      selectAddress();
      done("contact.copyFail");
    }
  });
}
