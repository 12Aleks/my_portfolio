"use client"
import {useState} from 'react';
import {ChevronDown} from "lucide-react";


const LanguageSelector = ({ currentLocale, onChange, languages }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center px-3 py-2 bg-neutral-700 rounded-md text-sm focus:outline-none"
            >
                {currentLocale.toUpperCase()}
                <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-16 bg-white text-black rounded-md shadow-lg z-50 overflow-hidden">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                onChange(lang.code);
                                setIsDropdownOpen(false);
                            }}
                            className={`block w-full px-4 py-2 text-left ${lang.code === currentLocale ? "bg-gray-300 font-bold" : "hover:bg-gray-200"}`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;