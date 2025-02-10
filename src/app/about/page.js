"use client"
import Image from "next/image";
import {useState, useEffect} from "react";
import bg from "../../../public/background/japan_castel.webp";
import AboutBlocks from "@/components/about";
import RenderModel from "@/components/RenderModel";
// import {BambooModel} from "@/components/model/BambooModel";
import useDayNightMode from "@/app/customHook/useDayNightMode";
import clsx from "clsx";
import dynamic from "next/dynamic";

const BambooModel = dynamic(() => import("@/components/model/BambooModel")
    .then(mod => mod.BambooModel), {
    ssr: false
});

const AboutPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const isNight = useDayNightMode();

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    return (

        <div
            className="flex min-h-screen h-full w-full flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20 relative">
            <div
                className={clsx(isNight ? 'opacity-8': 'opacity-[.12]', "absolute top-0 left-0 w-full h-full bg-gradient-to-b opacity-8 from-slate-400 to-stone-950 z-0")}/>
            <Image
                src={bg}
                alt="background"
                sizes="100vw"
                className={clsx(isNight ? 'opacity-8': 'opacity-[.17]', "fixed object-cover top-0 left-0 w-full h-screen opacity-8 bg-fixed z-0 blur-sm")}
                loading="lazy"
            />

            <div className="relative w-full flex lex-col items-center justify-center my-10  2xl:my-10 3xl:my-20">
                <h1 className="font-bold text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-7xl text-amber-600">O mnie
                </h1>
            </div>

            {/* Первая 3D модель */}
            <div
                className={`fixed top-0 w-full -left-[42vw] h-screen -z-50 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <RenderModel light="night">
                    <BambooModel config={{
                        floatAmplitude: 0.01,
                        floatSpeed: 0.4,
                        swayAmplitude: 0.004,
                        swaySpeed: 0.5,
                        light: 1
                    }}/>
                </RenderModel>
            </div>

            {/* Вторая 3D модель */}
            <div
                className={`w-full fixed top-0 left-[46vw] h-screen -z-30 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <RenderModel light="night">
                    <BambooModel config={{
                        floatAmplitude: 0.01,
                        floatSpeed: 0.56,
                        swayAmplitude: 0.005,
                        swaySpeed: 0.5,
                        rotateY: 0
                    }}/>
                </RenderModel>
            </div>

            <AboutBlocks/>
        </div>

    );
};

export default AboutPage;
