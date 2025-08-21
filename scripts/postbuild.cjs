// scripts/postbuild.cjs
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return console.log(`(skip) ${src} not found`);
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
  console.log(`→ ${dest.replace(ROOT + path.sep, "")} (from ${src.replace(ROOT + path.sep, "")})`);
}

// 1) Copy brand bundles to publish root
copyDir(path.join(DIST, "lifetime"), path.join(ROOT, "lifetime"));
copyDir(path.join(DIST, "aih"),       path.join(ROOT, "aih"));
copyDir(path.join(DIST, "cc"),        path.join(ROOT, "cc"));

// 2) Copy shared assets to /assets
copyDir(path.join(ROOT, "src", "assets"), path.join(ROOT, "assets"));

// 3) Root index that forwards "/" to "/lifetime/" (helps previews)
const indexHtml = `<!doctype html>
<html lang="en"><meta charset="utf-8">
<title>Lifetime Home Services</title>
<meta http-equiv="refresh" content="0; url=/lifetime/">
<script>location.replace('/lifetime/');</script>
<body>Redirecting to <a href="/lifetime/">/lifetime/</a>…</body></html>`;
fs.writeFileSync(path.join(ROOT, "index.html"), indexHtml, "utf8");

console.log("✔ Postbuild complete");
