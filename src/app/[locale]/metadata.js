export async function getTranslatedMetadata(locale) {
    let messages;
    try {
        switch (locale) {
            case "en":
                messages = (await import("../../../messages/en.json")).default;
                break;
            case "de":
                messages = (await import("../../../messages/de.json")).default;
                break;
            case "ru":
                messages = (await import("../../../messages/ru.json")).default;
                break;
            case "ua":
                messages = (await import("../../../messages/ua.json")).default;
                break;
            default:
                messages = (await import("../../../messages/pl.json")).default;
        }
    } catch (error) {
        console.error("Error loading metadata:", error);
        messages = { metadata: { title: "Default Title", description: "Default Description", keywords: "" } };
    }

    return {
        title: messages.metadata.title,
        description: messages.metadata.description,
        keywords: messages.metadata.keywords,
        openGraph: {
            title: messages.metadata.title,
            description: messages.metadata.description,
            images: [
                { url: "/firstscreen.png", width: 1200, height: 750, alt: "Oleksii Koba - Full Stack Developer" },
                { url: "/logo_bg.png", width: 290, height: 290, alt: "Oleksii Koba Logo" }
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