"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import bg from "../../public/background/japan_gradient.webp";
import RenderModel from "@/components/RenderModel";
import TreeModel from "@/components/model/TreeModel";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

const Petals = dynamic(() => import("@/components/Petals"));

export default function Home() {
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const isLoaded = useRef(false); // Храним состояние без перерисовки

    const handleModelLoad = () => {
        setIsModelLoaded(true);
    };

    useEffect(() => {
        if (!isLoaded.current) {
            isLoaded.current = true; // Помечаем, что загрузка уже была
        }
    }, []);

    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-between relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-400 to-gray-950 opacity-10" />
            <Image
                src={bg}
                alt="background"
                fill
                className="fixed object-cover w-full h-screen opacity-8 bg-fixed z-0 blur-sm"
                loading="lazy"
            />

            <div className="w-full min-h-screen flex items-center justify-center">
                {isModelLoaded && <Petals />}

                <Navigation />

                <div
                    className={`relative z-10 overflow-hidden h-[360px] w-[390px] xxs:w-[400px] xxs:h-[390px] xs:w-[550px] xs:h-[500px] sm:w-[600px] sm:h-[550px] md:w-[600px] md:h-[550px] 
                mb-0 xxs:mb-0 xs:mb-0 sm:mb-14 md:mb-14 duration-1000 ${
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
