const fs = require('fs');
const path = require('path');

// Define your main pages
const mainPages = [
  '/',
  '/reiterferien',
  '/reitunterricht',
  '/pferdepension',
  '/kontakt',
  '/impressum',
  '/datenschutz',
];

// Define your dynamic pages (if any)
const dynamicPages = [
  '/reiterferien/sommer',
  '/reiterferien/winter',
  '/reitunterricht/erwachsene',
  '/reitunterricht/kinder',
  '/pferdepension/stall',
  '/pferdepension/auslauf',
];

// Combine all pages
const allPages = [...mainPages, ...dynamicPages];

// Generate sitemap XML
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      const priority = page === '/' ? '1.0' : 
                      page.includes('reiterferien') ? '0.9' :
                      page.includes('reitunterricht') || page.includes('pferdepension') ? '0.8' : '0.7';
      
      const changefreq = page === '/' ? 'daily' : 'weekly';
      
      return `
  <url>
    <loc>https://reitanlage-bosel.de${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  // Write sitemap to public directory
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap(); 