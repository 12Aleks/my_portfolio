"use client"
import {useState} from "react";
import Image from "next/image";
import bg from "../../public/background/japan_gradient.jpeg"
import RenderModel from "@/components/RenderModel";
import TreeModel from "@/components/model/TreeModel";
import Navigation from "@/components/navigation";
import Petals from "@/components/ Petals";

export default function Home() {
    const [isModelLoaded, setIsModelLoaded] = useState(false);

    const handleModelLoad = () => {
        setIsModelLoaded(true);
    };
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative ">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-400 to-gray-950 opacity-20">
                <Image src={bg} alt="background" fill className="object-cover object-top opacity-35"/>
            </div>

            <div className="w-full h-screen">
                {isModelLoaded && (
                    <Petals />
                )}

                <Navigation />

                <RenderModel>
                    <TreeModel  onLoadComplete={handleModelLoad}/>
                </RenderModel>
            </div>
        </main>
    );
}
