// Checks every HTML page for basic accessibility, translation and link rules.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { translations } from "../js/i18n.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pages = readdirSync(root).filter((f) => f.endsWith(".html"));

test("project has the Milestone 1 pages", () => {
  for (const p of ["index.html", "about.html", "privacy.html", "profile.html"]) {
    assert.ok(pages.includes(p), `${p} is missing`);
  }
});

for (const page of pages) {
  const html = readFileSync(join(root, page), "utf8");

  test(`${page}: basic structure`, () => {
    assert.match(html, /<html lang="en">/, "needs lang attribute");
    assert.match(html, /name="viewport"/, "needs mobile viewport meta");
    assert.match(html, /<title[^>]*>[^<]+<\/title>/, "needs a title");
    assert.match(html, /<main id="main"/, "needs <main id=main> for the skip link");
    assert.match(html, /id="site-header"/, "needs header slot");
    assert.match(html, /id="site-footer"/, "needs footer slot");
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, "needs exactly one <h1>");
  });

  test(`${page}: every data-i18n key exists`, () => {
    const keys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]);
    const missing = keys.filter((k) => !(k in translations.en));
    assert.deepEqual(missing, []);
  });

  test(`${page}: links are safe and not broken`, () => {
    const hrefs = [...html.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>/g)];
    for (const [tag, href] of hrefs) {
      if (/^https?:/.test(href)) {
        assert.ok(href.startsWith("https://"), `${href} must use https`);
      } else if (!href.startsWith("#") && !href.startsWith("mailto:")) {
        const file = href.split("#")[0];
        assert.ok(existsSync(join(root, file)), `${href} points to a missing file`);
      }
      if (tag.includes('target="_blank"')) {
        assert.match(tag, /rel="[^"]*noopener/, `${href} opens a new tab without rel=noopener`);
      }
    }
  });

  test(`${page}: images have alt text`, () => {
    const imgs = [...html.matchAll(/<img\s[^>]*>/g)].map((m) => m[0]);
    for (const img of imgs) assert.match(img, /alt="/, `image without alt: ${img}`);
  });
}

test("nav only links to pages that exist", async () => {
  // layout.js touches `document` when imported, so read it as text instead.
  const src = readFileSync(join(root, "js/layout.js"), "utf8");
  const ready = [...src.matchAll(/href: "([^"]+)",[^}]*ready: true/g)].map((m) => m[1]);
  assert.ok(ready.length >= 4);
  for (const href of ready) assert.ok(existsSync(join(root, href)), `${href} marked ready but missing`);
});

test("links built by scripts that open a new tab use rel=noopener", () => {
  const dir = join(root, "js");
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".js"))) {
    const src = readFileSync(join(dir, f), "utf8");
    for (const m of src.matchAll(/<a\s[^>]*target="_blank"[^>]*>/g)) {
      assert.match(m[0], /rel="[^"]*noopener/, `${f}: ${m[0]}`);
    }
  }
});
