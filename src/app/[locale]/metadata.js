import { getRequestConfig } from 'next-intl/server';

export async function getTranslatedMetadata(locale) {
    let messages;
    try {
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        messages = (await import('../../../messages/pl.json')).default;
    }

    return {
        title: messages.metadata.title,
        description: messages.metadata.description,
        openGraph: {
            title: messages.metadata.title,
            description: messages.metadata.description,
            images: [
                {
                    url: "/firstscreen.png",
                    width: 1200,
                    height: 750,
                    alt: "Oleksii Koba - Full Stack Developer"
                },
                {
                    url: "/logo_bg.png",
                    width: 290,
                    height: 290,
                    alt: "Oleksii Koba Logo"
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: messages.metadata.title,
            description: messages.metadata.description,
            image: "/imageMeta.png",
        },
        icons: {
            icon: "/favicone/favicon.ico",
        },
        verification: {
            google: "v_-x7X5kpJOUjhB5nobmzbxTYpI5xR99uzAXWLs14aU",
        },
    };
}
