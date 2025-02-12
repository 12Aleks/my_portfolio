"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    const pathname = usePathname();

    return (
        <nav className={`${isOpen ? "bg-[#333333f7]/95" : "bg-[#333333f7]/0"} backdrop-blur-[10px] md:bg-[#333333f7]/0 fixed w-full top-0 left-0 text-white p-4 transition-all duration-300 ease-in-out z-50`}>
            <div className="max-w-full mx-auto flex items-center justify-between">
                {/* Логотип */}
                <Link href="/" className="cursor-pointer flex items-center z-20">
                    <Image src={logo} alt="logo" width={45} height={40} className="mr-4" />
                    <span className="text-white text-sm border-l border-white tracking-widest pl-4 uppercase">Oleksii Koba</span>
                </Link>

                {/* Кнопка бургер-меню */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none z-20"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                {/* Меню для десктопов */}
                <div className="hidden md:flex space-x-6 mr-3">
                    <Link href="/" className={`transition-colors duration-200 text-sm 2xl:text-sm 3xl:text-base tracking-widest ${pathname === '/' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Strona główna</Link>
                    <Link href="/projects" className={`transition-colors duration-200 text-sm 2xl:text-sm 3xl:text-base tracking-widest ${pathname === '/projects' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Projekty</Link>
                    <Link href="/about" className={`transition-colors duration-200 text-sm 2xl:text-sm 3xl:text-base tracking-widest ${pathname === '/about' ? 'text-gray-400' : 'hover:text-gray-400'}`}>O mnie</Link>
                    <Link href="/contact" className={`transition-colors duration-200 text-sm 2xl:text-sm 3xl:text-base tracking-widest ${pathname === '/contact' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Kontakt</Link>
                </div>
            </div>

            {/* Затемнение фона при открытом мобильном меню */}
            <div
                className={`fixed inset-0 transition-opacity duration-300 ${isOpen ? "opacity-100 visible z-40" : "opacity-0 invisible z-30"}`}
                onClick={closeMenu}
            />

            {/* Мобильное меню */}
            <div className={`fixed left-0 right-0 bottom-0 top-[74px] transform ${isOpen ? "translate-x-0 z-50" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col items-center justify-center h-auto space-y-6 sm:space-y-8 bg-[#333333f7]/95 backdrop-blur-[10px] rounded-lg p-8 z-50">
                    <Link href="/" onClick={closeMenu} className={`transition-colors duration-200 tracking-widest ${pathname === '/' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Strona główna</Link>
                    <Link href="/projects" onClick={closeMenu} className={`transition-colors duration-200 tracking-widest ${pathname === '/projects' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Projekty</Link>
                    <Link href="/about" onClick={closeMenu} className={`transition-colors duration-200 tracking-widest ${pathname === '/about' ? 'text-gray-400' : 'hover:text-gray-400'}`}>O mnie</Link>
                    <Link href="/contact" onClick={closeMenu} className={`transition-colors duration-200 tracking-widest ${pathname === '/contact' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Kontakt</Link>
                </div>
            </div>

        </nav>
    );
}
