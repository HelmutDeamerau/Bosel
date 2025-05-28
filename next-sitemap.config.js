/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://reitanlage-bosel.de',
  generateRobotsTxt: false, // We already have our own robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*', '/_next/*', '/static/*'],
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Custom priority for important pages
    if (path === '/reiterferien') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
} 