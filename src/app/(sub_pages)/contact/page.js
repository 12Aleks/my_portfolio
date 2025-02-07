"use client"
import {useEffect, useState} from 'react';
import Image from "next/image";
import bg from "../../../../public/background/japan_castel2.webp";
import FormComponent from "@/components/contact/FormComponent";
import {PineModel} from "@/components/model/PineModel";
import RenderModel from "@/components/RenderModel";

const ContactPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Добавляем небольшую задержку для плавности
        const timeout = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="flex flex-col items-center justify-center">

            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-400 to-gray-950 opacity-8 z-0"/>
            <Image src={bg} alt="background" fill
                   className="fixed object-cover top-0 left-0 w-full h-screen opacity-8 bg-fixed z-0 blur-sm" loading="lazy" />


            <article className="relative flex flex-col items-center justify-center space-y-8 text-white">
                <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl text-amber-600 mb-20">Kontakt</h1>
                <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
                    <p className="text-center text-light">Jeśli masz pytania lub sugestie dotyczące współpracy, możesz przesłać je do mnie za pomocą poniższego formularza kontaktowego.</p>
                </div>
                <FormComponent/>
            </article>

            <div className={`flex items-center  w-full justify-center fixed top-0 left-0 h-screen -z-50 duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <RenderModel light={'night'}>
                    <PineModel/>
                </RenderModel>
            </div>

        </div>
    );
};

export default ContactPage;