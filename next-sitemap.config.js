/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://localhost:3000',
    generateRobotsTxt: false, // We already have a custom robots.txt
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateIndexSitemap: false,
    exclude: ['/api/*'],
  }