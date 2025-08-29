#!/usr/bin/env node

/**
 * Build Cleanup Script
 * Removes temporary files, duplicate assets, and optimizes the build output
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

function cleanupBuild() {
  console.log('🧹 Starting build cleanup...');

  // Remove duplicate assets across brand directories
  removeDuplicateAssets();
  
  // Remove empty directories
  removeEmptyDirectories(DIST_DIR);
  
  // Clean up temporary files
  cleanupTempFiles();
  
  console.log('✅ Build cleanup completed successfully');
}

function removeDuplicateAssets() {
  console.log('🔍 Removing duplicate assets...');
  
  const brandDirs = ['lifetime', 'cc', 'aih'];
  const rootAssetsDir = path.join(DIST_DIR, 'assets');
  
  brandDirs.forEach(brand => {
    const brandAssetsDir = path.join(DIST_DIR, brand, 'assets');
    
    if (fs.existsSync(brandAssetsDir) && fs.existsSync(rootAssetsDir)) {
      console.log(`  Removing duplicate assets from /${brand}/assets/`);
      fs.rmSync(brandAssetsDir, { recursive: true, force: true });
    }
  });
}

function removeEmptyDirectories(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  if (files.length === 0) {
    fs.rmdirSync(dir);
    console.log(`  Removed empty directory: ${path.relative(DIST_DIR, dir)}`);
    return;
  }
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      removeEmptyDirectories(filePath);
    }
  });
  
  // Check again after processing subdirectories
  const remainingFiles = fs.readdirSync(dir);
  if (remainingFiles.length === 0) {
    fs.rmdirSync(dir);
    console.log(`  Removed empty directory: ${path.relative(DIST_DIR, dir)}`);
  }
}

function cleanupTempFiles() {
  console.log('🗑️  Cleaning up temporary files...');
  
  const tempPatterns = [
    '**/.DS_Store',
    '**/.tmp',
    '**/Thumbs.db',
    '**/*.tmp',
    '**/*.temp'
  ];
  
  function cleanDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        cleanDirectory(filePath);
      } else {
        // Check if file matches temp patterns
        if (file.startsWith('.DS_Store') || 
            file === 'Thumbs.db' || 
            file.endsWith('.tmp') || 
            file.endsWith('.temp')) {
          fs.unlinkSync(filePath);
          console.log(`  Removed temp file: ${path.relative(DIST_DIR, filePath)}`);
        }
      }
    });
  }
  
  cleanDirectory(DIST_DIR);
}

// Run cleanup if called directly
if (require.main === module) {
  cleanupBuild();
}

module.exports = { cleanupBuild };

