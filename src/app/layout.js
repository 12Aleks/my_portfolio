import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFlies from "@/components/FireFlies";
import Navbar from "@/components/navigation/Navbar";
import dynamic from "next/dynamic";

const Sound = dynamic(() => import("@/components/Sound"));
const Footer = dynamic(() => import("@/components/navigation/Footer"));

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata = {
    title: "Oleksii Koba • Full Stack Developer Portfolio",
    description: "Portfolio of Oleksii Koba, Full Stack Developer specializing in React, Next.js, and Drupal.",
    openGraph: {
        title: "Oleksii Koba • Full Stack Developer Portfolio",
        description: "Portfolio of Oleksii Koba, Full Stack Developer specializing in React, Next.js, and Drupal.",
        images: ["/imageMeta.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Oleksii Koba - Full Stack Developer",
        description: "Portfolio of Oleksii Koba, a Full Stack Developer specializing in React, Next.js, and Drupal.",
        image: "/imageMeta.png",
    },
    icons: {
        icon: "/favicone/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={clsx(inter.variable, "font-inter bg-background text-foreground min-h-screen flex flex-col relative")}>
        <Navbar />
        <main className="flex-grow">
            {children}
        </main>
        <FireFlies />
        <Sound />
        <div id="my-modal" />
        <Footer />
        </body>
        </html>
    );
}
