#!/usr/bin/env node

/**
 * QA Guards Script
 * Comprehensive quality assurance checks to prevent regressions
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const SRC_DIR = path.join(__dirname, '..', 'src');

function runQAGuards() {
  console.log('🛡️  Running QA Guards...');
  
  const results = {
    timestamp: new Date().toISOString(),
    guards: {},
    overall: 'PASS',
    criticalIssues: 0,
    warnings: 0
  };
  
  // Run all QA guards
  results.guards.brandConsistency = checkBrandConsistency();
  results.guards.linkIntegrity = checkLinkIntegrity();
  results.guards.seoCompliance = checkSEOCompliance();
  results.guards.accessibilityBasics = checkAccessibilityBasics();
  results.guards.performanceBasics = checkPerformanceBasics();
  results.guards.securityHeaders = checkSecurityHeaders();
  results.guards.contentQuality = checkContentQuality();
  
  // Calculate overall status
  Object.values(results.guards).forEach(guard => {
    if (guard.status === 'FAIL') {
      results.criticalIssues++;
      results.overall = 'FAIL';
    } else if (guard.status === 'WARN') {
      results.warnings++;
    }
  });
  
  // Report results
  console.log('\n🛡️  QA Guards Results:');
  console.log(`  Overall Status: ${results.overall === 'PASS' ? '✅' : '❌'} ${results.overall}`);
  console.log(`  Critical Issues: ${results.criticalIssues}`);
  console.log(`  Warnings: ${results.warnings}`);
  
  Object.entries(results.guards).forEach(([guardName, result]) => {
    const icon = result.status === 'PASS' ? '✅' : result.status === 'WARN' ? '⚠️' : '❌';
    console.log(`  ${icon} ${guardName}: ${result.status} - ${result.message}`);
    
    if (result.issues && result.issues.length > 0) {
      result.issues.slice(0, 5).forEach(issue => {
        console.log(`    • ${issue}`);
      });
      if (result.issues.length > 5) {
        console.log(`    • ... and ${result.issues.length - 5} more issues`);
      }
    }
  });
  
  // Save detailed report
  const reportPath = path.join(__dirname, '..', 'qa-guards-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Detailed QA report saved to: ${reportPath}`);
  
  if (results.overall === 'FAIL') {
    console.log('\n❌ QA Guards failed. Please fix critical issues before deployment.');
    process.exit(1);
  } else if (results.warnings > 0) {
    console.log('\n⚠️  QA Guards passed with warnings. Consider addressing warnings for optimal quality.');
  } else {
    console.log('\n✅ All QA Guards passed successfully!');
  }
}

function checkBrandConsistency() {
  const guard = { status: 'PASS', message: '', issues: [] };
  
  try {
    const brands = ['lifetime', 'cc', 'aih'];
    const brandData = {};
    
    // Check each brand's consistency
    brands.forEach(brand => {
      const indexPath = path.join(DIST_DIR, brand, 'index.html');
      if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, 'utf8');
        
        // Extract brand-specific data
        brandData[brand] = {
          hasLogo: content.includes(`${brand}-logo`),
          hasNavigation: content.includes('nav') || content.includes('menu'),
          hasFooter: content.includes('footer'),
          hasContactForm: content.includes('contact') || content.includes('form'),
          brandMentions: (content.match(new RegExp(brand, 'gi')) || []).length
        };
        
        // Check for cross-brand contamination
        const otherBrands = brands.filter(b => b !== brand);
        otherBrands.forEach(otherBrand => {
          if (content.includes(`${otherBrand}-logo`) || 
              content.includes(`/${otherBrand}/`)) {
            guard.issues.push(`${brand} page contains references to ${otherBrand}`);
          }
        });
      } else {
        guard.issues.push(`Missing ${brand} homepage`);
      }
    });
    
    // Check consistency across brands
    const requiredElements = ['hasNavigation', 'hasFooter'];
    requiredElements.forEach(element => {
      const brandsWithElement = brands.filter(brand => 
        brandData[brand] && brandData[brand][element]
      );
      
      if (brandsWithElement.length !== brands.length) {
        guard.issues.push(`Inconsistent ${element} across brands: ${brandsWithElement.join(', ')}`);
      }
    });
    
    if (guard.issues.length > 0) {
      guard.status = guard.issues.some(issue => issue.includes('Missing')) ? 'FAIL' : 'WARN';
      guard.message = `Found ${guard.issues.length} brand consistency issues`;
    } else {
      guard.message = 'All brands are consistent';
    }
    
  } catch (error) {
    guard.status = 'FAIL';
    guard.message = `Brand consistency check failed: ${error.message}`;
  }
  
  return guard;
}

function checkLinkIntegrity() {
  const guard = { status: 'PASS', message: '', issues: [] };
  
  try {
    const htmlFiles = [];
    
    function findHTMLFiles(dir) {
      if (!fs.existsSync(dir)) return;
      
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
    
    htmlFiles.forEach(htmlFile => {
      const content = fs.readFileSync(htmlFile, 'utf8');
      const relativePath = path.relative(DIST_DIR, htmlFile);
      
      // Extract internal links
      const linkMatches = content.match(/href=["']([^"']+)["']/g) || [];
      linkMatches.forEach(match => {
        const href = match.match(/href=["']([^"']+)["']/)[1];
        
        // Check internal links
        if (href.startsWith('/') && !href.startsWith('//')) {
          const targetPath = path.join(DIST_DIR, href.substring(1));
          const targetHTMLPath = href.endsWith('/') ? 
            path.join(targetPath, 'index.html') : 
            targetPath.endsWith('.html') ? targetPath : `${targetPath}.html`;
          
          if (!fs.existsSync(targetHTMLPath) && !fs.existsSync(targetPath)) {
            guard.issues.push(`${relativePath}: Broken internal link ${href}`);
          }
        }
      });
    });
    
    if (guard.issues.length > 0) {
      guard.status = 'WARN';
      guard.message = `Found ${guard.issues.length} potentially broken links`;
    } else {
      guard.message = `Link integrity check passed for ${htmlFiles.length} files`;
    }
    
  } catch (error) {
    guard.status = 'FAIL';
    guard.message = `Link integrity check failed: ${error.message}`;
  }
  
  return guard;
}

function checkSEOCompliance() {
  const guard = { status: 'PASS', message: '', issues: [] };
  
  try {
    const brands = ['lifetime', 'cc', 'aih'];
    let totalPages = 0;
    let seoIssues = 0;
    
    brands.forEach(brand => {
      const brandDir = path.join(DIST_DIR, brand);
      if (!fs.existsSync(brandDir)) return;
      
      function checkSEOInDirectory(dir) {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            checkSEOInDirectory(filePath);
          } else if (file.endsWith('.html')) {
            totalPages++;
            const content = fs.readFileSync(filePath, 'utf8');
            const relativePath = path.relative(DIST_DIR, filePath);
            
            // Check required SEO elements
            if (!content.includes('<title>')) {
              guard.issues.push(`${relativePath}: Missing title tag`);
              seoIssues++;
            }
            
            if (!content.includes('name="description"')) {
              guard.issues.push(`${relativePath}: Missing meta description`);
              seoIssues++;
            }
            
            if (!content.includes('property="og:')) {
              guard.issues.push(`${relativePath}: Missing Open Graph tags`);
              seoIssues++;
            }
            
            if (!content.includes('rel="canonical"')) {
              guard.issues.push(`${relativePath}: Missing canonical URL`);
              seoIssues++;
            }
            
            // Check for duplicate titles
            const titleMatch = content.match(/<title>([^<]+)<\/title>/);
            if (titleMatch && titleMatch[1].trim().length < 10) {
              guard.issues.push(`${relativePath}: Title too short (${titleMatch[1].trim().length} chars)`);
              seoIssues++;
            }
          }
        });
      }
      
      checkSEOInDirectory(brandDir);
    });
    
    if (seoIssues > 0) {
      guard.status = seoIssues > totalPages * 0.5 ? 'FAIL' : 'WARN';
      guard.message = `Found ${seoIssues} SEO issues across ${totalPages} pages`;
    } else {
      guard.message = `SEO compliance check passed for ${totalPages} pages`;
    }
    
  } catch (error) {
    guard.status = 'FAIL';
    guard.message = `SEO compliance check failed: ${error.message}`;
  }
  
  return guard;
}

function checkAccessibilityBasics() {
  const guard = { status: 'PASS', message: '', issues: [] };
  
  try {
    const htmlFiles = [];
    
    function findHTMLFiles(dir) {
      if (!fs.existsSync(dir)) return;
      
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
    
    let a11yIssues = 0;
    
    htmlFiles.forEach(htmlFile => {
      const content = fs.readFileSync(htmlFile, 'utf8');
      const relativePath = path.relative(DIST_DIR, htmlFile);
      
      // Check for basic accessibility requirements
      if (!content.includes('lang=')) {
        guard.issues.push(`${relativePath}: Missing language attribute`);
        a11yIssues++;
      }
      
      // Check for images without alt text
      const imgMatches = content.match(/<img[^>]+>/g) || [];
      imgMatches.forEach(img => {
        if (!img.includes('alt=')) {
          guard.issues.push(`${relativePath}: Image without alt text`);
          a11yIssues++;
        }
      });
      
      // Check for form inputs without labels
      const inputMatches = content.match(/<input[^>]+>/g) || [];
      inputMatches.forEach(input => {
        if (input.includes('type="text"') || input.includes('type="email"')) {
          if (!content.includes(`for="${input.match(/id=["']([^"']+)["']/)?.[1]}"`)) {
            guard.issues.push(`${relativePath}: Form input without associated label`);
            a11yIssues++;
          }
        }
      });
    });
    
    if (a11yIssues > 0) {
      guard.status = 'WARN';
      guard.message = `Found ${a11yIssues} accessibility issues across ${htmlFiles.length} files`;
    } else {
      guard.message = `Basic accessibility check passed for ${htmlFiles.length} files`;
    }
    
  } catch (error) {
    guard.status = 'FAIL';
    guard.message = `Accessibility check failed: ${error.message}`;
  }
  
  return guard;
}

function checkPerformanceBasics() {
  const guard = { status: 'PASS', message: '', issues: [] };
  
  try {
    const cssPath = path.join(DIST_DIR, 'assets', 'css', 'site.css');
    const jsPath = path.join(DIST_DIR, 'assets', 'js', 'site.js');
    
    // Check CSS size
    if (fs.existsSync(cssPath)) {
      const cssSize = fs.statSync(cssPath).size;
      if (cssSize > 100 * 1024) { // 100KB
        guard.issues.push(`CSS file is large: ${Math.round(cssSize / 1024)}KB`);
      }
    } else {
      guard.issues.push('Main CSS file not found');
    }
    
    // Check JS size
    if (fs.existsSync(jsPath)) {
      const jsSize = fs.statSync(jsPath).size;
      if (jsSize > 200 * 1024) { // 200KB
        guard.issues.push(`JavaScript file is large: ${Math.round(jsSize / 1024)}KB`);
      }
    }
    
    // Check for large images
    const assetsDir = path.join(DIST_DIR, 'assets');
    if (fs.existsSync(assetsDir)) {
      function checkImageSizes(dir) {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            checkImageSizes(filePath);
          } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
            if (stat.size > 500 * 1024) { // 500KB
              const relativePath = path.relative(assetsDir, filePath);
              guard.issues.push(`Large image: ${relativePath} (${Math.round(stat.size / 1024)}KB)`);
            }
          }
        });
      }
      
      checkImageSizes(assetsDir);
    }
    
    if (guard.issues.length > 0) {
      guard.status = 'WARN';
      guard.message = `Found ${guard.issues.length} performance concerns`;
    } else {
      guard.message = 'Performance basics check passed';
    }
    
  } catch (error) {
    guard.status = 'FAIL';
    guard.message = `Performance check failed: ${error.message}`;
  }
  
  return guard;
}

function checkSecurityHeaders() {
  const guard = { status: 'PASS', message: '', issues: [] };
  
  try {
    const netlifyTomlPath = path.join(__dirname, '..', 'netlify.toml');
    
    if (fs.existsSync(netlifyTomlPath)) {
      const content = fs.readFileSync(netlifyTomlPath, 'utf8');
      
      const requiredHeaders = [
        'X-Frame-Options',
        'X-Content-Type-Options',
        'X-XSS-Protection'
      ];
      
      requiredHeaders.forEach(header => {
        if (!content.includes(header)) {
          guard.issues.push(`Missing security header: ${header}`);
        }
      });
      
      if (guard.issues.length > 0) {
        guard.status = 'WARN';
        guard.message = `Missing ${guard.issues.length} security headers`;
      } else {
        guard.message = 'Security headers configured correctly';
      }
    } else {
      guard.status = 'FAIL';
      guard.message = 'netlify.toml not found';
    }
    
  } catch (error) {
    guard.status = 'FAIL';
    guard.message = `Security headers check failed: ${error.message}`;
  }
  
  return guard;
}

function checkContentQuality() {
  const guard = { status: 'PASS', message: '', issues: [] };
  
  try {
    const brands = ['lifetime', 'cc', 'aih'];
    let totalPages = 0;
    let contentIssues = 0;
    
    brands.forEach(brand => {
      const indexPath = path.join(DIST_DIR, brand, 'index.html');
      
      if (fs.existsSync(indexPath)) {
        totalPages++;
        const content = fs.readFileSync(indexPath, 'utf8');
        
        // Check for placeholder content
        const placeholders = ['lorem ipsum', 'placeholder', 'todo', 'tbd', '___'];
        placeholders.forEach(placeholder => {
          if (content.toLowerCase().includes(placeholder)) {
            guard.issues.push(`${brand}: Contains placeholder content (${placeholder})`);
            contentIssues++;
          }
        });
        
        // Check for minimum content length
        const textContent = content.replace(/<[^>]*>/g, '').trim();
        if (textContent.length < 500) {
          guard.issues.push(`${brand}: Homepage has minimal content (${textContent.length} chars)`);
          contentIssues++;
        }
        
        // Check for contact information
        if (!content.includes('phone') && !content.includes('email') && !content.includes('contact')) {
          guard.issues.push(`${brand}: Missing contact information`);
          contentIssues++;
        }
      }
    });
    
    if (contentIssues > 0) {
      guard.status = 'WARN';
      guard.message = `Found ${contentIssues} content quality issues across ${totalPages} pages`;
    } else {
      guard.message = `Content quality check passed for ${totalPages} pages`;
    }
    
  } catch (error) {
    guard.status = 'FAIL';
    guard.message = `Content quality check failed: ${error.message}`;
  }
  
  return guard;
}

// Run QA guards if called directly
if (require.main === module) {
  runQAGuards();
}

module.exports = { runQAGuards };

