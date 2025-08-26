// scripts/postbuild.cjs
const fs = require("fs");
const path = require("path");

// Import sitemap generator
const { generateHostAwareSitemaps } = require("./generate-host-aware-sitemaps");

const dist = path.join(process.cwd(), "dist");

// ensure /dist exists
fs.mkdirSync(dist, { recursive: true });

// 1) Root index that forwards "/" to "/lifetime/"
const indexHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Lifetime Home Services</title>
  <meta http-equiv="refresh" content="0; url=/lifetime/">
  <script>window.location.replace('/lifetime/');</script>
</head>
<body>
  <p>Redirecting to <a href="/lifetime/">/lifetime/</a>…</p>
</body>
</html>`;
fs.writeFileSync(path.join(dist, "index.html"), indexHtml, "utf8");

// 2) Netlify redirects in the PUBLISH FOLDER (critical!)
const redirects = [
  "/ /lifetime/ 302",                 // root -> /lifetime/
  // keep a few samples; add more as needed:
  "/old-radon-page /services/radon-mitigation/ 301",
  // SPA fallback for client-side routing
  "/* /index.html 200"
].join("\n") + "\n";

fs.writeFileSync(path.join(dist, "_redirects"), redirects, "utf8");

console.log("✔ Wrote dist/index.html and dist/_redirects");

// 3) Generate host-aware sitemaps and robots.txt
try {
  if (typeof generateHostAwareSitemaps === "function") {
    generateHostAwareSitemaps();
    console.log("✓ Generated host-aware sitemaps and robots.txt");
  } else {
    console.warn("⚠︎ Skipping sitemap/robots generation (generateHostAwareSitemaps not found)");
  }
} catch (error) {
  console.error("Error generating sitemaps:", error);
}
