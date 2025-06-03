"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import clsx from "clsx";
import useDayNightMode from "@/app/customHook/useDayNightMode";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import SocialButton from "@/components/navigation/SocialButton";
import { Links } from "@/app/data";

const RenderModel = dynamic(() => import("@/components/RenderModel"),
    { ssr: false });
const MoonModel = dynamic(() => import("@/components/model/Moonmodel"),
    { ssr: false });

export default function Home() {
    const [isModelVisible, setIsModelVisible] = useState(false);
    const isNight = useDayNightMode();
    const t = useTranslations("home");
    const locale = useLocale();


    useEffect(() => {
        if (isModelVisible) {
            document.body.style.overflow = "auto";
        }
    }, [isModelVisible]);

    const buttonBaseClass =
        "backdrop-blur text-center border border-amber-500 text-amber-500 px-6 py-1.5 sm:py-2 uppercase transition duration-200 hover:bg-amber-600 hover:text-black";

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
                src="/background/japan_castel2_gradient.webp"
                alt="background"
                fill
                sizes="100vw"
                className={clsx(
                    "fixed object-cover top-0 left-0 w-full max-h-screen -z-10 blur-[1px]",
                    isNight ? "opacity-7" : "opacity-10"
                )}
            />
            <Image
                src="/frontpage/abstract-red-background-wavy-lines.webp"
                alt="background"
                width={800}
                height={500}
                className="hidden 2xl:block fixed left-0 -bottom-5 -z-50 brightness-50 -rotate-2
                blur-[1px] h-auto 2xl-only:w-[600px] 3xl:w-[800px]"
            />


            <section className="relative w-full h-screen overflow-hidden text-white font-sans">
                <h1 className="sr-only">{t("title")}</h1>

                <div className="w-full 3xl:w-5/6 4xl:w-3/4 min-h-screen mx-auto flex flex-row items-end
                 xl:items-center justify-between px-3 lg:px-6 py-12 sm:py-16 lg:py-20 gap-10">

                    <div className="w-full xl:w-1/2 flex">
                        <div className="block text-center xl:text-left w-full lg:w-4/5 3xl:w-5/6
                        mx-auto tracking-wide 3xl:tracking-wider">
                            <div className="mb-[2vh] sm:mb-[4vh] md:mb-[6vh] lg:mb-[8vh] 3xl-only:mb-[10vh] 4xl:mb-[12vh]">
                                <h2 className="font-marker text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl
                                4xl:text-6xl font-bold mb-2 sm:mb-3 lg:mb-6 tracking-[2px] sm:tracking-[4px]">
                                    Front End Polska
                                </h2>
                                <p className="text-sm 2xl:text-base 4xl:text-xl leading-relaxed mb-4 lg:mb-1 text-gray-300">
                                    {t("firstSubtitle")}
                                </p>
                                <p className="text-sm 2xl:text-base 4xl:text-xl leading-relaxed hidden lg:block lg:mb-6
                                 3xl:mb-10 text-gray-300">
                                    {t("secondSubtitle")}
                                </p>

                                <div className="flex flex-col justify-center xl:justify-start md:flex-row
                                gap-3 sm:gap-4 text-[12px] tracking-[1px] sm:text-sm xl-only:text-base
                                3xl:text-lg px-8 sm:px-3 lg:p-0">
                                    <Link href={`${locale}/projects`} className={buttonBaseClass}>
                                        {t("leftButton")}
                                    </Link>
                                    <Link href={`${locale}/contact`} className={buttonBaseClass}>
                                        {t("rightButton")}
                                    </Link>
                                </div>
                            </div>

                            <div className="hidden xl:flex flex-row gap-10">
                                {Links?.map((data) => (
                                    <SocialButton key={data.label} {...data} />
                                ))}
                            </div>
                        </div>
                    </div>

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
                            src="/frontpage/samurai.webp"
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
        </div>
    );
}
