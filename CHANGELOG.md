# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added - Section B: LHS Home Hero & Multi-Unit Navigation
- **CRITICAL**: Netlify configuration with `build:all` command to deploy all three units
- **Multi-Unit Build**: LHS, AIH, and CC homepages now all accessible
- **Asset Structure**: Updated LHS hero to use organized `/assets/images/lhs/lifetime-hero-house.webp`
- **Navigation Routing**: Fixed brand switcher links to proper unit routes

### Fixed
- **CRITICAL**: AIH homepage navigation (was 404, now working)
- **CRITICAL**: CC homepage navigation (was 404, now working)  
- **Navigation incomplete** - Added missing 3 navigation items (Home, Projects, Showroom)
- All 8 required navigation items now present: Home, Services, Projects, Showroom, Financing, About, Service Areas, Contact
- Adjusted navigation spacing from 30px to 20px gap to accommodate 8 items without wrapping
- **CRITICAL:** Asset pipeline - images and videos now load properly instead of returning HTML
- `_redirects` file SPA fallback was hijacking all asset requests
- Added explicit asset path rules before SPA fallback to serve files correctly
- Assets paths `/assets/*`, `/lifetime/assets/*`, `/cc/assets/*`, `/aih/assets/*` now serve actual files
- Missing `lifetime-logo.png` and `lifetime-hero.webp` assets added to source
- LHS navigation links updated to root paths for proper routing
- **Assets & File Conventions Implementation** - Systematic asset management with proper folder structure and naming conventions
  - Created organized folder structure: `/assets/images/lhs`, `/assets/images/cc`, `/assets/images/aih`, `/assets/images/common`, `/assets/video`, `/assets/data`
  - Implemented lowercase, hyphenated naming convention for all assets (e.g., `lifetime-hero-house.webp`, `closet-concepts-company-video-v2.mp4`)
  - Created comprehensive site manifest JSON at `/assets/data/site.json` with asset paths and configuration for all three units
  - Moved existing hero background to proper LHS folder structure with correct naming
  - Created placeholder video files for testing asset pipeline functionality
  - Confirmed Netlify `_redirects` file properly serves assets as files (not HTML) with explicit asset path rules
  - Verified all three test URLs return real files: `/assets/images/lhs/lifetime-hero-house.webp`, `/assets/video/closet-concepts-company-video-v2.mp4`, `/assets/video/america-in-home-web-banner-rev1.mp4`
  - Established foundation for consistent asset management across all website sections
- **LHS Hero Enhancement** - Professional hero background and comprehensive branding for Lifetime Home Services
  - Generated and implemented professional hero background image showing modern home with service van
  - Updated hero section CSS to use new background with proper overlay for text readability
  - Enhanced "LIFETIME HOME SERVICES" brand watermarks in services section (8rem diagonal text)
  - Maintained existing tagline "Trusted Solutions. Lifetime Results." with improved visual presentation
  - Professional imagery conveys trust, quality, and reliability for home improvement services
  - Hero background uses landscape aspect ratio optimized for website display
  - Clean, crystal clear photography style without watermarks or text overlays
- **AIH Homepage Enhancement** - Complete America In-Home homepage with YouTube hero video and smart home technology focus
  - Added specified YouTube video (https://youtu.be/NXCMKyYHl-o) to hero section with autoplay and clean overlay
  - Implemented AIH-specific navigation with 8 menu items (Home, Services, Gallery, Packages, About, Showroom, Financing, Contact)
  - Added brand watermarks ("AMERICA IN-HOME" background branding)
  - Enhanced footer with AIH-specific messaging and division attribution
  - Comprehensive smart home content: Control4 systems, WiFi setup, home theater, security solutions
  - Professional service packages with pricing (Smart Home Starter, Ultimate Home Theater, Complete Security Suite)
  - Customer testimonials and FAQ section
  - Free consultation form and contact methods
- Projects page with portfolio of completed work and before/after galleries
- Showroom page with location, hours, and visit scheduling information
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

