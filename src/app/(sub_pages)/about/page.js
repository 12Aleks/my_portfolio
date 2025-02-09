"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import bg from "../../../../public/background/japan_castel.webp";
import AboutBlocks from "@/components/about";
import RenderModel from "@/components/RenderModel";
import {BambooModel} from "@/components/model/BambooModel";

const AboutPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Добавляем небольшую задержку для плавности
        const timeout = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-400 to-gray-950 opacity-8 z-0"/>
            <Image
                src={bg}
                alt="background"
                layout="intrinsic"
                className="fixed object-cover top-0 left-0 w-full h-screen opacity-8 bg-fixed z-0 blur-sm"
                loading="lazy"
            />

            <div className="relative w-full flex lex-col items-center justify-center my-10 sm:my-20">
                <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl text-amber-600">About me</h1>
            </div>

            {/* Первая 3D модель */}
            <div className={`fixed top-0 w-full -left-[42vw] h-screen -z-50 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <RenderModel light="night">
                    <BambooModel config={{
                        floatAmplitude: 0.01,
                        floatSpeed: 0.4,
                        swayAmplitude: 0.004,
                        swaySpeed: 0.5,
                        light: 1
                    }} />
                </RenderModel>
            </div>

            {/* Вторая 3D модель */}
            <div className={`w-full fixed top-0 left-[46vw] h-screen -z-30 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <RenderModel light="night">
                    <BambooModel config={{
                        floatAmplitude: 0.01,
                        floatSpeed: 0.56,
                        swayAmplitude: 0.005,
                        swaySpeed: 0.5,
                        rotateY: 0
                    }} />
                </RenderModel>
            </div>

            <AboutBlocks/>
        </div>
    );
};

export default AboutPage;
