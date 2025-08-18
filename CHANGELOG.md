# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- **CRITICAL:** Asset pipeline - images and videos now load properly instead of returning HTML
- `_redirects` file SPA fallback was hijacking all asset requests
- Added explicit asset path rules before SPA fallback to serve files correctly
- Assets paths `/assets/*`, `/lifetime/assets/*`, `/cc/assets/*`, `/aih/assets/*` now serve actual files
- Missing `lifetime-logo.png` and `lifetime-hero.webp` assets added to source

### Added
- CHANGELOG.md to track all website changes
- Strict change-control workflow with feature branches and PR reviews
- Comprehensive footer structure with state service area links
- Complete navigation menu with all required pages
- Dedicated Contact page with two-column layout and proper form
- Dedicated About page with company story, values, and trust elements
- Dedicated Financing page with programs, calculator, and FAQs
- Compact hero styling for interior pages
- Responsive design for all new page layouts
- Form validation and accessibility improvements
- Honeypot spam protection for contact forms

### Changed
- Page title to "Expert Home Solutions – Powered by Lifetime"
- Navigation structure to include Home, Services, Projects, Showroom, Financing, About, Service Areas, Contact
- Footer layout to professional 4-column structure with organized links
- Phone number consistently updated to (833) 941-6888 throughout
- Business unit logo spacing increased from 15px to 25px gap
- Contact page button text to "Send Message"
- Interior pages to use compact hero (40vh) instead of full height

### Fixed
- Navbar structure issue that was preventing proper page layout
- Hero section positioning with proper CSS margins
- Duplicate footer issue - merged into single horizontal footer
- Copyright year bug - now shows "© 2025" instead of "© NaN"
- Page-specific H1 tags for Contact, About, and Financing pages
- Form accessibility with proper labels, for/id attributes, and aria-required
- Unique content for Contact, About, and Financing (no more home template reuse)

### Removed
- Duplicate footer from homepage template
- Generic "Our Professional Services" block from Contact, About, and Financing pages

## [1.0.0] - 2025-08-16

### Added
- Initial website structure with Eleventy
- Basic navigation and layout system
- Service pages for radon testing, mitigation, duct sealing, and floor coatings
- Multi-brand support for Lifetime, Closet Concepts, and America In-Home

