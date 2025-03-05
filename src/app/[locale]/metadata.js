import plMessages from "../../../messages/pl.json";
import enMessages from "../../../messages/en.json"; // добавьте другие языки при необходимости
import deMessages from "../../../messages/de.json"; // добавьте другие языки при необходимости
import ruMessages from "../../../messages/ru.json"; // добавьте другие языки при необходимости
import uaMessages from "../../../messages/ua.json"; // добавьте другие языки при необходимости

const messagesMap = {
    pl: plMessages,
    en: enMessages,
    de: deMessages,
    ru: ruMessages,
    ua: uaMessages,
};

export function getTranslatedMetadata(locale) {
    const messages = messagesMap[locale] || plMessages;

    return {
        title: messages.metadata.title,
        description: messages.metadata.description,
        keywords: messages.metadata.keywords,
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
