/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://reitanlage-bosel.de',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/admin/*', '/api/*', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/*', '/api/*', '/404', '/500'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = config.priority;
    if (path === '/') {
      priority = 1.0;
    } else if (path.includes('/reiterferien')) {
      priority = 0.9;
    } else if (path.includes('/reitunterricht')) {
      priority = 0.8;
    } else if (path.includes('/pferdepension')) {
      priority = 0.8;
    }

    // Custom changefreq based on path
    let changefreq = config.changefreq;
    if (path === '/') {
      changefreq = 'daily';
    } else if (path.includes('/reiterferien')) {
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
}; 