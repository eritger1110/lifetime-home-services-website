#!/usr/bin/env node

/**
 * Health Check Script
 * Performs comprehensive health checks on the built website
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

function performHealthCheck() {
  console.log('🏥 Starting website health check...');
  
  const results = {
    timestamp: new Date().toISOString(),
    checks: {},
    overall: 'PASS'
  };
  
  // Run all health checks
  results.checks.buildOutput = checkBuildOutput();
  results.checks.brandPages = checkBrandPages();
  results.checks.assets = checkCriticalAssets();
  results.checks.htmlValidation = checkHTMLValidation();
  results.checks.performance = checkPerformanceMetrics();
  
  // Determine overall status
  const failedChecks = Object.values(results.checks).filter(check => check.status === 'FAIL');
  if (failedChecks.length > 0) {
    results.overall = 'FAIL';
  }
  
  // Report results
  console.log('\n📊 Health Check Results:');
  console.log(`  Overall Status: ${results.overall === 'PASS' ? '✅' : '❌'} ${results.overall}`);
  
  Object.entries(results.checks).forEach(([checkName, result]) => {
    const icon = result.status === 'PASS' ? '✅' : result.status === 'WARN' ? '⚠️' : '❌';
    console.log(`  ${icon} ${checkName}: ${result.status} (${result.message})`);
    
    if (result.details && result.details.length > 0) {
      result.details.forEach(detail => {
        console.log(`    - ${detail}`);
      });
    }
  });
  
  // Save detailed report
  const reportPath = path.join(__dirname, '..', 'health-check-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  
  if (results.overall === 'FAIL') {
    process.exit(1);
  }
}

function checkBuildOutput() {
  const check = { status: 'PASS', message: '', details: [] };
  
  try {
    if (!fs.existsSync(DIST_DIR)) {
      check.status = 'FAIL';
      check.message = 'Build output directory not found';
      return check;
    }
    
    const requiredDirs = ['lifetime', 'cc', 'aih', 'assets'];
    const missingDirs = requiredDirs.filter(dir => !fs.existsSync(path.join(DIST_DIR, dir)));
    
    if (missingDirs.length > 0) {
      check.status = 'FAIL';
      check.message = `Missing required directories: ${missingDirs.join(', ')}`;
      check.details = missingDirs.map(dir => `Missing: /dist/${dir}/`);
      return check;
    }
    
    check.message = 'All required build directories present';
    
  } catch (error) {
    check.status = 'FAIL';
    check.message = `Build output check failed: ${error.message}`;
  }
  
  return check;
}

function checkBrandPages() {
  const check = { status: 'PASS', message: '', details: [] };
  
  try {
    const brands = ['lifetime', 'cc', 'aih'];
    const missingPages = [];
    
    brands.forEach(brand => {
      const indexPath = path.join(DIST_DIR, brand, 'index.html');
      if (!fs.existsSync(indexPath)) {
        missingPages.push(`${brand}/index.html`);
      } else {
        // Check if page has content
        const content = fs.readFileSync(indexPath, 'utf8');
        if (content.length < 1000) {
          check.details.push(`${brand}/index.html appears to have minimal content (${content.length} chars)`);
          check.status = 'WARN';
        }
      }
    });
    
    if (missingPages.length > 0) {
      check.status = 'FAIL';
      check.message = `Missing brand pages: ${missingPages.join(', ')}`;
      check.details = missingPages.map(page => `Missing: ${page}`);
    } else {
      check.message = `All brand pages present (${brands.length} brands)`;
    }
    
  } catch (error) {
    check.status = 'FAIL';
    check.message = `Brand pages check failed: ${error.message}`;
  }
  
  return check;
}

function checkCriticalAssets() {
  const check = { status: 'PASS', message: '', details: [] };
  
  try {
    const criticalAssets = [
      'assets/css/site.css',
      'assets/js/site.js'
    ];
    
    const missingAssets = criticalAssets.filter(asset => 
      !fs.existsSync(path.join(DIST_DIR, asset))
    );
    
    if (missingAssets.length > 0) {
      check.status = 'FAIL';
      check.message = `Missing critical assets: ${missingAssets.join(', ')}`;
      check.details = missingAssets.map(asset => `Missing: ${asset}`);
    } else {
      // Check file sizes
      criticalAssets.forEach(asset => {
        const assetPath = path.join(DIST_DIR, asset);
        const size = fs.statSync(assetPath).size;
        
        if (size < 100) {
          check.details.push(`${asset} is very small (${size} bytes) - may be empty`);
          check.status = 'WARN';
        }
      });
      
      check.message = `All critical assets present (${criticalAssets.length} files)`;
    }
    
  } catch (error) {
    check.status = 'FAIL';
    check.message = `Critical assets check failed: ${error.message}`;
  }
  
  return check;
}

function checkHTMLValidation() {
  const check = { status: 'PASS', message: '', details: [] };
  
  try {
    const htmlFiles = [];
    
    function findHTMLFiles(dir) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          findHTMLFiles(filePath);
        } else if (file.endsWith('.html')) {
          htmlFiles.push(filePath);
        }
      });
    }
    
    findHTMLFiles(DIST_DIR);
    
    let validationIssues = 0;
    
    htmlFiles.forEach(htmlFile => {
      const content = fs.readFileSync(htmlFile, 'utf8');
      const relativePath = path.relative(DIST_DIR, htmlFile);
      
      // Basic HTML validation checks
      if (!content.includes('<!DOCTYPE html>')) {
        check.details.push(`${relativePath}: Missing DOCTYPE declaration`);
        validationIssues++;
      }
      
      if (!content.includes('<title>')) {
        check.details.push(`${relativePath}: Missing title tag`);
        validationIssues++;
      }
      
      if (!content.includes('lang=')) {
        check.details.push(`${relativePath}: Missing language attribute`);
        validationIssues++;
      }
    });
    
    if (validationIssues > 0) {
      check.status = 'WARN';
      check.message = `Found ${validationIssues} HTML validation issues across ${htmlFiles.length} files`;
    } else {
      check.message = `HTML validation passed for ${htmlFiles.length} files`;
    }
    
  } catch (error) {
    check.status = 'FAIL';
    check.message = `HTML validation check failed: ${error.message}`;
  }
  
  return check;
}

function checkPerformanceMetrics() {
  const check = { status: 'PASS', message: '', details: [] };
  
  try {
    const metrics = {
      totalSize: 0,
      fileCount: 0,
      largeFiles: []
    };
    
    function calculateSize(dir) {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          calculateSize(filePath);
        } else {
          metrics.totalSize += stat.size;
          metrics.fileCount++;
          
          // Flag large files (>1MB)
          if (stat.size > 1024 * 1024) {
            const relativePath = path.relative(DIST_DIR, filePath);
            metrics.largeFiles.push({
              path: relativePath,
              size: Math.round(stat.size / 1024 / 1024 * 100) / 100
            });
          }
        }
      });
    }
    
    calculateSize(DIST_DIR);
    
    const totalSizeMB = Math.round(metrics.totalSize / 1024 / 1024 * 100) / 100;
    
    if (totalSizeMB > 50) {
      check.status = 'WARN';
      check.message = `Build size is large: ${totalSizeMB}MB (${metrics.fileCount} files)`;
    } else {
      check.message = `Build size: ${totalSizeMB}MB (${metrics.fileCount} files)`;
    }
    
    if (metrics.largeFiles.length > 0) {
      check.details.push(`Large files found:`);
      metrics.largeFiles.forEach(file => {
        check.details.push(`  ${file.path}: ${file.size}MB`);
      });
    }
    
  } catch (error) {
    check.status = 'FAIL';
    check.message = `Performance metrics check failed: ${error.message}`;
  }
  
  return check;
}

// Run health check if called directly
if (require.main === module) {
  performHealthCheck();
}

module.exports = { performHealthCheck };

