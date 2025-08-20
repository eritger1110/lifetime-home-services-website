// scripts/postbuild.cjs
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();              // publish root (we publish ".")
const DIST = path.join(ROOT, "dist");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`(skip) ${src} not found`);
    return;
  }
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true }); // Node 16+ / 20 OK
  console.log(`→ ${dest.replace(ROOT + path.sep, "")} (from ${src.replace(ROOT + path.sep, "")})`);
}

// 1) Brand bundles into the publish root
copyDir(path.join(DIST, "lifetime"), path.join(ROOT, "lifetime"));
copyDir(path.join(DIST, "aih"),       path.join(ROOT, "aih"));
copyDir(path.join(DIST, "cc"),        path.join(ROOT, "cc"));

// 2) Shared assets at /assets
copyDir(path.join(ROOT, "src", "assets"), path.join(ROOT, "assets"));

// 3) Root index: forward "/" → "/lifetime/"
const indexHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Lifetime Home Services</title>
  <meta http-equiv="refresh" content="0; url=/lifetime/" />
  <script>window.location.replace('/lifetime/');</script>
</head>
<body>
  <p>Redirecting to <a href="/lifetime/">/lifetime/</a>…</p>
</body>
</html>`;
fs.writeFileSync(path.join(ROOT, "index.html"), indexHtml, "utf8");

// 4) Optional: ONLY the root redirect (let netlify.toml handle host routing)
fs.writeFileSync(path.join(ROOT, "_redirects"), "/ /lifetime/ 302\n", "utf8");

console.log("✔ Postbuild complete");
