// scripts/generate-host-aware-sitemaps.js
const fs = require("fs");
const path = require("path");

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function generateHostAwareSitemaps() {
  const dist = path.join(process.cwd(), "dist");
  
  // Generate sitemaps for each brand in their respective directories
  const brands = [
    { name: 'lifetime', domain: 'lifetimehomeservices.com' },
    { name: 'cc', domain: 'closetconcepts.com' },
    { name: 'aih', domain: 'americainhome.com' }
  ];

  brands.forEach(brand => {
    const brandDir = path.join(dist, brand.name);
    
    // Create basic sitemap with domain-specific URLs
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://${brand.domain}/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
</urlset>`;
    
    // Create robots.txt with sitemap reference
    const robots = `User-agent: *
Allow: /
Sitemap: https://${brand.domain}/sitemap.xml
`;

    write(path.join(brandDir, "sitemap.xml"), sitemap);
    write(path.join(brandDir, "robots.txt"), robots);
  });

  // Create root-level sitemap and robots.txt
  const rootSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lifetimehomeservices.com/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
</urlset>`;

  const rootRobots = `User-agent: *
Allow: /
Sitemap: https://lifetimehomeservices.com/sitemap.xml
`;

  write(path.join(dist, "sitemap.xml"), rootSitemap);
  write(path.join(dist, "robots.txt"), rootRobots);
  
  // Keep the placeholder files for future enhancement
  write(path.join(dist, "sitemaps", "lhs.xml"), `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`);
  write(path.join(dist, "sitemaps", "cc.xml"),  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`);
  write(path.join(dist, "sitemaps", "aih.xml"), `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`);

  write(path.join(dist, "robots", "lhs.txt"), "User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n");
  write(path.join(dist, "robots", "cc.txt"),  "User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n");
  write(path.join(dist, "robots", "aih.txt"), "User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n");
}

module.exports = { generateHostAwareSitemaps };

