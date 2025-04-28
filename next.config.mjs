/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=3600, must-revalidate",
                    },
                ],
            },
        ];
    },
    images: {
        domains: ['www.codewars.com'],
    },
};

export default nextConfig;

export const i18n = {
    locales: ['en', 'pl', 'de', 'ru', 'ua'],
    defaultLocale: 'pl',
    timeZone: 'Europe/Warsaw'
};

