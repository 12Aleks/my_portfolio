import {Inter} from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Head from "next/head";
import FireFlies from "@/components/FireFlies";
import Navbar from "@/components/navigation/Navbar";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/navigation/Footer"));

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

export const metadata = {
    title: "Oleksii Koba • Frontend Developer Portfolio | Japan Night Style",
    description: "Hi, I am Oleksii. I work as a Full Stack Developer in Gdańsk, Poland, and I am currently looking for a full-time remote job.",
    image: "/imageMeta.png",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <link rel="icon" href="/favicone/favicon.ico" />


            {/* Open Graph Tags */}
            <meta property="og:title" content="Oleksii Koba • Frontend Developer Portfolio | Japan Night Style" />
            <meta property="og:description" content="Hi, I am Oleksii. I work as a Full Stack Developer in Gdańsk, Poland, and I am currently looking for a full-time remote job." />
            <meta property="og:image" content="https://example.com/image.jpg" />
            <meta property="og:url" content="https://example.com/page" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Oleksii Koba • Frontend Developer Portfolio | Japan Night Style" />
            <meta name="twitter:description" content="Hi, I am Oleksii. I work as a Full Stack Developer in Gdańsk, Poland, and I am currently looking for a full-time remote job." />
            <meta name="twitter:image" content="https://example.com/image.jpg" />
        </Head>
        <body className={clsx(inter.variable, "bg-background text-foreground min-h-screen flex flex-col relative")}>

        <Navbar />
        <main className="flex-grow">
            {children}
        </main>
        <FireFlies />
        <Footer />
        </body>
        </html>
    );
}
