"use client"
import {useTranslations} from "next-intl";

export default function Footer() {
    const t = useTranslations();
    return (
        <footer className="absolute bottom-0 w-full bg-transparent text-center p-2 sm:p-3 z-0 transition-all duration-300 ease-in-out">
            <p className="text-[8px] sm:text-xs font-light tracking-[0.12em] text-neutral-400">
                © {new Date().getFullYear()} by Web Development Oleksii Koba {t("footer")}
            </p>
        </footer>
    );
}