#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * P0 Asset Validation Script
 * Validates that canonical brand assets exist in built output
 * Allows ___TBD___ entries for CC/AIH until hero filenames are provided
 */

function validateAssets() {
  console.log('🔍 Starting asset validation...');
  
  // Load brand assets manifest
  const manifestPath = path.join(__dirname, '../public/assets/brand-assets.json');
  if (!fs.existsSync(manifestPath)) {
    console.error('❌ Brand assets manifest not found:', manifestPath);
    process.exit(1);
  }
  
  const brandAssets = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const distDir = path.join(__dirname, '../dist');
  
  let errors = 0;
  let warnings = 0;
  
  // Validate each brand's assets
  for (const [brand, assets] of Object.entries(brandAssets)) {
    console.log(`\n📋 Validating ${brand.toUpperCase()} assets:`);
    
    for (const [assetType, assetPath] of Object.entries(assets)) {
      // Skip TBD entries (temporary for CC/AIH)
      if (assetPath.includes('___TBD___')) {
        console.log(`⏳ ${brand} ${assetType}: ${assetPath} (TBD - skipping)`);
        warnings++;
        continue;
      }
      
      // Convert /assets/... to dist/assets/...
      const distPath = path.join(distDir, assetPath.replace(/^\//, ''));
      
      if (fs.existsSync(distPath)) {
        console.log(`✅ ${brand} ${assetType}: ${assetPath}`);
      } else {
        console.error(`❌ ${brand} ${assetType}: ${assetPath} (missing: ${distPath})`);
        errors++;
      }
    }
  }
  
  // Summary
  console.log(`\n📊 Asset Validation Summary:`);
  console.log(`✅ Status: ${errors === 0 ? 'PASS' : 'FAIL'}`);
  console.log(`❌ Errors: ${errors}`);
  console.log(`⚠️  Warnings: ${warnings} (TBD entries)`);
  
  if (errors > 0) {
    console.log('\n💡 Fix missing assets and rebuild before deployment.');
    process.exit(1);
  } else {
    console.log('\n🎉 Asset validation PASSED! All required assets found.');
    process.exit(0);
  }
}

// Run validation
validateAssets();

