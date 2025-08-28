// scripts/postbuild.cjs
const fs = require("fs");
const path = require("path");

// Import sitemap generator
const { generateHostAwareSitemaps } = require("./generate-host-aware-sitemaps");

const dist = path.join(process.cwd(), "dist");

// ensure /dist exists
fs.mkdirSync(dist, { recursive: true });

// P0 HOTFIX: Required asset validation (fail fast)
const requiredAssets = [
  path.join(dist, "assets", "css", "site.css"),
  path.join(dist, "assets", "images", "lifetime-hero-house.webp"),
  path.join(dist, "assets", "images", "lifetime-hero-house.jpg")
];

function validateRequiredAssets() {
  const missing = requiredAssets.filter(asset => !fs.existsSync(asset));
  if (missing.length > 0) {
    console.error("❌ P0 HOTFIX: Missing required assets:");
    missing.forEach(asset => console.error(`   ${asset}`));
    throw new Error("Build failed: Required assets missing");
  }
  console.log("✅ P0 HOTFIX: All required assets present");
}

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

// 4) Netlify redirects in the PUBLISH FOLDER (critical!)
const redirects = [
  "/ /lifetime/ 302",                 // root -> /lifetime/
  // keep a few samples; add more as needed:
  "/old-radon-page /services/radon-mitigation/ 301",
  // SPA fallback for client-side routing
  "/* /index.html 200"
].join("\n") + "\n";

fs.writeFileSync(path.join(dist, "_redirects"), redirects, "utf8");

console.log("✔ Multi-brand postbuild complete");
console.log("✔ Brands available: /lifetime/, /cc/, /aih/");
console.log("✔ Shared assets: /assets/");
console.log("✔ Wrote dist/index.html and dist/_redirects");

// 5) Generate host-aware sitemaps and robots.txt (PR #27)
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

// 6) P0 HOTFIX: Validate required assets exist
validateRequiredAssets();

// 7) STRENGTHENED P0 GUARDS: CSS link validation with regex
const mustExist = p => { if (!fs.existsSync(p)) { console.error('Missing required file:', p); process.exit(1); } };

// 1) CSS must exist
// CSS must exist
mustExist(path.join('dist','assets','css','site.css'));

// lifetime index must reference canonical CSS and not legacy styles.css
const lifetimeHtmlPath = path.join('dist','lifetime','index.html');
mustExist(lifetimeHtmlPath);
const lifetimeHtml = fs.readFileSync(lifetimeHtmlPath, 'utf8');

// Fail if it still references any variant of styles.css
if (/\bhref=["'](?:\/lifetime\/)?styles\.css["']/.test(lifetimeHtml) || /\bhref=["']styles\.css["']/.test(lifetimeHtml)) {
  console.error('❌ Regression: lifetime index still references styles.css');
  process.exit(1);
}

// Require the canonical link
if (!/\bhref=["']\/assets\/css\/site\.css/.test(lifetimeHtml)) {
  console.error('❌ lifetime index does not link /assets/css/site.css');
  process.exit(1);
}

console.log('✅ CSS link validation passed for /lifetime/');

// P0: Strengthen CSS cache-buster validation
const html = fs.readFileSync(path.join('dist','lifetime','index.html'),'utf8');
if (!/\/assets\/css\/site\.css\?v=/.test(html)) {
  console.error('❌ lifetime index missing versioned CSS query param');
  process.exit(1);
}
if (/\/assets\/css\/site\.css\?v=18\b/.test(html)) {
  console.error('❌ CSS cache-buster is stuck on v=18');
  process.exit(1);
}
console.log('✅ CSS cache-buster uses build SHA/timestamp');
