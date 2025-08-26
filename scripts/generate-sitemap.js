// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

/**
 * Host-aware sitemap generator for multi-brand website
 * Generates sitemaps for each brand based on their domain
 */

const BRANDS = {
  lifetime: {
    domain: 'lifetimehomeservices.com',
    name: 'Lifetime Home Services',
    path: '/lifetime/',
    pages: [
      '',
      'services/',
      'services/radon-testing/',
      'services/radon-mitigation/',
      'services/duct-sealing/',
      'services/floor-coatings/',
      'service-areas/',
      'service-areas/wi/',
      'service-areas/il/',
      'service-areas/mn/',
      'service-areas/co/',
      'projects/',
      'showroom/',
      'financing/',
      'about/',
      'contact/',
      'thank-you/'
    ]
  },
  cc: {
    domain: 'closetconcepts.com',
    name: 'Closet Concepts',
    path: '/cc/',
    pages: [
      '',
      'solutions/',
      'solutions/reach-in-closets/',
      'solutions/walk-in-closets/',
      'solutions/garage-storage/',
      'solutions/hobby-room/',
      'solutions/home-office/',
      'solutions/laundry-room/',
      'solutions/mudroom/',
      'solutions/walk-in-pantry/',
      'about/',
      'contact/',
      'financing/',
      'thank-you/'
    ]
  },
  aih: {
    domain: 'americainhome.com',
    name: 'America In-Home',
    path: '/aih/',
    pages: [
      '',
      'services/',
      'services/control4-systems/',
      'services/wifi-setup/',
      'services/home-theater/',
      'services/tv-sound-packages/',
      'services/home-security/',
      'about/',
      'contact/',
      'financing/',
      'thank-you/'
    ]
  }
};

function generateSitemap(brand, brandConfig) {
  const { domain, name, path, pages } = brandConfig;
  const baseUrl = `https://${domain}`;
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach(page => {
    const url = `${baseUrl}/${page}`.replace(/\/+/g, '/').replace(/\/$/, '') || baseUrl;
    const lastmod = new Date().toISOString().split('T')[0];
    
    // Determine priority based on page type
    let priority = '0.5';
    if (page === '') priority = '1.0';
    else if (page.includes('service') || page.includes('solution')) priority = '0.8';
    else if (page === 'contact/' || page === 'about/') priority = '0.7';
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

function generateRobotsTxt(brand, brandConfig) {
  const { domain } = brandConfig;
  
  return `# Robots.txt for ${domain}
# Generated automatically for ${brandConfig.name}

User-agent: *
Allow: /

# Sitemaps
Sitemap: https://${domain}/sitemap.xml

# Block common bot traps
Disallow: /admin/
Disallow: /private/
Disallow: /.git/
Disallow: /node_modules/

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Crawl delay for courtesy
Crawl-delay: 1`;
}

function generateHostAwareSitemaps() {
  console.log('🗺️  Generating host-aware sitemaps and robots.txt files...');
  
  // Ensure output directories exist
  const outputDir = path.join(process.cwd(), 'dist');
  
  Object.entries(BRANDS).forEach(([brand, config]) => {
    const brandDir = path.join(outputDir, brand);
    
    // Create brand directory if it doesn't exist
    if (!fs.existsSync(brandDir)) {
      fs.mkdirSync(brandDir, { recursive: true });
    }
    
    // Generate sitemap
    const sitemap = generateSitemap(brand, config);
    const sitemapPath = path.join(brandDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    
    // Generate robots.txt
    const robotsTxt = generateRobotsTxt(brand, config);
    const robotsPath = path.join(brandDir, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
    
    console.log(`✅ Generated sitemap and robots.txt for ${config.name} (${config.domain})`);
  });
  
  // Generate root-level files (default to Lifetime)
  const rootSitemap = generateSitemap('lifetime', BRANDS.lifetime);
  const rootRobots = generateRobotsTxt('lifetime', BRANDS.lifetime);
  
  fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), rootSitemap, 'utf8');
  fs.writeFileSync(path.join(outputDir, 'robots.txt'), rootRobots, 'utf8');
  
  console.log('✅ Generated root-level sitemap.xml and robots.txt');
  console.log('🎯 Host-aware SEO files complete!');
}

// Run if called directly
if (require.main === module) {
  generateHostAwareSitemaps();
}

module.exports = { generateHostAwareSitemaps, BRANDS };

