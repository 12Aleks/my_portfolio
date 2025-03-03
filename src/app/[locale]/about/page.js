"use client";
import Image from "next/image";
import AboutBlocks from "@/components/about";
import RenderModel from "@/components/RenderModel";
import {BambooModel} from "@/components/model/BambooModel";
import useDayNightMode from "@/app/customHook/useDayNightMode";
import clsx from "clsx";
import bg from '../../../../public/background/japan_castel.webp';
import {useTranslations} from "next-intl";

const AboutPage = () => {
    const isNight = useDayNightMode();
    const t = useTranslations("about");

    return (
        <div className="flex min-h-screen h-full w-full flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20 relative">

            <Image
                src={bg}
                alt="background"
                sizes="100vw"
                priority
                className={clsx(isNight ? 'opacity-8' : 'opacity-[.17]', "fixed object-cover top-0 left-0 w-full h-screen bg-fixed z-0 blur-sm")}
            />

            <div className="relative w-full flex flex-col items-center justify-center my-10 2xl:my-10 3xl:my-20">
                <h1 className="font-bold text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-7xl text-amber-600">{t('title')}</h1>
            </div>

            {/* Первая 3D модель */}
            <div className="fixed top-0 w-full -left-[42vw] h-screen -z-50">
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
            <div className="w-full fixed top-0 left-[46vw] h-screen -z-30">
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

            <AboutBlocks />
        </div>
    );
};

export default AboutPage;
