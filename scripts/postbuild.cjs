const fs = require('fs');
const path = require('path');

console.log('🔍 Running postbuild validation...');

// Check that all three brands built successfully
const brands = ['lifetime', 'cc', 'aih'];
let allBuildsValid = true;

for (const brand of brands) {
  const indexPath = path.join('dist', brand, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.error(`❌ Missing ${brand} index.html`);
    allBuildsValid = false;
    continue;
  }
  
  const html = fs.readFileSync(indexPath, 'utf8');
  
  // Check for CSS cache-buster
  if (!/\/assets\/css\/site\.css\?v=/.test(html)) {
    console.error(`❌ ${brand} index missing versioned CSS query param`);
    allBuildsValid = false;
  }
  
  // Check for brand-specific content
  const brandNames = {
    'lifetime': 'Lifetime Home Services',
    'cc': 'Closet Concepts', 
    'aih': 'America In-Home'
  };
  
  if (!html.includes(brandNames[brand])) {
    console.error(`❌ ${brand} index missing brand name: ${brandNames[brand]}`);
    allBuildsValid = false;
  }
  
  console.log(`✅ ${brand} build valid`);
}

// Check that assets are copied
const assetsPath = path.join('dist', 'lifetime', 'assets');
if (!fs.existsSync(assetsPath)) {
  console.error('❌ Assets not copied to dist');
  allBuildsValid = false;
} else {
  console.log('✅ Assets copied successfully');
}

if (allBuildsValid) {
  console.log('🎉 All postbuild validations passed!');
  process.exit(0);
} else {
  console.error('💥 Postbuild validation failed!');
  process.exit(1);
}

