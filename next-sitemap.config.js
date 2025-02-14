const locales = ["en", "pl", "de", "ru", "ua"]; // Укажи все локали, которые используются в `next.config.js`

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.frontendpolska.pl",
    generateRobotsTxt: true,
    changefreq: "daily",
    autoLastmod: true,
    alternateRefs: locales.map((locale) => ({
        href: `https://www.frontendpolska.pl/${locale === "pl" ? "" : locale}`,
        hreflang: locale
    })),
    additionalPaths: async (config) => [
        await config.transform(config, '/projects'),
        await config.transform(config, '/about'),
        await config.transform(config, '/contact'),
        await config.transform(config, '/privacy-policy'),
        await config.transform(config, '/cookies-policy'),
    ],
};