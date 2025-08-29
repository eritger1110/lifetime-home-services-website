#!/usr/bin/env node

/**
 * Regression Tests Script
 * Automated tests to prevent breaking changes in the tri-brand system
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

function runRegressionTests() {
  console.log('🔄 Running regression tests...');
  
  const results = {
    timestamp: new Date().toISOString(),
    tests: {},
    passed: 0,
    failed: 0,
    skipped: 0
  };
  
  // Run all regression tests
  results.tests.brandRouting = testBrandRouting();
  results.tests.assetLoading = testAssetLoading();
  results.tests.navigationConsistency = testNavigationConsistency();
  results.tests.formFunctionality = testFormFunctionality();
  results.tests.responsiveLayout = testResponsiveLayout();
  results.tests.seoMetadata = testSEOMetadata();
  results.tests.accessibilityFeatures = testAccessibilityFeatures();
  
  // Calculate results
  Object.values(results.tests).forEach(test => {
    if (test.status === 'PASS') results.passed++;
    else if (test.status === 'FAIL') results.failed++;
    else results.skipped++;
  });
  
  // Report results
  console.log('\n🔄 Regression Test Results:');
  console.log(`  Passed: ${results.passed}`);
  console.log(`  Failed: ${results.failed}`);
  console.log(`  Skipped: ${results.skipped}`);
  
  Object.entries(results.tests).forEach(([testName, result]) => {
    const icon = result.status === 'PASS' ? '✅' : result.status === 'FAIL' ? '❌' : '⏭️';
    console.log(`  ${icon} ${testName}: ${result.status} - ${result.message}`);
    
    if (result.details && result.details.length > 0) {
      result.details.forEach(detail => {
        console.log(`    • ${detail}`);
      });
    }
  });
  
  // Save test report
  const reportPath = path.join(__dirname, '..', 'regression-test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Test report saved to: ${reportPath}`);
  
  if (results.failed > 0) {
    console.log('\n❌ Regression tests failed. Breaking changes detected!');
    process.exit(1);
  } else {
    console.log('\n✅ All regression tests passed!');
  }
}

function testBrandRouting() {
  const test = { status: 'PASS', message: '', details: [] };
  
  try {
    const brands = ['lifetime', 'cc', 'aih'];
    const missingBrands = [];
    
    brands.forEach(brand => {
      const brandDir = path.join(DIST_DIR, brand);
      const indexPath = path.join(brandDir, 'index.html');
      
      if (!fs.existsSync(brandDir)) {
        missingBrands.push(`${brand} directory`);
      } else if (!fs.existsSync(indexPath)) {
        missingBrands.push(`${brand}/index.html`);
      } else {
        // Check if index.html has proper brand content
        const content = fs.readFileSync(indexPath, 'utf8');
        if (!content.includes(brand) && !content.includes(brand.toUpperCase())) {
          test.details.push(`${brand} homepage may not contain brand-specific content`);
        }
      }
    });
    
    if (missingBrands.length > 0) {
      test.status = 'FAIL';
      test.message = `Missing brand routing components: ${missingBrands.join(', ')}`;
    } else {
      test.message = `Brand routing test passed for ${brands.length} brands`;
    }
    
  } catch (error) {
    test.status = 'FAIL';
    test.message = `Brand routing test failed: ${error.message}`;
  }
  
  return test;
}

function testAssetLoading() {
  const test = { status: 'PASS', message: '', details: [] };
  
  try {
    const criticalAssets = [
      'assets/css/site.css',
      'assets/js/site.js'
    ];
    
    const missingAssets = [];
    const assetSizes = {};
    
    criticalAssets.forEach(asset => {
      const assetPath = path.join(DIST_DIR, asset);
      
      if (!fs.existsSync(assetPath)) {
        missingAssets.push(asset);
      } else {
        const size = fs.statSync(assetPath).size;
        assetSizes[asset] = size;
        
        // Check for minimum size (not empty)
        if (size < 100) {
          test.details.push(`${asset} is suspiciously small (${size} bytes)`);
        }
      }
    });
    
    if (missingAssets.length > 0) {
      test.status = 'FAIL';
      test.message = `Missing critical assets: ${missingAssets.join(', ')}`;
    } else {
      test.message = `Asset loading test passed for ${criticalAssets.length} assets`;
      
      // Add size information to details
      Object.entries(assetSizes).forEach(([asset, size]) => {
        test.details.push(`${asset}: ${Math.round(size / 1024)}KB`);
      });
    }
    
  } catch (error) {
    test.status = 'FAIL';
    test.message = `Asset loading test failed: ${error.message}`;
  }
  
  return test;
}

function testNavigationConsistency() {
  const test = { status: 'PASS', message: '', details: [] };
  
  try {
    const brands = ['lifetime', 'cc', 'aih'];
    const navigationData = {};
    
    brands.forEach(brand => {
      const indexPath = path.join(DIST_DIR, brand, 'index.html');
      
      if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, 'utf8');
        
        // Extract navigation elements
        navigationData[brand] = {
          hasNav: content.includes('<nav') || content.includes('navigation'),
          hasMenu: content.includes('menu'),
          hasLogo: content.includes('logo'),
          hasContactLink: content.includes('contact'),
          linkCount: (content.match(/<a[^>]+href/g) || []).length
        };
      }
    });
    
    // Check consistency across brands
    const navElements = ['hasNav', 'hasLogo', 'hasContactLink'];
    navElements.forEach(element => {
      const brandsWithElement = brands.filter(brand => 
        navigationData[brand] && navigationData[brand][element]
      );
      
      if (brandsWithElement.length !== brands.length) {
        test.details.push(`Inconsistent ${element}: ${brandsWithElement.join(', ')} have it`);
      }
    });
    
    // Check for reasonable number of links
    brands.forEach(brand => {
      if (navigationData[brand] && navigationData[brand].linkCount < 3) {
        test.details.push(`${brand} has very few navigation links (${navigationData[brand].linkCount})`);
      }
    });
    
    if (test.details.length > 0) {
      test.status = 'WARN';
      test.message = `Found ${test.details.length} navigation consistency issues`;
    } else {
      test.message = 'Navigation consistency test passed';
    }
    
  } catch (error) {
    test.status = 'FAIL';
    test.message = `Navigation consistency test failed: ${error.message}`;
  }
  
  return test;
}

function testFormFunctionality() {
  const test = { status: 'PASS', message: '', details: [] };
  
  try {
    const brands = ['lifetime', 'cc', 'aih'];
    let totalForms = 0;
    let formsWithIssues = 0;
    
    brands.forEach(brand => {
      const indexPath = path.join(DIST_DIR, brand, 'index.html');
      
      if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, 'utf8');
        
        // Find forms
        const formMatches = content.match(/<form[^>]*>/g) || [];
        totalForms += formMatches.length;
        
        formMatches.forEach(form => {
          // Check for required form attributes
          if (!form.includes('action=')) {
            test.details.push(`${brand}: Form missing action attribute`);
            formsWithIssues++;
          }
          
          if (!form.includes('method=')) {
            test.details.push(`${brand}: Form missing method attribute`);
            formsWithIssues++;
          }
        });
        
        // Check for form inputs
        const inputMatches = content.match(/<input[^>]*>/g) || [];
        const requiredInputs = inputMatches.filter(input => input.includes('required'));
        
        if (formMatches.length > 0 && requiredInputs.length === 0) {
          test.details.push(`${brand}: Forms have no required fields`);
        }
      }
    });
    
    if (formsWithIssues > 0) {
      test.status = 'WARN';
      test.message = `Found issues in ${formsWithIssues} of ${totalForms} forms`;
    } else if (totalForms === 0) {
      test.status = 'SKIP';
      test.message = 'No forms found to test';
    } else {
      test.message = `Form functionality test passed for ${totalForms} forms`;
    }
    
  } catch (error) {
    test.status = 'FAIL';
    test.message = `Form functionality test failed: ${error.message}`;
  }
  
  return test;
}

function testResponsiveLayout() {
  const test = { status: 'PASS', message: '', details: [] };
  
  try {
    const cssPath = path.join(DIST_DIR, 'assets', 'css', 'site.css');
    
    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      
      // Check for responsive design indicators
      const responsiveFeatures = {
        mediaQueries: (cssContent.match(/@media/g) || []).length,
        flexbox: cssContent.includes('display: flex') || cssContent.includes('display:flex'),
        grid: cssContent.includes('display: grid') || cssContent.includes('display:grid'),
        viewport: cssContent.includes('viewport') || cssContent.includes('vw') || cssContent.includes('vh'),
        maxWidth: cssContent.includes('max-width') || cssContent.includes('max-width')
      };
      
      if (responsiveFeatures.mediaQueries === 0) {
        test.details.push('No media queries found - layout may not be responsive');
      }
      
      if (!responsiveFeatures.flexbox && !responsiveFeatures.grid) {
        test.details.push('No modern layout methods (flexbox/grid) detected');
      }
      
      test.details.push(`Media queries: ${responsiveFeatures.mediaQueries}`);
      test.details.push(`Modern layout: ${responsiveFeatures.flexbox || responsiveFeatures.grid ? 'Yes' : 'No'}`);
      
      if (test.details.some(detail => detail.includes('may not be'))) {
        test.status = 'WARN';
        test.message = 'Responsive layout concerns detected';
      } else {
        test.message = 'Responsive layout test passed';
      }
    } else {
      test.status = 'FAIL';
      test.message = 'CSS file not found for responsive layout test';
    }
    
  } catch (error) {
    test.status = 'FAIL';
    test.message = `Responsive layout test failed: ${error.message}`;
  }
  
  return test;
}

function testSEOMetadata() {
  const test = { status: 'PASS', message: '', details: [] };
  
  try {
    const brands = ['lifetime', 'cc', 'aih'];
    let totalPages = 0;
    let pagesWithIssues = 0;
    
    brands.forEach(brand => {
      const indexPath = path.join(DIST_DIR, brand, 'index.html');
      
      if (fs.existsSync(indexPath)) {
        totalPages++;
        const content = fs.readFileSync(indexPath, 'utf8');
        
        const seoElements = {
          title: content.includes('<title>'),
          description: content.includes('name="description"'),
          canonical: content.includes('rel="canonical"'),
          openGraph: content.includes('property="og:'),
          twitterCard: content.includes('name="twitter:'),
          viewport: content.includes('name="viewport"')
        };
        
        const missingElements = Object.entries(seoElements)
          .filter(([key, present]) => !present)
          .map(([key]) => key);
        
        if (missingElements.length > 0) {
          test.details.push(`${brand}: Missing ${missingElements.join(', ')}`);
          pagesWithIssues++;
        }
        
        // Check title length
        const titleMatch = content.match(/<title>([^<]+)<\/title>/);
        if (titleMatch) {
          const titleLength = titleMatch[1].trim().length;
          if (titleLength < 10 || titleLength > 60) {
            test.details.push(`${brand}: Title length suboptimal (${titleLength} chars)`);
          }
        }
      }
    });
    
    if (pagesWithIssues > 0) {
      test.status = 'WARN';
      test.message = `SEO issues found on ${pagesWithIssues} of ${totalPages} pages`;
    } else {
      test.message = `SEO metadata test passed for ${totalPages} pages`;
    }
    
  } catch (error) {
    test.status = 'FAIL';
    test.message = `SEO metadata test failed: ${error.message}`;
  }
  
  return test;
}

function testAccessibilityFeatures() {
  const test = { status: 'PASS', message: '', details: [] };
  
  try {
    const brands = ['lifetime', 'cc', 'aih'];
    let totalPages = 0;
    let accessibilityIssues = 0;
    
    brands.forEach(brand => {
      const indexPath = path.join(DIST_DIR, brand, 'index.html');
      
      if (fs.existsSync(indexPath)) {
        totalPages++;
        const content = fs.readFileSync(indexPath, 'utf8');
        
        // Check for accessibility features
        const a11yFeatures = {
          langAttribute: content.includes('lang='),
          altText: !content.includes('<img') || content.includes('alt='),
          skipLinks: content.includes('skip') || content.includes('Skip'),
          headingStructure: content.includes('<h1') && content.includes('<h2'),
          ariaLabels: content.includes('aria-label') || content.includes('aria-labelledby')
        };
        
        const missingFeatures = Object.entries(a11yFeatures)
          .filter(([key, present]) => !present)
          .map(([key]) => key);
        
        if (missingFeatures.length > 0) {
          test.details.push(`${brand}: Missing ${missingFeatures.join(', ')}`);
          accessibilityIssues += missingFeatures.length;
        }
      }
    });
    
    if (accessibilityIssues > 0) {
      test.status = 'WARN';
      test.message = `Found ${accessibilityIssues} accessibility issues across ${totalPages} pages`;
    } else {
      test.message = `Accessibility features test passed for ${totalPages} pages`;
    }
    
  } catch (error) {
    test.status = 'FAIL';
    test.message = `Accessibility features test failed: ${error.message}`;
  }
  
  return test;
}

// Run regression tests if called directly
if (require.main === module) {
  runRegressionTests();
}

module.exports = { runRegressionTests };

