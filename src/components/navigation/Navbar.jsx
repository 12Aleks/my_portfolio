"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed w-full top-0 left-0 bg-transparent text-white p-4 z-50 transition-all duration-300 ease-in-out">
            <div className="max-w-full mx-auto flex items-center justify-between">
                {/* Логотип */}
                <Link href="/" className="cursor-pointer flex items-center z-20">
                    <Image src={logo} alt="logo" width={45} height={40} className="mr-4"/>
                    <span className="text-white text-sm border-l border-white tracking-widest pl-4 uppercase">Oleksii Koba</span>
                </Link>

                {/* Бургер-меню для мобильных устройств */}
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
                <div className="hidden md:flex space-x-8 mr-3">
                    <Link href="/" className="hover:text-gray-400 transition-colors duration-200">Home</Link>
                    <Link href="/projects" className="hover:text-gray-400 transition-colors duration-200">Projects</Link>
                    <Link href="/about" className="hover:text-gray-400 transition-colors duration-200">About</Link>
                    <Link href="/contact" className="hover:text-gray-400 transition-colors duration-200">Contact</Link>
                </div>
            </div>

            {/* Выпадающее меню для мобильных устройств */}
            <div className={`md:hidden fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-gray-400">Home</Link>
                    <Link href="/projects" onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-gray-400">Projects</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-gray-400">About</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-gray-400">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
