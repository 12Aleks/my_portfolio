const locales = ["en", "pl", "de", "ru", "ua"]; // Укажи все локали, которые используются в `next.config.js`

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.frontendpolska.pl',
    generateRobotsTxt: true,
    changefreq: 'daily',
    autoLastmod: true,
    alternateRefs: locales.map((locale) => ({
        href: `https://www.frontendpolska.pl/${locale === "pl" ? "" : locale}`,
        hreflang: locale
    })),
    transform: async (config, path) => {
        return {
            loc: path,
            lastmod: new Date().toISOString(),
            changefreq: 'daily',
            priority: 0.7,
        };
    },
    additionalPaths: async (config) => [
        { loc: '/projects', lastmod: new Date().toISOString() },
        { loc: '/about', lastmod: new Date().toISOString() },
        { loc: '/contact', lastmod: new Date().toISOString() },
    ],
};
