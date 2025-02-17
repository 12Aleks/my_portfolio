import { Inter } from "next/font/google";
import "../globals.css";
import clsx from "clsx";
import FireFlies from "@/components/FireFlies";
import Navbar from "@/components/navigation/Navbar";
import dynamic from "next/dynamic";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalyticsScript from "@/components/GoogleAnalyticsScript";
import GoogleTagManagerScript from "@/components/GoogleTagManagerScript";
import I18nProvider from "../i18nProvider";
import {getTranslatedMetadata} from "@/app/[locale]/metadata";



const Sound = dynamic(() => import("@/components/Sound"));
const Footer = dynamic(() => import("@/components/navigation/Footer"));

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export async function generateMetadata({ params }) {
    return getTranslatedMetadata(params.locale);
}

export default function RootLayout({ children, params }) {
    return (
        <html lang={params.locale}>
        <body className={clsx(inter.variable, "font-inter bg-background text-foreground min-h-screen flex flex-col relative")}
        >
        <I18nProvider locale={params.locale}>
            <CookieConsent />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <FireFlies />
            <Sound />
            <Footer />
            <GoogleTagManagerScript />
            <GoogleAnalyticsScript />
        </I18nProvider>
        </body>
        </html>
    );
}
