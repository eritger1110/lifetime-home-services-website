// scripts/postbuild.cjs
const fs = require("fs");
const path = require("path");
const { generateHostAwareSitemaps } = require("./generate-sitemap.js");

const dist = path.join(process.cwd(), "dist");

// ensure /dist exists
fs.mkdirSync(dist, { recursive: true });

// 1) Root index that forwards "/" to "/lifetime/" (default brand)
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

// 2) Copy shared assets to root level for cross-brand access
const sharedAssets = path.join(process.cwd(), "public", "assets");
const distAssets = path.join(dist, "assets");

if (fs.existsSync(sharedAssets)) {
  // Copy shared assets to root /assets/ for all brands
  fs.cpSync(sharedAssets, distAssets, { recursive: true });
  console.log("✔ Copied shared assets to dist/assets/");
}

// 3) Create brand-specific asset symlinks if needed
const brands = ["lifetime", "cc", "aih"];
brands.forEach(brand => {
  const brandDir = path.join(dist, brand);
  const brandAssets = path.join(brandDir, "assets");
  
  if (fs.existsSync(brandDir) && !fs.existsSync(brandAssets)) {
    // Create relative symlink to shared assets
    try {
      fs.symlinkSync("../assets", brandAssets, "dir");
      console.log(`✔ Created asset symlink for ${brand}`);
    } catch (err) {
      // Fallback: copy assets if symlink fails
      if (fs.existsSync(distAssets)) {
        fs.cpSync(distAssets, brandAssets, { recursive: true });
        console.log(`✔ Copied assets for ${brand} (symlink failed)`);
      }
    }
  }
});

console.log("✔ Multi-brand postbuild complete");
console.log("✔ Brands available: /lifetime/, /cc/, /aih/");
console.log("✔ Shared assets: /assets/");

// 3) Generate host-aware sitemaps and robots.txt (PR #27)
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
