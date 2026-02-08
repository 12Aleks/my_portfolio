"use client";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import { MoonModel } from "@/components/model/Moonmodel";
import Image from "next/image";
import clsx from "clsx";

const RenderModel = dynamic(() => import("@/components/RenderModel"), {
    ssr: false,
});

export default function MoonScene() {
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const prevOverflow = document.body.style.overflow;

        document.body.style.overflow = visible ? "auto" : "hidden";

        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [visible]);

    return (
        <div className="absolute aspect-square flex items-center justify-center
                        w-[300px] sm:w-[400px] 2xl-only:w-[500px] 3xl:w-[600px] 4xl:w-[650px] opacity-90
                        -z-20 brightness-90 me-[6vw] 2xl:ms-[10vw] 3xl:ms-[15vw] mb-[35vh]">
            <Image
                src="/frontpage/redmoon.webp"
                alt="Red Moon placeholder"
                width={700}
                height={700}
                priority
                className={clsx(
                    "absolute transition-opacity duration-700 ease-in-out !w-full !h-full p-2",
                    !visible? "opacity-100" : "opacity-0"
                )}
            />
            <RenderModel
                light="forest"
                className={clsx(
                    "absolute transition-opacity duration-700 ease-in-out w-full h-full",
                    visible ? "opacity-100" : "opacity-0"
                )}
            >
                <MoonModel onLoaded={() =>  setVisible(true)} />
            </RenderModel>
        </div>
    );
}
