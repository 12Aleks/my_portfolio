import { Inter } from "next/font/google";
import "../globals.css";
import clsx from "clsx";
import FireFlies from "@/components/FireFlies";
import Navbar from "@/components/navigation/Navbar";
import dynamic from "next/dynamic";
import GoogleAnalyticsScript from "@/components/GoogleAnalyticsScript";
import GoogleTagManagerScript from "@/components/GoogleTagManagerScript";
import I18nProvider from "../i18nProvider";
import {getTranslatedMetadata} from "@/app/[locale]/metadata";
import Background from "@/components/Background";
import { SpeedInsights } from "@vercel/speed-insights/next"


const CookieConsent = dynamic(() => import("@/components/CookieConsent"));
const Sound = dynamic(() => import("@/components/Sound"));
const Footer = dynamic(() => import("@/components/navigation/Footer"));

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export function generateMetadata({ params }) {
    return getTranslatedMetadata(params.locale);
}

export default function RootLayout({ children, params }) {
    return (
        <html lang={params.locale}>
        <body className={clsx(inter.variable, "font-inter bg-background text-foreground min-h-screen flex flex-col relative")}
        >
        <I18nProvider locale={params.locale}>
            <Background />
            <Navbar />
            <main>{children}</main>
            <FireFlies />
            <Sound />
            <CookieConsent />
            <Footer />
            <SpeedInsights />
            <GoogleTagManagerScript />
            <GoogleAnalyticsScript />
        </I18nProvider>
        </body>
        </html>
    );
}
