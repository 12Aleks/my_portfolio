"use client";

import Link from "next/link";

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Oops! Page not found.</p>
            <Link
                href="/"
                className="px-6 py-2 bg-amber-500 text-[#272728] rounded-sm hover:bg-[#272728] hover:text-amber-500 transition"
            >
                Go Home
            </Link>
        </div>
    );
}