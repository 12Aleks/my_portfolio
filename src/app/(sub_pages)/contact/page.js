import React from 'react';
import Image from "next/image";
import bg from "../../../../public/background/japan_castel2.jpg";

const ContactPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between">

            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-400 to-gray-950 opacity-8 z-0"/>
            <Image src={bg} alt="background" fill
                   className="fixed object-cover top-0 left-0 w-full h-screen opacity-8 bg-fixed z-0 blur-sm"/>

            <div className="relative w-full flex cd lex-col items-center justify-center my-20">
                <div className="absolute z-0 flex flex-col items-center text-center top-[20%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-white">
                    <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl text-amber-600">Kontakt</h1>
                    <p className="font-light text-xl"></p>
                </div>
            </div>


        </div>
    );
};

export default ContactPage;