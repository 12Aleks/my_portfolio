"use client"
import {useState} from "react";
import Image from "next/image";
import bg from "../../public/background/scale_1200.png"
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
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            <Image src={bg} alt="background" fill className="w-full h-full object-cover object-center opacity-10"/>

            <div className="w-full h-screen">
                <Navigation />
                {isModelLoaded && (
                    <Petals />
                )}
                <RenderModel>
                    <TreeModel  onLoadComplete={handleModelLoad}/>
                </RenderModel>
            </div>
        </main>
    );
}
