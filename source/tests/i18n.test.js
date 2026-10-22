// Run with:  npm test   (or: node --test tests/*.test.js)
import { test } from "node:test";
import assert from "node:assert/strict";
import { translations, t, normalizeLang } from "../js/i18n.js";

test("every English key has a Hindi translation", () => {
  const missing = Object.keys(translations.en).filter((k) => !(k in translations.hi));
  assert.deepEqual(missing, [], `Missing Hindi keys: ${missing.join(", ")}`);
});

test("Hindi has no extra keys that English lacks", () => {
  const extra = Object.keys(translations.hi).filter((k) => !(k in translations.en));
  assert.deepEqual(extra, []);
});

test("no translation is empty", () => {
  for (const lang of ["en", "hi"]) {
    for (const [k, v] of Object.entries(translations[lang])) {
      assert.ok(typeof v === "string" && v.trim().length > 0, `${lang}.${k} is empty`);
    }
  }
});

test("t() falls back safely for unknown language or key", () => {
  assert.equal(t("nav.home", "xx"), "Home");
  assert.equal(t("does.not.exist", "hi"), "does.not.exist");
});

test("normalizeLang() only accepts supported languages", () => {
  assert.equal(normalizeLang("hi"), "hi");
  assert.equal(normalizeLang(null), "en");
  assert.equal(normalizeLang("<script>"), "en");
});
