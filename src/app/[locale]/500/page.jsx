"use client";

import Link from "next/link";

export default function Custom500() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
            <h1 className="text-6xl font-bold mb-4">500</h1>
            <p className="text-xl mb-6">Something went wrong on the server.</p>
            <Link
                href="/"
                className="px-6 py-2 bg-amber-500 text-[#272728] rounded-sm hover:bg-[#272728] hover:text-amber-500 transition"
            >
                Go Home
            </Link>
        </div>
    );
}