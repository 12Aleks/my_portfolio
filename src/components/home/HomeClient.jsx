"use client";

import SocialButton from "@/components/navigation/SocialButton";
import SamuraiImage from "@/components/home/SamuraiImage";
import dynamic from "next/dynamic";
import { Links } from "@/app/data";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { MoonModel } from "@/components/model/Moonmodel";

const RenderModel = dynamic(() => import("@/components/RenderModel"), {
    ssr: false,
});

export default function HomeClient() {
    const [show3D, setShow3D] = useState(false);
    const [modelReady, setModelReady] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShow3D(true), 1500);
        return () => clearTimeout(t);
    }, []);

    const leftLinks = Links?.slice(0, 2) ?? [];
    const rightLinks = Links?.slice(2, 4) ?? [];

    return (
        <>

            <div className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between xl:hidden">
                <div className="flex flex-col gap-4 sm:gap-6 m-3">
                    {leftLinks.map((data) => (
                        <SocialButton key={data.label} {...data} />
                    ))}
                </div>

                <div className="flex flex-col gap-4 sm:gap-6 m-3">
                    {rightLinks.map((data) => (
                        <SocialButton key={data.label} {...data} />
                    ))}
                </div>
            </div>


            <div className="w-full xl:w-1/2 h-full flex flex-col items-center justify-center absolute xl:relative -z-10">
                <SamuraiImage />

                <div className="absolute aspect-square flex items-center justify-center
          w-[300px] sm:w-[400px] 2xl-only:w-[500px] 3xl:w-[600px] 4xl:w-[650px]
          -z-20 brightness-90 me-[6vw] 2xl:ms-[10vw] 3xl:ms-[15vw] mb-[35vh]">


                    <Image
                        src="/frontpage/redmoon.webp"
                        alt="Red Moon placeholder"
                        width={700}
                        height={700}
                        priority
                        className={clsx(
                            "absolute transition-opacity duration-700 ease-in-out !w-full !h-full p-2",
                            modelReady ? "opacity-0" : "opacity-100"
                        )}
                    />


                    {show3D && (
                        <RenderModel
                            light="forest"
                            className={clsx(
                                "absolute transition-opacity duration-700 ease-in-out w-full h-full",
                                modelReady ? "opacity-100" : "opacity-0"
                            )}
                        >
                            <MoonModel onLoaded={() => setModelReady(true)} />
                        </RenderModel>
                    )}
                </div>
            </div>
        </>
    );
}
