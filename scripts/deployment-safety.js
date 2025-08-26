// scripts/deployment-safety.js
const fs = require('fs');
const path = require('path');
const https = require('https');

/**
 * Deployment Safety Checks - Guardrails for Production Deployment
 * Validates deployment readiness and safety before going live
 */

class DeploymentSafetyChecker {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.checks = [];
    this.distDir = path.join(process.cwd(), 'dist');
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

  addCheck(name, status, details = '') {
    this.checks.push({ name, status, details });
    this.log(`${name}: ${status}${details ? ` - ${details}` : ''}`, status === 'PASS' ? 'info' : 'error');
  }

  async checkCriticalFiles() {
    const criticalFiles = [
      { path: 'index.html', description: 'Root index file' },
      { path: '_redirects', description: 'Netlify redirects' },
      { path: 'lifetime/index.html', description: 'Lifetime homepage' },
      { path: 'lifetime/sitemap.xml', description: 'Lifetime sitemap' },
      { path: 'lifetime/robots.txt', description: 'Lifetime robots.txt' }
    ];

    let allPresent = true;

    for (const file of criticalFiles) {
      const filePath = path.join(this.distDir, file.path);
      if (fs.existsSync(filePath)) {
        this.addCheck(`Critical File: ${file.description}`, 'PASS');
      } else {
        this.addCheck(`Critical File: ${file.description}`, 'FAIL', `Missing: ${file.path}`);
        allPresent = false;
      }
    }

    return allPresent;
  }

  checkRedirectConfiguration() {
    const redirectsPath = path.join(this.distDir, '_redirects');
    
    if (!fs.existsSync(redirectsPath)) {
      this.addCheck('Redirect Configuration', 'FAIL', '_redirects file missing');
      return false;
    }

    try {
      const content = fs.readFileSync(redirectsPath, 'utf8');
      const lines = content.split('\n').filter(line => line.trim());
      
      // Check for root redirect
      const hasRootRedirect = lines.some(line => line.includes('/ /lifetime/'));
      if (!hasRootRedirect) {
        this.addCheck('Root Redirect', 'FAIL', 'Missing / -> /lifetime/ redirect');
        return false;
      }

      // Check for SPA fallback
      const hasSpaFallback = lines.some(line => line.includes('/*') && line.includes('200'));
      if (!hasSpaFallback) {
        this.addCheck('SPA Fallback', 'FAIL', 'Missing /* fallback for SPA routing');
        return false;
      }

      this.addCheck('Redirect Configuration', 'PASS', `${lines.length} redirect rules configured`);
      return true;

    } catch (error) {
      this.addCheck('Redirect Configuration', 'FAIL', `Error reading _redirects: ${error.message}`);
      return false;
    }
  }

  checkAssetIntegrity() {
    const brands = ['lifetime', 'cc', 'aih'];
    let allAssetsValid = true;

    brands.forEach(brand => {
      const brandDir = path.join(this.distDir, brand);
      
      if (!fs.existsSync(brandDir)) {
        this.addCheck(`${brand.toUpperCase()} Assets`, 'FAIL', 'Brand directory missing');
        allAssetsValid = false;
        return;
      }

      // Check for assets directory
      const assetsDir = path.join(brandDir, 'assets');
      if (fs.existsSync(assetsDir)) {
        const assetFiles = this.findFiles(assetsDir, '.*');
        this.addCheck(`${brand.toUpperCase()} Assets`, 'PASS', `${assetFiles.length} asset files found`);
      } else {
        this.addCheck(`${brand.toUpperCase()} Assets`, 'WARN', 'No assets directory found');
      }
    });

    return allAssetsValid;
  }

  checkSEOFiles() {
    const brands = ['lifetime', 'cc', 'aih'];
    let allSeoValid = true;

    brands.forEach(brand => {
      const brandDir = path.join(this.distDir, brand);
      
      // Check sitemap
      const sitemapPath = path.join(brandDir, 'sitemap.xml');
      if (fs.existsSync(sitemapPath)) {
        try {
          const content = fs.readFileSync(sitemapPath, 'utf8');
          const urlCount = (content.match(/<url>/g) || []).length;
          this.addCheck(`${brand.toUpperCase()} Sitemap`, 'PASS', `${urlCount} URLs indexed`);
        } catch (error) {
          this.addCheck(`${brand.toUpperCase()} Sitemap`, 'FAIL', 'Invalid sitemap format');
          allSeoValid = false;
        }
      } else {
        this.addCheck(`${brand.toUpperCase()} Sitemap`, 'FAIL', 'Sitemap missing');
        allSeoValid = false;
      }

      // Check robots.txt
      const robotsPath = path.join(brandDir, 'robots.txt');
      if (fs.existsSync(robotsPath)) {
        this.addCheck(`${brand.toUpperCase()} Robots.txt`, 'PASS');
      } else {
        this.addCheck(`${brand.toUpperCase()} Robots.txt`, 'FAIL', 'robots.txt missing');
        allSeoValid = false;
      }
    });

    return allSeoValid;
  }

