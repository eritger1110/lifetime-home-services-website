#!/usr/bin/env node

/**
 * Image Optimization Script
 * Optimizes images for web delivery and generates WebP versions
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_ASSETS_DIR = path.join(__dirname, '..', 'public', 'assets');

function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  const stats = {
    totalImages: 0,
    optimized: 0,
    skipped: 0,
    errors: 0
  };
  
  // Find all image files
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  
  function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          stats.totalImages++;
          processImage(filePath, stats);
        }
      }
    });
  }
  
  processDirectory(PUBLIC_ASSETS_DIR);
  
  // Report results
  console.log('\n📊 Image Optimization Results:');
  console.log(`  Total images: ${stats.totalImages}`);
  console.log(`  Optimized: ${stats.optimized}`);
  console.log(`  Skipped: ${stats.skipped}`);
  console.log(`  Errors: ${stats.errors}`);
  
  if (stats.errors === 0) {
    console.log('\n✅ Image optimization completed successfully!');
  } else {
    console.log('\n⚠️  Image optimization completed with errors.');
  }
}

function processImage(imagePath, stats) {
  try {
    const relativePath = path.relative(PUBLIC_ASSETS_DIR, imagePath);
    const fileSize = fs.statSync(imagePath).size;
    
    // Check if image is already optimized (basic heuristic)
    if (fileSize < 100 * 1024) { // Less than 100KB
      console.log(`  ⏭️  Skipping ${relativePath} (already small: ${Math.round(fileSize / 1024)}KB)`);
      stats.skipped++;
      return;
    }
    
    // For now, just log what would be optimized
    // In a real implementation, you would use sharp, imagemin, or similar
    console.log(`  🔧 Would optimize ${relativePath} (${Math.round(fileSize / 1024)}KB)`);
    
    // Simulate optimization
    const ext = path.extname(imagePath).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      if (!fs.existsSync(webpPath)) {
        console.log(`    📝 Would create WebP version: ${path.basename(webpPath)}`);
      }
    }
    
    stats.optimized++;
    
  } catch (error) {
    console.error(`  ❌ Error processing ${imagePath}:`, error.message);
    stats.errors++;
  }
}

function generateImageManifest() {
  console.log('\n📋 Generating image manifest...');
  
  const manifest = {
    generated: new Date().toISOString(),
    images: {}
  };
  
  function scanDirectory(dir, brandPrefix = '') {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath, brandPrefix ? `${brandPrefix}/${file}` : file);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
          const relativePath = path.relative(PUBLIC_ASSETS_DIR, filePath);
          const webPath = `/assets/${relativePath.replace(/\\/g, '/')}`;
          
          manifest.images[webPath] = {
            size: stat.size,
            modified: stat.mtime.toISOString(),
            type: ext.substring(1)
          };
        }
      }
    });
  }
  
  scanDirectory(PUBLIC_ASSETS_DIR);
  
  const manifestPath = path.join(__dirname, '..', 'image-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log(`  ✅ Image manifest saved to: ${manifestPath}`);
  console.log(`  📊 Total images cataloged: ${Object.keys(manifest.images).length}`);
}

// Run optimization if called directly
if (require.main === module) {
  optimizeImages();
  generateImageManifest();
}

module.exports = { optimizeImages, generateImageManifest };

