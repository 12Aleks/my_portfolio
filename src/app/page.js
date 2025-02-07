"use client"
import {useEffect, useState} from "react";
import Image from "next/image";
import bg from "../../public/background/japan_gradient.webp"
import RenderModel from "@/components/RenderModel";
import TreeModel from "@/components/model/TreeModel";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

const Petals  = dynamic(() => import("@/components/ Petals"));

export default function Home() {
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleModelLoad = () => {
        setIsModelLoaded(true);
    };

    useEffect(() => {
        // Добавляем небольшую задержку для плавности
        const timeout = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative ">
            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-400 to-gray-950 opacity-10"/>
                <Image src={bg} alt="background" fill className="fixed object-cover w-full h-screen opacity-8 bg-fixed z-0 blur-sm" loading="lazy"/>

            <div className="w-full h-screen flex items-center justify-center ">
                {isModelLoaded && (
                    <Petals />
                )}

                <Navigation />
                <div className={`relative z-10 h-[550px] w-[600px] mb-14 duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                   <RenderModel light={'city'} >
                    <TreeModel  onLoadComplete={handleModelLoad}/>
                   </RenderModel>
                </div>
            </div>
        </main>
    );
}
