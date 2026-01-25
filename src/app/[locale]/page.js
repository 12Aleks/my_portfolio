"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import clsx from "clsx";
import useDayNightMode from "@/app/customHook/useDayNightMode";
import SocialButton from "@/components/navigation/SocialButton";
import { Links } from "@/app/data";
import {MoonModel} from "@/components/model/Moonmodel";
import MainContent from "@/app/[locale]/MainContent";

const RenderModel = dynamic(() => import("@/components/RenderModel"),
    { ssr: false });

export default function Home() {
    const [isModelVisible, setIsModelVisible] = useState(false);
    const isNight = useDayNightMode();


    useEffect(() => {
        if (isModelVisible) document.body.style.overflow = "auto";
    }, [isModelVisible]);


    const moonGradientMask = {
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
    };

    return (
        <div className="relative w-full max-h-screen flex flex-col items-center justify-center overflow-hidden">

            <Image
                src="/background/japan_castle_1.webp"
                alt="background"
                fill
                sizes="100vw"
                className={clsx(
                    "fixed object-cover top-0 left-0 w-full max-h-screen -z-10 blur-[1px] " +
                    "[mask-image:linear-gradient(to_top,transparent_10%,rgba(0,0,0,0.5)_50%,black_80%)]",
                    isNight ? "opacity-5" : "opacity-10"
                )}
            />

            <section className="relative w-full h-screen overflow-hidden text-white font-sans"
                     aria-labelledby="frontpage-title">

                <div className="w-full 3xl:w-5/6 4xl:w-3/4 min-h-screen mx-auto flex flex-row items-end
                 xl:items-center justify-between px-3 lg:px-6 py-12 sm:py-16 lg:py-20 gap-10">

                    <MainContent />

                    <div className="absolute w-full left-1/2 top-1/2 transform -translate-x-1/2
                    -translate-y-1/2 flex justify-between xl:hidden">
                        <div className="flex flex-col gap-4 sm:gap-6 m-3">
                            {Links?.slice(0, 2).map((data) => (
                                <SocialButton key={data.label} {...data} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-6 m-3">
                            {Links?.slice(2, 4).map((data) => (
                                <SocialButton key={data.label} {...data} />
                            ))}
                        </div>
                    </div>

                    <div className="w-full xl:w-1/2 h-full flex flex-col items-center justify-center
                     absolute xl:relative -z-10">
                        <Image
                            src="/frontpage/samurai_ronin_1.webp"
                            alt="Samurai"
                            width={512}
                            height={927}
                            className="w-full h-auto max-h-screen max-w-[10rem] sm:max-w-[16rem]
                            2xl-only:max-w-[22rem] 3xl-only:max-w-[30rem] 4xl:max-w-lg
                            -z-10 brightness-75 blur-[.3px]"
                            style={moonGradientMask}
                        />

                        <div className="absolute aspect-square flex items-center justify-center
                        w-[300px] sm:w-[400px] 2xl-only:w-[500px] 3xl:w-[600px] 4xl:w-[650px] blur-[1.5px]
                        -z-20 brightness-90 me-[6vw] 2xl:ms-[10vw] 3xl:ms-[15vw] mb-[35vh]">
                            <Image
                                src="/frontpage/redmoon.webp"
                                alt="Red Moon placeholder"
                                width={700}
                                height={700}
                                priority
                                className={clsx(
                                    "absolute transition-opacity duration-700 ease-in-out !w-full !h-full p-2",
                                    !isModelVisible ? "opacity-100" : "opacity-0"
                                )}
                            />
                            <RenderModel
                                light="forest"
                                className={clsx(
                                    "absolute transition-opacity duration-700 ease-in-out w-full h-full",
                                    isModelVisible ? "opacity-100" : "opacity-0"
                                )}
                            >
                                <MoonModel onLoaded={() => setIsModelVisible(true)} />
                            </RenderModel>
                        </div>
                    </div>
                </div>
            </section>

            <Image
                src="/frontpage/abstract-red-background-wavy-lines.webp"
                alt="background"
                width={800}
                height={500}
                className="hidden 3xl:block fixed left-0 -bottom-5 -z-50 brightness-50 -rotate-2
                blur-[1px] h-auto 2xl-only:w-[600px] 3xl:w-[800px]"
            />
        </div>
    );
}