import Image from "next/image";
import bg from "../../../../public/background/japan_castel.jpg";
import React from "react";

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-between">

            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-700 to-gray-950 opacity-5 z-0"/>
                <Image src={bg} alt="background" fill className="fixed object-cover top-0 left-0 w-full h-screen opacity-10 bg-fixed z-0"/>

            <div className="absolute z-0 flex flex-col items-center justify-between text-center top-[60%] left-1/2 -translate-x-1/2 text-white">
                <h1>About me</h1>
            </div>
            
        </div>
    );
};

export default AboutPage;