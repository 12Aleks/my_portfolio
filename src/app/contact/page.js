"use client"
import {useEffect, useState} from 'react';
import Image from "next/image";
import FormComponent from "@/components/contact/FormComponent";
import RenderModel from "@/components/RenderModel";
import clsx from "clsx";
import useDayNightMode from "@/app/customHook/useDayNightMode";
import {BambooModel} from "@/components/model/BambooModel";
import {PineModel} from "@/components/model/PineModel";
import bg from '../../../public/background/japan_castel2_gradient.webp'


const ContactPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const isNight = useDayNightMode();

    useEffect(() => {
        // Добавляем небольшую задержку для плавности
        const timeout = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="flex min-h-screen h-full w-full flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20 relative">
            <div className={clsx(isNight ? 'opacity-8' : 'opacity-[.12]', "absolute top-0 left-0 w-full h-full bg-gradient-to-b opacity-8 from-slate-400 to-stone-950 z-0")}/>
            <Image src={bg}
                   alt="background"
                   fill
                   sizes="100vw"
                   priority
                   className={clsx(isNight ? 'opacity-8' : 'opacity-9', "fixed object-cover top-0 left-0 w-full opacity-8 h-screen bg-fixed z-0 blur-sm")}
            />

            <div
                className={`fixed hidden sm:hidden md:block md:top-80 lg:top-0 w-full -left-[42vw] h-4/5 sm:h-4/5 md:h-4/5 lg:h-screen -z-50 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <RenderModel light="night">
                    <BambooModel config={{
                        floatAmplitude: 0.01,
                        floatSpeed: 0.4,
                        swayAmplitude: 0.004,
                        swaySpeed: 0.5,
                    }}/>
                </RenderModel>
            </div>

            <article
                className="relative flex flex-col items-center justify-center space-y-2 3xl:space-y-8 text-white">
                <h1 className="font-bold text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-7xl text-amber-600 mb-5 2xl:mb-10 3xl:mb-20">Kontakt</h1>
                <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
                    <p className="text-center text-light">Jeśli masz pytania lub sugestie dotyczące współpracy, możesz
                        przesłać je do mnie za pomocą poniższego formularza kontaktowego.</p>
                </div>
                <FormComponent/>
            </article>

            <div
                className={`w-full fixed top-36 sm:top-30 md:top-0 lg:top-0 left-[5vw] sm:left-[10vw] md:left-[42vw] lg:left-[42vw] h-[85vh] lg:h-screen -z-30 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <RenderModel light={'night'}>
                    <PineModel config={{
                        floatAmplitude: 0.01,
                        floatSpeed: 0.56,
                        swayAmplitude: 0.005,
                        swaySpeed: 0.5,
                        rotateY: 0,
                        light: 1
                    }}/>
                </RenderModel>
            </div>
        </div>
    );
};

export default ContactPage;