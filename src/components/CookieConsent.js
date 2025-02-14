"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

export default function CookieConsent() {
    const [consent, setConsent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const t = useTranslations('cookieBanner');
    const locale = useLocale();

    useEffect(() => {
        const storedConsent = localStorage.getItem("cookie_consent");
        if (storedConsent) {
            setConsent(storedConsent);
        }
        setIsLoading(false);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "granted");
        setConsent("granted");
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "consent_given" });
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "denied");
        setConsent("denied");
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "consent_denied" });
    };

    if (isLoading) return null;

    if (consent === "granted" || consent === "denied") return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#333333f7]/40 backdrop-blur-[10px] text-gray-300 p-3 3xl:p-4 flex-col flex lg:flex-row justify-between items-center z-50 space-y-4 lg:space-y-0">
            <p className="text-sm 2xl:text-md">{t('message')} <Link href={`/${locale}/cookies-policy`} className="text-blue-400">{t('learnMore')}</Link></p>
            <div>
                <button onClick={handleAccept} className="bg-transparent hover:bg-gray-500   text-gray-300 font-semibold hover:text-white border border-gray-300 hover:border-gray-500  transition-all duration-500 px-3 3xl:px-4  py-1.5 3xl:py-2 rounded mr-2 text-md">{t('accept')}</button>
                <button onClick={handleDecline} className="bg-amber-600 hover:bg-amber-700 transition-all duration-500 px-3 3xl:px-4 py-1.5 3xl:py-2 rounded text-md">{t('decline')}</button>
            </div>
        </div>
    );
}
