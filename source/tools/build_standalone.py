"""
Build a "standalone" copy of CareerSaathi AI that works by double-clicking
index.html (no local server needed).

Why: the normal site uses JavaScript modules (import/export). Browsers block
modules on file:// pages. This script joins each page's modules into ONE normal
script file (js/bundle-<page>.js), so the site runs from a plain folder.

Usage (from the project folder):
    python tools/build_standalone.py            -> creates  standalone/
It only uses Python's standard library. It supports the simple import/export
forms used in this project and stops with an error on anything else.
"""
import os
import re
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "standalone")
PAGES = ["index", "profile", "recommendations", "jobs", "schemes", "courses",
         "dashboard", "about", "privacy"]

IMPORT_RE = re.compile(r'^import\s*\{([^}]*)\}\s*from\s*"([^"]+)";\s*$', re.M | re.S)
EXPORT_FN_RE = re.compile(r'^export\s+function\s+(\w+)', re.M)
EXPORT_CONST_RE = re.compile(r'^export\s+const\s+(\w+)', re.M)


def rel(path):
    return os.path.relpath(path, ROOT).replace(os.sep, "/")


def load_module(path, modules, order):
    key = rel(path)
    if key in modules:
        return key
    src = open(path, encoding="utf8").read()
    modules[key] = None  # mark as in progress (cycle guard)
    deps = []

    def replace_import(m):
        names = [n.strip() for n in m.group(1).replace("\n", " ").split(",") if n.strip()]
        for n in names:
            if " as " in n:
                sys.exit(f"{key}: 'as' imports are not supported by this simple bundler")
        dep_path = os.path.normpath(os.path.join(os.path.dirname(path), m.group(2)))
        dep_key = load_module(dep_path, modules, order)
        deps.append(dep_key)
        return f'const {{ {", ".join(names)} }} = __mods["{dep_key}"];'

    body = IMPORT_RE.sub(replace_import, src)
    if re.search(r'^\s*(import|export)\s', body, re.M):
        bad = re.search(r'^\s*(import|export)\s.*$', body, re.M).group(0)
        if not (EXPORT_FN_RE.search(bad) or EXPORT_CONST_RE.search(bad)):
            sys.exit(f"{key}: unsupported line: {bad}")
    exported = EXPORT_FN_RE.findall(body) + EXPORT_CONST_RE.findall(body)
    body = EXPORT_FN_RE.sub(r'function \1', body)
    body = EXPORT_CONST_RE.sub(r'const \1', body)
    if re.search(r'^\s*(import|export)\s', body, re.M):
        sys.exit(f"{key}: an import/export was not converted")

    modules[key] = (
        f'// ===== {key} =====\n'
        f'__mods["{key}"] = (function () {{\n{body}\n'
        f'return {{ {", ".join(exported)} }};\n}})();\n'
    )
    order.append(key)
    return key


def bundle(entries):
    modules, order = {}, []
    for e in entries:
        load_module(os.path.join(ROOT, e), modules, order)
    parts = [modules[k] for k in order]
    return ('/* CareerSaathi AI — bundled by tools/build_standalone.py. Edit the files in js/ and data/, then rebuild. */\n'
            '(function () {\n"use strict";\nconst __mods = {};\n' + "\n".join(parts) + '\n})();\n')


def main():
    if os.path.exists(OUT):
        shutil.rmtree(OUT)
    os.makedirs(os.path.join(OUT, "js"))
    shutil.copytree(os.path.join(ROOT, "css"), os.path.join(OUT, "css"))
    open(os.path.join(OUT, ".nojekyll"), "w").close()

    script_re = re.compile(r'\s*<script type="module" src="([^"]+)"></script>')
    for page in PAGES:
        html = open(os.path.join(ROOT, f"{page}.html"), encoding="utf8").read()
        entries = script_re.findall(html)
        if not entries:
            sys.exit(f"{page}.html has no module scripts")
        js = bundle(entries)
        bundle_name = f"js/bundle-{page}.js"
        open(os.path.join(OUT, bundle_name), "w", encoding="utf8").write(js)
        first = True

        def swap(m):
            nonlocal first
            if first:
                first = False
                return f'\n  <script src="{bundle_name}" defer></script>'
            return ""

        html = script_re.sub(swap, html)
        open(os.path.join(OUT, f"{page}.html"), "w", encoding="utf8").write(html)
        print(f"built {page}.html  ->  {bundle_name}  ({len(js)//1024} KB)")
    print(f"\nDone. Open {os.path.join('standalone', 'index.html')} by double-clicking it.")


if __name__ == "__main__":
    main()
