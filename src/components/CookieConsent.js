"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
    const [consent, setConsent] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Добавляем состояние для загрузки

    useEffect(() => {
        const storedConsent = localStorage.getItem("cookie_consent");
        if (storedConsent) {
            setConsent(storedConsent);
        }
        setIsLoading(false); // После загрузки данных из localStorage, устанавливаем isLoading в false
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

    // Пока данные загружаются (isLoading), баннер будет показываться
    if (isLoading) return null;

    // Если согласие уже получено или отклонено, не показывать баннер
    if (consent === "granted" || consent === "denied") return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#333333f7]/40 backdrop-blur-[10px] text-white p-3 3xl:p-4 flex-col flex lg:flex-row justify-between items-center z-50 space-y-4 lg:space-y-0">
            <p className="text-sm 2xl:text-md">Używamy plików cookies w celu poprawy działania naszej strony. <Link href="/cookies-policy" className="text-blue-400">Dowiedz się więcej</Link></p>
            <div>
                <button onClick={handleAccept} className="bg-gray-400 hover:bg-gray-500  transition-all duration-500 px-3 3xl:px-4  py-1 3xl:py-2 rounded mr-2 text-md">Zaakceptuj</button>
                <button onClick={handleDecline} className="bg-amber-600 hover:bg-amber-700 transition-all duration-500 px-3 3xl:px-4 py-1 3xl:py-2 rounded text-md">Odrzuć</button>
            </div>
        </div>
    );
}
