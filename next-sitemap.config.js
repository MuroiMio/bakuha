/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bakuha.pages.dev/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/*.json$', '/*?*'],
      },
      {
        userAgent: ['Googlebot', 'bingbot'],
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User'],
        disallow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/ogp.png', '/icon.png'],
        disallow: '/',
      },
    ],
  },
  exclude: ['/server-sitemap.xml', '/api/*'],
  generateIndexSitemap: false,
  outDir: 'public',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
  additionalPaths: async (config) => [
    await config.transform(config, '/result'),
    await config.transform(config, '/privacy'),
    await config.transform(config, '/terms'),
  ],
};
