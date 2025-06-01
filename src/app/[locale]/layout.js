import { Inter, Permanent_Marker } from "next/font/google";
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


const CookieConsent = dynamic(() => import("@/components/CookieConsent"),
    { ssr: false });
const Sound = dynamic(() => import("@/components/Sound"),
    { ssr: false });
const Footer = dynamic(() => import("@/components/navigation/Footer"),
    { ssr: false });

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const permanentMarker = Permanent_Marker({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-permanent-marker",
});



export function generateMetadata({ params }) {
    return getTranslatedMetadata(params.locale);
}

export default function RootLayout({ children, params }) {
    return (
        <html lang={params.locale}>
        <body className={clsx(inter.variable, permanentMarker.variable , "font-inter bg-background text-foreground min-h-screen flex flex-col relative")}
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
