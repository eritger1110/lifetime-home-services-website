# Guardrails & Safety Measures

This document outlines the comprehensive guardrails and safety measures implemented to protect the multi-brand website infrastructure and ensure reliable deployments.

## 🛡️ Overview

The guardrails system provides multiple layers of protection:

1. **Pre-commit Validation** - Code quality checks before commits
2. **Build Validation** - Ensures build output integrity
3. **Deployment Safety** - Production readiness verification
4. **Automated Quality Gates** - CI/CD pipeline protection
5. **Manual Validation Scripts** - On-demand safety checks

## 🔧 Validation Scripts

### Pre-commit Checks (`scripts/pre-commit-checks.js`)

Validates code quality before commits to prevent common issues:

- **Template Validation**: Checks for malformed image references, hardcoded URLs, missing alt attributes
- **Config File Validation**: Ensures required scripts and configurations are present
- **Asset Reference Validation**: Verifies referenced assets exist
- **Brand Consistency**: Ensures all brands have required files

**Usage:**
```bash
npm run validate:pre-commit
```

### Build Validation (`scripts/validate-build.js`)

Ensures build output meets requirements:

- **Critical Files**: Verifies presence of index.html, _redirects, sitemaps, robots.txt
- **Brand Directories**: Checks all brand-specific files exist
- **Asset Structure**: Validates asset organization
- **Redirect Configuration**: Ensures SPA routing and redirects work
- **SEO Files**: Validates sitemap and robots.txt format

**Usage:**
```bash
npm run validate:build
```

### Deployment Safety (`scripts/deployment-safety.js`)

Production readiness verification:

- **Critical File Presence**: Ensures all required files exist
- **Redirect Configuration**: Validates Netlify routing rules
- **Asset Integrity**: Checks asset availability across brands
- **SEO Compliance**: Verifies sitemap and robots.txt quality
- **Security Headers**: Checks for security configurations
- **Build Size**: Monitors build size and warns of issues
- **External Dependencies**: Identifies external service dependencies

**Usage:**
```bash
npm run validate:deployment
```

## 🚀 Safe Build Process

### Standard Build
```bash
npm run build:all      # Build all brands
npm run build:root     # Generate root files and sitemaps
```

### Safe Build (with validation)
```bash
npm run build:safe     # Pre-validation + build + post-validation
```

### Complete Validation
```bash
npm run validate:all   # Run all validation scripts
```

## 🔄 Automated Quality Gates

### GitHub Actions Workflow (`.github/workflows/quality-gates.yml`)

Automated checks on every pull request and push:

1. **Pre-commit Validation**
   - Code quality checks
   - Template validation
   - Asset reference verification

2. **Build Validation**
   - Multi-brand build test
   - Output structure verification
   - Critical file presence check

3. **Security Scan**
   - npm audit for vulnerabilities
   - Sensitive file detection
   - Security best practices

4. **Accessibility Check**
   - Axe-core accessibility testing
   - WCAG compliance verification
   - Screen reader compatibility

5. **Performance Check**
   - Build size monitoring
   - Large file detection
   - Performance optimization alerts

6. **Deployment Safety** (main branch only)
   - Production readiness verification
   - Complete safety checklist

## 📋 Quality Gate Criteria

### Blocking Issues (Prevent Merge/Deploy)
- ❌ Missing critical files (index.html, _redirects)
- ❌ Invalid redirect configuration
- ❌ Missing brand directories or core files
- ❌ Malformed sitemaps or robots.txt
- ❌ Security vulnerabilities (high/critical)
- ❌ Build failures

### Warning Issues (Allow with Caution)
- ⚠️ Large build size (>100MB)
- ⚠️ Missing asset references
- ⚠️ Accessibility issues
- ⚠️ Performance concerns
- ⚠️ Missing security headers

## 🔍 Manual Validation Checklist

### Before Committing
- [ ] Run `npm run validate:pre-commit`
- [ ] Fix any errors or warnings
- [ ] Test changes locally
- [ ] Verify asset references work

### Before Merging PR
- [ ] All GitHub Actions checks pass
- [ ] Deploy Preview tested and working
- [ ] No blocking validation errors
- [ ] Code review completed

### Before Production Deploy
- [ ] Run `npm run validate:deployment`
- [ ] All safety checks pass
- [ ] Critical functionality tested
- [ ] Rollback plan prepared

## 🚨 Emergency Procedures

### If Validation Fails
1. **Identify the issue** from validation reports
2. **Fix the root cause** (don't bypass checks)
3. **Re-run validation** to confirm fix
4. **Test thoroughly** before proceeding

### If Build Breaks
1. **Check validation reports** for specific errors
2. **Verify all required files** are present
3. **Check redirect configuration** in _redirects
4. **Validate brand-specific files** exist
5. **Test locally** before pushing fixes

### If Deploy Fails
1. **Run deployment safety checks** immediately
2. **Check Netlify build logs** for errors
3. **Verify asset accessibility** on all domains
4. **Test critical user paths** manually
5. **Rollback if necessary** using previous deploy

## 📊 Monitoring & Reporting

### Validation Reports
All validation scripts generate JSON reports:
- `pre-commit-report.json`
- `build-validation-report.json`
- `deployment-safety-report.json`

### GitHub Actions Artifacts
- Validation reports uploaded as artifacts
- Build output preserved for debugging
- Accessibility and performance reports

### Key Metrics to Monitor
- Build success rate
- Validation pass rate
- Deploy frequency
- Error trends
- Performance metrics

## 🔧 Customization

### Adding New Checks
1. **Extend validation classes** in respective scripts
2. **Add new check methods** following existing patterns
3. **Update validation criteria** in documentation
4. **Test thoroughly** before deploying

### Modifying Thresholds
- **Build size limits** in `deployment-safety.js`
- **Performance budgets** in GitHub Actions
- **Security audit levels** in workflow
- **Accessibility standards** in axe configuration

## 🎯 Best Practices

### Development Workflow
1. **Run pre-commit checks** before every commit
2. **Use safe build process** for testing
3. **Monitor validation reports** regularly
4. **Address warnings promptly** before they become errors

### Deployment Workflow
1. **Always validate** before deploying
2. **Test Deploy Previews** thoroughly
3. **Monitor post-deploy** for issues
4. **Keep rollback plans** ready

### Maintenance
1. **Review validation rules** quarterly
2. **Update security checks** regularly
3. **Monitor performance trends** monthly
4. **Refine thresholds** based on experience

## 📞 Support

For issues with guardrails or validation:
1. Check validation reports for specific errors
2. Review this documentation for solutions
3. Test fixes locally before pushing
4. Escalate critical issues immediately

Remember: **Guardrails are there to help, not hinder. They prevent costly mistakes and ensure reliable deployments.**

