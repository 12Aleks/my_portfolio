"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import RenderModel from "@/components/RenderModel";
import TreeModel from '@/components/model/TreeModel';
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";
import clsx from "clsx";
import useDayNightMode from "@/app/customHook/useDayNightMode";
import {useTranslations} from "next-intl";

const Petals = dynamic(() => import("@/components/Petals"), {
    ssr: false
});

export default function Home() {
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const isNight = useDayNightMode();
    const isLoaded = useRef(false);
    const t = useTranslations("home");

    const handleModelLoad = () => {
        setIsModelLoaded(true);
    };

    useEffect(() => {
        if (!isLoaded.current) {
            isLoaded.current = true;
        }
    }, []);




    return (
        <main className="w-full min-h-screen flex items-center justify-center overflow-hidden">
            <div className={clsx(isNight ? 'opacity-8': 'opacity-[.12]', "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-400 to-stone-950 opacity-10")} />
            <Image
                src="/background/japan_gradient.webp"
                alt="background"
                fill
                sizes="100vw"
                priority
                className={clsx(isNight ? 'opacity-8': 'opacity-[.12]', "fixed object-cover w-full h-screen opacity-8 bg-fixed z-0 blur-sm")}
            />

            <h1 className="sr-only">{t('title')}</h1>

            <div className="w-full min-h-screen flex items-center justify-center">
                { !isModelLoaded ?
                    <div
                        className={`absolute z-10 overflow-hidden h-[360px] w-[390px] xxs:w-[400px] xxs:h-[390px] xs:w-[550px] xs:h-[500px] sm:w-[400px] sm:h-[350px] lg:w-[400px] lg:h-[370px] 2xl:w-[400px] 2xl:h-[390px] 3xl:w-[600px] 3xl:md:h-[550px] mb-0 xxs:mb-0 xs:mb-0 sm:mb-14 transition-opacity duration-100 ${
                           isModelLoaded ? "opacity-0" : "opacity-100"
                        }`}
                    >
                    <Image
                            src="/screen_v5.webp"
                            alt="loading"
                            fill
                            sizes="100vw"
                            priority
                            className="object-cover"
                        />
                    </div> : <Petals />}

                <Navigation />

                <div
                    className={`relative z-10 overflow-hidden h-[360px] w-[390px] xxs:w-[400px] xxs:h-[390px] xs:w-[550px] xs:h-[500px] sm:w-[400px] sm:h-[350px] lg:w-[400px] lg:h-[370px] 2xl:w-[400px] 2xl:h-[390px] 3xl:w-[600px] 3xl:md:h-[550px]
                mb-0 xxs:mb-0 xs:mb-0 sm:mb-14 duration-100 ${
                        isLoaded.current ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <RenderModel light={"city"}>
                        <TreeModel onLoadComplete={handleModelLoad} />
                    </RenderModel>
                </div>
            </div>
        </main>
    );
}