  checkSecurityHeaders() {
    const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
    
    if (!fs.existsSync(netlifyTomlPath)) {
      this.addCheck('Security Headers', 'WARN', 'netlify.toml not found');
      return false;
    }

    try {
      const content = fs.readFileSync(netlifyTomlPath, 'utf8');
      
      // Check for security headers
      const hasHeaders = content.includes('[[headers]]');
      if (hasHeaders) {
        this.addCheck('Security Headers', 'PASS', 'Header configuration found');
        return true;
      } else {
        this.addCheck('Security Headers', 'WARN', 'No header configuration found');
        return false;
      }

    } catch (error) {
      this.addCheck('Security Headers', 'FAIL', `Error reading netlify.toml: ${error.message}`);
      return false;
    }
  }

  checkBuildSize() {
    if (!fs.existsSync(this.distDir)) {
      this.addCheck('Build Size', 'FAIL', 'dist/ directory not found');
      return false;
    }

    const totalSize = this.calculateDirectorySize(this.distDir);
    const sizeMB = (totalSize / 1024 / 1024).toFixed(2);

    // Warn if build is unusually large (>100MB)
    if (totalSize > 100 * 1024 * 1024) {
      this.addCheck('Build Size', 'WARN', `Large build size: ${sizeMB}MB`);
    } else {
      this.addCheck('Build Size', 'PASS', `${sizeMB}MB`);
    }

    return true;
  }

  checkEnvironmentVariables() {
    const requiredEnvVars = [
      'NODE_ENV'
    ];

    let allPresent = true;

    requiredEnvVars.forEach(envVar => {
      if (process.env[envVar]) {
        this.addCheck(`Environment Variable: ${envVar}`, 'PASS', process.env[envVar]);
      } else {
        this.addCheck(`Environment Variable: ${envVar}`, 'WARN', 'Not set');
      }
    });

    return allPresent;
  }

  async checkExternalDependencies() {
    // Check if any external services are referenced
    const templateFiles = this.findFiles(path.join(process.cwd(), 'src'), '.njk');
    const externalServices = new Set();

    templateFiles.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Look for external service URLs
        const urls = content.match(/https?:\/\/[^"\'\s]+/g);
        if (urls) {
          urls.forEach(url => {
            const domain = new URL(url).hostname;
            if (!domain.includes('lifetimehomeservices.com') && 
                !domain.includes('closetconcepts.com') && 
                !domain.includes('americainhome.com')) {
              externalServices.add(domain);
            }
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    });

    if (externalServices.size > 0) {
      this.addCheck('External Dependencies', 'INFO', `${externalServices.size} external services referenced`);
    } else {
      this.addCheck('External Dependencies', 'PASS', 'No external dependencies found');
    }

    return true;
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
      } else if (extension === '.*' || item.endsWith(extension)) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  calculateDirectorySize(dir) {
    let totalSize = 0;
    
    if (!fs.existsSync(dir)) {
      return 0;
    }

    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        totalSize += this.calculateDirectorySize(fullPath);
      } else {
        totalSize += stat.size;
      }
    });
    
    return totalSize;
  }

  generateReport() {
    const passedChecks = this.checks.filter(check => check.status === 'PASS').length;
    const failedChecks = this.checks.filter(check => check.status === 'FAIL').length;
    const warningChecks = this.checks.filter(check => check.status === 'WARN').length;

    const report = {
      timestamp: new Date().toISOString(),
      status: failedChecks === 0 ? 'READY' : 'NOT_READY',
      summary: {
        total_checks: this.checks.length,
        passed: passedChecks,
        failed: failedChecks,
        warnings: warningChecks,
        errors: this.errors.length
      },
      checks: this.checks,
      errors: this.errors,
      warnings: this.warnings,
      deployment_recommendation: failedChecks === 0 ? 'PROCEED' : 'BLOCK'
    };

    // Save report to file
    const reportPath = path.join(process.cwd(), 'deployment-safety-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    return report;
  }

  async runAllChecks() {
    this.log('🛡️ Starting deployment safety checks...');

    await this.checkCriticalFiles();
    this.checkRedirectConfiguration();
    this.checkAssetIntegrity();
    this.checkSEOFiles();
    this.checkSecurityHeaders();
    this.checkBuildSize();
    this.checkEnvironmentVariables();
    await this.checkExternalDependencies();

    const report = this.generateReport();

    this.log(`\n📊 Deployment Safety Summary:`);
    this.log(`Status: ${report.status}`);
    this.log(`Total Checks: ${report.summary.total_checks}`);
    this.log(`Passed: ${report.summary.passed}`);
    this.log(`Failed: ${report.summary.failed}`);
    this.log(`Warnings: ${report.summary.warnings}`);
    this.log(`Recommendation: ${report.deployment_recommendation}`);

    if (report.status === 'READY') {
      this.log('\n🎉 Deployment safety checks PASSED! Ready for production deployment.');
    } else {
      this.log('\n🚨 Deployment safety checks FAILED! Please fix critical issues before deploying.');
    }

    return report;
  }
}

// Run checks if called directly
if (require.main === module) {
  const checker = new DeploymentSafetyChecker();
  checker.runAllChecks().then(report => {
    process.exit(report.status === 'READY' ? 0 : 1);
  });
}

module.exports = { DeploymentSafetyChecker };

