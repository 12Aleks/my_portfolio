"use client";
import Script from "next/script";

export default function GoogleAnalyticsScript() {
    if (typeof window === "undefined") return null;

    // chack consent
    if (localStorage.getItem("cookie_consent") !== "granted") {
        return null;
    }

    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-06E4K2RH3H"
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-06E4K2RH3H');
        `}
            </Script>
        </>
    );
}
