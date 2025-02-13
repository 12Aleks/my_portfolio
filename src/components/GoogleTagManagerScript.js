"use client"
import { useEffect } from "react";

export default function GoogleTagManagerScript() {
    useEffect(() => {
        if (typeof window !== "undefined" && localStorage.getItem("cookie_consent") === "granted") {
            // Загружаем Google Tag Manager только если согласие дано
            const script = document.createElement("script");
            script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-59ZKV4TH";
            script.async = true;
            document.head.appendChild(script);

            // Версия для Noscript
            const noscript = document.createElement("noscript");
            noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-59ZKV4TH" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
            document.body.appendChild(noscript);
        }
    }, []);

    return null;
}