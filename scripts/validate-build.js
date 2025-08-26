// scripts/validate-build.js
const fs = require('fs');
const path = require('path');

/**
 * Build Validation Script - Guardrails for Multi-Brand Website
 * Validates build output to ensure all critical files and structures are present
 */

class BuildValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.distDir = path.join(process.cwd(), 'dist');
    this.brands = ['lifetime', 'cc', 'aih'];
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

  validateDistExists() {
    if (!fs.existsSync(this.distDir)) {
      this.addError('dist/ directory does not exist');
      return false;
    }
    this.log('dist/ directory exists');
    return true;
  }

  validateRootFiles() {
    const requiredFiles = [
      'index.html',
      '_redirects',
      'sitemap.xml',
      'robots.txt'
    ];

    requiredFiles.forEach(file => {
      const filePath = path.join(this.distDir, file);
      if (!fs.existsSync(filePath)) {
        this.addError(`Missing root file: ${file}`);
      } else {
        this.log(`Root file exists: ${file}`);
      }
    });
  }

  validateBrandDirectories() {
    this.brands.forEach(brand => {
      const brandDir = path.join(this.distDir, brand);
      
      if (!fs.existsSync(brandDir)) {
        this.addError(`Missing brand directory: ${brand}/`);
        return;
      }

      this.log(`Brand directory exists: ${brand}/`);

      // Check for required brand files
      const requiredBrandFiles = [
        'index.html',
        'sitemap.xml',
        'robots.txt'
      ];

      requiredBrandFiles.forEach(file => {
        const filePath = path.join(brandDir, file);
        if (!fs.existsSync(filePath)) {
          this.addError(`Missing ${brand} file: ${file}`);
        } else {
          this.log(`${brand} file exists: ${file}`);
        }
      });
    });
  }

  validateAssetStructure() {
    this.brands.forEach(brand => {
      const assetsDir = path.join(this.distDir, brand, 'assets');
      
      if (!fs.existsSync(assetsDir)) {
        this.addWarning(`Missing assets directory for ${brand}`);
        return;
      }

      this.log(`Assets directory exists: ${brand}/assets/`);

      // Check for common asset types
      const assetTypes = ['css', 'js', 'images'];
      assetTypes.forEach(type => {
        const typeDir = path.join(assetsDir, type);
        if (fs.existsSync(typeDir)) {
          this.log(`Asset type directory exists: ${brand}/assets/${type}/`);
        }
      });
    });
  }

  validateRedirects() {
    const redirectsPath = path.join(this.distDir, '_redirects');
    
    if (!fs.existsSync(redirectsPath)) {
      this.addError('_redirects file missing');
      return;
    }

    try {
      const redirectsContent = fs.readFileSync(redirectsPath, 'utf8');
      
      // Check for SPA fallback
      if (!redirectsContent.includes('/*') || !redirectsContent.includes('/lifetime/')) {
        this.addWarning('_redirects may be missing SPA fallback rules');
      } else {
        this.log('_redirects contains SPA fallback rules');
      }

      // Check for root redirect
      if (!redirectsContent.includes('/ /lifetime/')) {
        this.addWarning('_redirects may be missing root redirect');
      } else {
        this.log('_redirects contains root redirect');
      }

    } catch (error) {
      this.addError(`Error reading _redirects: ${error.message}`);
    }
  }

  validateSitemaps() {
    this.brands.forEach(brand => {
      const sitemapPath = path.join(this.distDir, brand, 'sitemap.xml');
      
      if (!fs.existsSync(sitemapPath)) {
        this.addError(`Missing sitemap for ${brand}`);
        return;
      }

      try {
        const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
        
        // Basic XML validation
        if (!sitemapContent.includes('<?xml') || !sitemapContent.includes('<urlset')) {
          this.addError(`Invalid sitemap format for ${brand}`);
        } else {
          this.log(`Valid sitemap format for ${brand}`);
        }

        // Check for URLs
        const urlCount = (sitemapContent.match(/<url>/g) || []).length;
        if (urlCount === 0) {
          this.addWarning(`No URLs found in ${brand} sitemap`);
        } else {
          this.log(`${brand} sitemap contains ${urlCount} URLs`);
        }

      } catch (error) {
        this.addError(`Error reading ${brand} sitemap: ${error.message}`);
      }
    });
  }

  validateRobotsTxt() {
    this.brands.forEach(brand => {
      const robotsPath = path.join(this.distDir, brand, 'robots.txt');
      
      if (!fs.existsSync(robotsPath)) {
        this.addError(`Missing robots.txt for ${brand}`);
        return;
      }

      try {
        const robotsContent = fs.readFileSync(robotsPath, 'utf8');
        
        // Check for sitemap reference
        if (!robotsContent.includes('Sitemap:')) {
          this.addWarning(`${brand} robots.txt missing sitemap reference`);
        } else {
          this.log(`${brand} robots.txt contains sitemap reference`);
        }

        // Check for user-agent
        if (!robotsContent.includes('User-agent:')) {
          this.addWarning(`${brand} robots.txt missing user-agent directive`);
        } else {
          this.log(`${brand} robots.txt contains user-agent directive`);
        }

      } catch (error) {
        this.addError(`Error reading ${brand} robots.txt: ${error.message}`);
      }
    });
  }

  validateFilePermissions() {
    // Check that critical files are readable
    const criticalFiles = [
      'index.html',
      '_redirects'
    ];

    criticalFiles.forEach(file => {
      const filePath = path.join(this.distDir, file);
      if (fs.existsSync(filePath)) {
        try {
          fs.accessSync(filePath, fs.constants.R_OK);
          this.log(`File permissions OK: ${file}`);
        } catch (error) {
          this.addError(`File permission error for ${file}: ${error.message}`);
        }
      }
    });
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.errors.length === 0 ? 'PASS' : 'FAIL',
      summary: {
        errors: this.errors.length,
        warnings: this.warnings.length,
        brands_validated: this.brands.length
      },
      errors: this.errors,
      warnings: this.warnings
    };

    // Save report to file
    const reportPath = path.join(process.cwd(), 'build-validation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    return report;
  }

  validate() {
    this.log('🔍 Starting build validation...');

    if (!this.validateDistExists()) {
      return this.generateReport();
    }

    this.validateRootFiles();
    this.validateBrandDirectories();
    this.validateAssetStructure();
    this.validateRedirects();
    this.validateSitemaps();
    this.validateRobotsTxt();
    this.validateFilePermissions();

    const report = this.generateReport();

    this.log(`\n📊 Validation Summary:`);
    this.log(`Status: ${report.status}`);
    this.log(`Errors: ${report.summary.errors}`);
    this.log(`Warnings: ${report.summary.warnings}`);
    this.log(`Brands Validated: ${report.summary.brands_validated}`);

    if (report.status === 'PASS') {
      this.log('\n🎉 Build validation PASSED! All critical checks successful.');
    } else {
      this.log('\n💥 Build validation FAILED! Please fix errors before deployment.');
    }

    return report;
  }
}

// Run validation if called directly
if (require.main === module) {
  const validator = new BuildValidator();
  const report = validator.validate();
  
  // Exit with error code if validation failed
  process.exit(report.status === 'PASS' ? 0 : 1);
}

module.exports = { BuildValidator };

