"use client"
import Image from "next/image";
import ProjectList from "@/components/projects";
import {workProjects, petProjects} from "@/app/data";
import RenderModel from "@/components/RenderModel";
import bg from '../../../public/background/japan_castel3.webp'
import {useEffect, useState} from "react";
import clsx from "clsx";
import useDayNightMode from "@/app/customHook/useDayNightMode";
import dynamic from "next/dynamic";

const PaperLantern = dynamic(() => import("@/components/model/PaperLantern")
    .then(mod => mod.PaperLantern), {
    ssr: false
});

const ProjectsPage = () => {
    const isNight = useDayNightMode();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Добавляем небольшую задержку для плавности
        const timeout = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    return (

            <div className="flex min-h-screen h-full w-full flex-col items-center justify-center px-8 xs:px-16 lg:px-32  py-20 relative">

                <div
                    className={clsx(isNight ? 'opacity-8': 'opacity-[.12]',"absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-400 to-stone-950 opacity-8 z-0 ")}/>
                <Image
                    src={bg}
                    alt="background"

                    sizes="100vw"
                    priority
                    className={clsx(isNight ? 'opacity-8': 'opacity-[.12]', "fixed object-cover top-0 left-0 w-full opacity-8 h-screen bg-fixed z-0 blur-sm")}
                />

                <div className="relative w-full flex lex-col items-center justify-center my-10  2xl:my-10 3xl:my-20">
                    <h1 className="font-bold text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-7xl text-amber-600">Projekty</h1>
                </div>

                {/* Project List */}
                <ProjectList projects={workProjects} petprojects={petProjects}/>

                {/* Left 3D Model */}
                <div
                    className={`flex items-center justify-center fixed top-0 -left-20 md:left-20 -xl:left-20 2xl:left-0 3xl:left-44 h-screen -z-50 duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                    <RenderModel light={'night'}>
                        <PaperLantern config={{
                            floatAmplitude: 0.01,
                            floatSpeed: 1,
                            lightFlickerSpeed: 4,
                            position: [0, 0.4, 0],
                            rotationSpeed: 0.03,
                            mashYRotation: 0.8,
                            mashXRotation: 1.8,
                            bugsPosition: 2
                        }}/>
                    </RenderModel>
                </div>

                {/* Right 3D Model */}
                <div
                    className={`flex items-center justify-center fixed top-10 left-1/2 md:left-3/4 xl:left-3/4 2xl:left-3/4 3xl:left-3/4 h-screen -z-50 duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                    <RenderModel light={'night'}>
                        <PaperLantern config={{
                            floatAmplitude: 0.005,
                            floatSpeed: 1.5,
                            lightFlickerSpeed: 8,
                            position: [0, 1.8, 0],
                            rotationSpeed: 0.01,
                        }}/>
                    </RenderModel>
                </div>
            </div>

    );
};

export default ProjectsPage;
