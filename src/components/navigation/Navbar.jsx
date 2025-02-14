"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../../public/logo.png";
import { useLocale, useTranslations } from "next-intl";
import LanguageSelector from "@/components/navigation/LanguageSelector";

const navLinks = [
    { path: "", key: "home" },
    { path: "/projects", key: "projects" },
    { path: "/about", key: "about" },
    { path: "/contact", key: "contact" }
];

const languages = [
    { code: "en", label: "EN" },
    { code: "pl", label: "PL" },
    { code: "ua", label: "UA" },
    { code: "ru", label: "RU" },
    { code: "de", label: "DE" }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("navigation");
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const segments = pathname.split("/").filter(Boolean);
    const currentLocale = languages.find(lang => lang.code === segments[0]) ? segments[0] : "en";

    const handleChangeLanguage = (newLocale) => {
        if (newLocale === currentLocale) return;
        const newSegments = languages.find(lang => lang.code === segments[0]) ? [...segments] : [newLocale, ...segments];
        newSegments[0] = newLocale;
        router.push(`/${newSegments.join("/")}`);
    };

    return (
        <nav className={`fixed w-full top-0 left-0 text-white p-4 transition-all duration-300 ease-in-out z-50 ${isOpen ? "bg-[#333]/95 backdrop-blur-[10px]" : "bg-[#333]/0"} md:bg-[#333]/0`}>
            <div className="max-w-full mx-auto flex items-center justify-between">
                <Link href="/" className="cursor-pointer flex items-center z-20">
                    <Image src={logo} alt="logo" width={45} height={40} className="mr-4" />
                    <span className="text-white text-sm border-l border-white tracking-widest pl-4 uppercase">Oleksii Koba</span>
                </Link>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none z-20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                <div className="hidden md:flex space-x-6 mr-3 items-center">
                    {navLinks.map(({ path, key }) => (
                        <Link key={key} href={`/${locale}${path}`} className={`transition-colors duration-200 text-sm tracking-widest ${pathname === `/${locale}${path}` ? "text-amber-500" : "hover:text-amber-500"}`}>
                            {t(key)}
                        </Link>
                    ))}
                    <LanguageSelector currentLocale={currentLocale} onChange={handleChangeLanguage} languages={languages} />
                </div>
            </div>

            <div className={`fixed inset-0 transition-opacity duration-300 ${isOpen ? "opacity-100 visible z-40" : "opacity-0 invisible z-30"}`} onClick={() => setIsOpen(false)} />

            <div className={`fixed left-0 right-0 bottom-0 top-[74px] transform ${isOpen ? "translate-x-0 z-50" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col items-center justify-center h-auto space-y-6 sm:space-y-8 bg-[#333]/95 backdrop-blur-[10px] rounded-lg p-8 z-50">
                    {navLinks.map(({ path, key }) => (
                        <Link key={key} href={`/${locale}${path}`} onClick={() => setIsOpen(false)} className={`transition-colors duration-200 tracking-widest ${pathname === `/${locale}${path}` ? "text-gray-400" : "hover:text-gray-400"}`}>
                            {t(key)}
                        </Link>
                    ))}
                    <LanguageSelector currentLocale={currentLocale} onChange={handleChangeLanguage} languages={languages} />
                </div>
            </div>
        </nav>
    );
}
