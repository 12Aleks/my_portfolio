"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";
import clsx from "clsx";
import useDayNightMode from "@/app/customHook/useDayNightMode";
import { useTranslations } from "next-intl";

const Petals = dynamic(() => import("@/components/Petals"), { ssr: false });
const RenderModel = dynamic(() => import("@/components/RenderModel"), { ssr: false });
const TreeModel = dynamic(() => import("@/components/model/TreeModel"), { ssr: false });

export default function Home() {
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const isNight = useDayNightMode();
    const t = useTranslations("home");

    useEffect(() => {
        const { documentElement, body } = document;
        [documentElement, body].forEach(el => el.style.overflow = "hidden");
        return () => {
            [documentElement, body].forEach(el => el.style.overflow = "");
        };
    }, []);

    const containerClasses = clsx(
        "relative flex items-center justify-center",
        "min-h-[390px] min-w-[400px] h-[360px] w-[390px]",
        "xxs:w-[400px] xxs:h-[390px] xs:w-[550px] xs:h-[500px]",
        "sm:w-[400px] sm:h-[350px] lg:w-[400px] lg:h-[370px]",
        "2xl:w-[400px] 2xl:h-[390px] 3xl:w-[600px] 3xl:md:h-[550px]"
    );

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <Image
                src="/background/japan_gradient.webp"
                alt="background"
                fill
                sizes="100vw"
                priority
                className={clsx(
                    isNight ? "opacity-8" : "opacity-[.12]",
                    "fixed object-cover w-full h-screen bg-fixed z-0 blur-sm max-h-screen"
                )}
            />

            <h1 className="sr-only">{t("title")}</h1>

            <div className="w-full flex items-center justify-center relative">
                <div className={clsx(containerClasses, "relative")}>
                    <div
                        className={clsx(
                            "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
                            isModelLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                        )}
                    >
                        <Image src="/screen_v5.webp" alt="loading" fill sizes="100vw" priority className="object-cover" />
                    </div>

                    {isModelLoaded && <Petals />}

                    <Navigation />

                    <div
                        className={clsx(
                            "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
                            isModelLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
                        )}
                    >
                        <RenderModel light="city">
                            <TreeModel onLoadComplete={() => setIsModelLoaded(true)} />
                        </RenderModel>
                    </div>
                </div>
            </div>
        </div>
    );
}
