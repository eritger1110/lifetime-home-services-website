// scripts/pre-commit-checks.js
const fs = require('fs');
const path = require('path');

/**
 * Pre-commit Validation Script - Guardrails for Code Quality
 * Validates code changes before commit to prevent common issues
 */

class PreCommitValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.srcDir = path.join(process.cwd(), 'src');
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  addError(message) {
    this.errors.push(message);
    this.log(message, 'error');
  }

  addWarning(message) {
    this.warnings.push(message);
    this.log(message, 'warning');
  }

  validateTemplateFiles() {
    const templateFiles = this.findFiles(this.srcDir, '.njk');
    
    templateFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common template issues
        this.validateTemplateContent(file, content);
        
      } catch (error) {
        this.addError(`Error reading template file ${file}: ${error.message}`);
      }
    });
  }

  validateTemplateContent(filePath, content) {
    const fileName = path.basename(filePath);
    
    // Check for broken image references
    const imageRefs = content.match(/src=["\']([^"\']*)["\']|url\(["\']?([^"\')\s]*)["\']?\)/g);
    if (imageRefs) {
      imageRefs.forEach(ref => {
        // Check for malformed references (just extensions)
        if (ref.match(/\.(jpg|jpeg|png|gif|svg|webp)["\']/i) && !ref.includes('/')) {
          this.addWarning(`Possible malformed image reference in ${fileName}: ${ref}`);
        }
      });
    }

    // Check for hardcoded URLs that should be relative
    const hardcodedUrls = content.match(/https?:\/\/[^"\'\s]+/g);
    if (hardcodedUrls) {
      hardcodedUrls.forEach(url => {
        if (url.includes('lifetimehomeservices.com') || url.includes('closetconcepts.com') || url.includes('americainhome.com')) {
          this.addWarning(`Hardcoded domain URL in ${fileName}: ${url}`);
        }
      });
    }

    // Check for missing alt attributes on images
    const imgTags = content.match(/<img[^>]*>/g);
    if (imgTags) {
      imgTags.forEach(tag => {
        if (!tag.includes('alt=')) {
          this.addWarning(`Image missing alt attribute in ${fileName}: ${tag.substring(0, 50)}...`);
        }
      });
    }

    // Check for console.log statements
    if (content.includes('console.log')) {
      this.addWarning(`Console.log statement found in ${fileName} - consider removing for production`);
    }

    // Check for TODO/FIXME comments
    const todoComments = content.match(/(?:TODO|FIXME|HACK).*$/gm);
    if (todoComments) {
      todoComments.forEach(comment => {
        this.addWarning(`TODO/FIXME comment in ${fileName}: ${comment.trim()}`);
      });
    }
  }

  validateConfigFiles() {
    const configFiles = [
      'package.json',
      'netlify.toml',
      '.eleventy.js',
      'eleventy.lifetime.js',
      'eleventy.cc.js',
      'eleventy.aih.js'
    ];

    configFiles.forEach(file => {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        this.validateConfigFile(filePath);
      }
    });
  }

  validateConfigFile(filePath) {
    const fileName = path.basename(filePath);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (fileName === 'package.json') {
        const pkg = JSON.parse(content);
        
        // Check for required scripts
        const requiredScripts = ['build', 'build:lifetime'];
        requiredScripts.forEach(script => {
          if (!pkg.scripts || !pkg.scripts[script]) {
            this.addWarning(`Missing required script in package.json: ${script}`);
          }
        });
        
        this.log(`package.json validation passed`);
      }
      
      if (fileName === 'netlify.toml') {
        // Check for build command
        if (!content.includes('command =')) {
          this.addWarning('netlify.toml missing build command');
        }
        
        // Check for redirects
        if (!content.includes('[[redirects]]')) {
          this.addWarning('netlify.toml missing redirect rules');
        }
        
        this.log(`netlify.toml validation passed`);
      }
      
    } catch (error) {
      this.addError(`Error validating ${fileName}: ${error.message}`);
    }
  }

  validateAssetReferences() {
    const templateFiles = this.findFiles(this.srcDir, '.njk');
    const assetDir = path.join(this.srcDir, 'assets');
    
    if (!fs.existsSync(assetDir)) {
      this.addWarning('src/assets directory not found');
      return;
    }

    const existingAssets = this.findFiles(assetDir, '.*');
    const assetNames = existingAssets.map(file => path.basename(file).toLowerCase());
    
    templateFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileName = path.basename(file);
        
        // Find asset references
        const assetRefs = content.match(/\/assets\/[^"\'\s]+/g);
        if (assetRefs) {
          assetRefs.forEach(ref => {
            const assetName = path.basename(ref).toLowerCase();
            if (!assetNames.includes(assetName)) {
              this.addWarning(`Referenced asset not found in ${fileName}: ${ref}`);
            }
          });
        }
        
      } catch (error) {
        this.addError(`Error checking asset references in ${file}: ${error.message}`);
      }
    });
  }

  validateBrandConsistency() {
    const brands = ['lifetime', 'cc', 'aih'];
    
    brands.forEach(brand => {
      const brandDir = path.join(this.srcDir, brand);
      
      if (!fs.existsSync(brandDir)) {
        this.addWarning(`Brand directory not found: src/${brand}/`);
        return;
      }

      // Check for index file
      const indexFile = path.join(brandDir, 'index.njk');
      if (!fs.existsSync(indexFile)) {
        this.addError(`Missing index file for ${brand}: ${brand}/index.njk`);
      } else {
        this.log(`Brand index file exists: ${brand}/index.njk`);
      }
    });
  }

  findFiles(dir, extension) {
    const files = [];
    
    if (!fs.existsSync(dir)) {
      return files;
    }

    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findFiles(fullPath, extension));
      } else if (item.endsWith(extension) || extension === '.*') {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.errors.length === 0 ? 'PASS' : 'FAIL',
      summary: {
        errors: this.errors.length,
        warnings: this.warnings.length
      },
      errors: this.errors,
      warnings: this.warnings
    };

    // Save report to file
    const reportPath = path.join(process.cwd(), 'pre-commit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    return report;
  }

  validate() {
    this.log('🔍 Starting pre-commit validation...');

    this.validateTemplateFiles();
    this.validateConfigFiles();
    this.validateAssetReferences();
    this.validateBrandConsistency();

    const report = this.generateReport();

    this.log(`\n📊 Pre-commit Summary:`);
    this.log(`Status: ${report.status}`);
    this.log(`Errors: ${report.summary.errors}`);
    this.log(`Warnings: ${report.summary.warnings}`);

    if (report.status === 'PASS') {
      this.log('\n🎉 Pre-commit validation PASSED! Code quality checks successful.');
    } else {
      this.log('\n💥 Pre-commit validation FAILED! Please fix errors before committing.');
    }

    return report;
  }
}

// Run validation if called directly
if (require.main === module) {
  const validator = new PreCommitValidator();
  const report = validator.validate();
  
  // Exit with error code if validation failed
  process.exit(report.status === 'PASS' ? 0 : 1);
}

module.exports = { PreCommitValidator };

