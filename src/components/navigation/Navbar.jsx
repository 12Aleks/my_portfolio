"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from "../../../public/logo.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const pathname = usePathname();

    return (
        <nav className="backdrop-blur-[10px] fixed w-full top-0 left-0 text-white p-4 transition-all duration-300 ease-in-out z-50">
            <div className="max-w-full mx-auto flex items-center justify-between">
                {/* Логотип */}
                <Link href="/" className="cursor-pointer flex items-center z-20">
                    <Image src={logo} alt="logo" width={45} height={40} className="mr-4" />
                    <span className="text-white text-sm border-l border-white tracking-widest pl-4 uppercase">Oleksii Koba</span>
                </Link>

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
                    <Link href="/" className={`transition-colors duration-200 ${pathname === '/' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Home</Link>
                    <Link href="/projects" className={`transition-colors duration-200 ${pathname === '/projects' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Projects</Link>
                    <Link href="/about" className={`transition-colors duration-200 ${pathname === '/about' ? 'text-gray-400' : 'hover:text-gray-400'}`}>About</Link>
                    <Link href="/contact" className={`transition-colors duration-200 ${pathname === '/contact' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Contact</Link>
                </div>
            </div>

            <div className={`min-h-full md:hidden fixed left-0 right-0 bottom-0 top-[20vh] xxs:top-[16vh] xs:top-[14vh] sm:top-[14vh] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 backdrop-blur-[10px]">
                    <Link href="/" onClick={() => setIsOpen(false)} className={`text-white text-xl ${pathname === '/' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Home</Link>
                    <Link href="/projects" onClick={() => setIsOpen(false)} className={`text-white text-xl ${pathname === '/projects' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Projects</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className={`text-white text-xl ${pathname === '/about' ? 'text-gray-400' : 'hover:text-gray-400'}`}>About</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className={`text-white text-xl ${pathname === '/contact' ? 'text-gray-400' : 'hover:text-gray-400'}`}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}
