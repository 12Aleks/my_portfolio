"use client";
import { useEffect } from "react";

export default function GoogleAnalyticsScript() {
    useEffect(() => {
        if (typeof window !== "undefined" && localStorage.getItem("cookie_consent") === "granted") {
            const script = document.createElement("script");
            script.src = `https://www.googletagmanager.com/gtag/js?id=G-06E4K2RH3H`;
            script.async = true;
            document.head.appendChild(script);

            script.onload = () => {
                window.dataLayer = window.dataLayer || [];
                window.gtag = function () {
                    window.dataLayer.push(arguments);
                };
                window.gtag("js", new Date());
                window.gtag("config", "G-06E4K2RH3H");
            };
        }
    }, []);

    return null;
}
