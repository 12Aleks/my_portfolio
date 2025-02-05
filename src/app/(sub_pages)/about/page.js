import Image from "next/image";
import bg from "../../../../public/background/japan_castel.jpg";
import AboutBlocks from "@/components/about";
import RenderModel from "@/components/RenderModel";
import { BambooModel } from "@/components/model/BambooModel";

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-400 to-gray-950 opacity-8 z-0" />
            <Image
                src={bg}
                alt="background"
                layout="intrinsic"
                className="fixed object-cover top-0 left-0 w-full h-screen opacity-8 bg-fixed z-0 blur-sm"
            />

            {/* First Bamboo Model */}
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

            <div className="relative w-full flex cd lex-col items-center justify-center my-20">
                <div className="absolute z-0 flex flex-col items-center text-center xl:top-[10%] 2xl:top-[20%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-white">
                    <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-7xl text-amber-600">About me</h1>
                    <p className="font-light text-xl"></p>
                </div>
            </div>

            {/* Second Bamboo Model */}
            <div className="w-full fixed top-0 left-[46vw] h-screen -z-30">
                <RenderModel light="night">
                    <BambooModel config={{
                        floatAmplitude: 0.01,  // Slightly different amplitude
                        floatSpeed: 0.56,       // Slightly different speed
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
