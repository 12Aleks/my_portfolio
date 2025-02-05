import Image from "next/image";
import bg from "../../../../public/background/japan_castel3.png";
import ProjectList from "@/components/projects";
import {workProjects, petProjects} from "@/app/data";
import RenderModel from "@/components/RenderModel";
import {PaperLantern} from "@/components/model/PaperLantern";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen">

            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-400 to-gray-950 opacity-8 z-0 "/>
            <Image
                src={bg}
                alt="background"
                layout="intrinsic"
                className="fixed object-cover top-0 left-0 w-full h-screen opacity-8 bg-fixed z-0 blur-sm"
            />


            {/* Project List */}
            <ProjectList projects={workProjects} petprojects={petProjects}/>

            {/* 3D Model */}
            <div className="flex items-center justify-center fixed top-0 -z-10 left-60 h-screen -z-50">
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
                    }} />
                </RenderModel>
            </div>


            <div className="flex items-center justify-center fixed top-30 -z-10 right-96 h-screen -z-50">
                <RenderModel light={'night'}>
                    <PaperLantern config={{
                        floatAmplitude: 0.005,
                        floatSpeed: 1.5,
                        lightFlickerSpeed: 8,
                        position: [0, 1.8, 0],
                        rotationSpeed: 0.01,
                    }} />
                </RenderModel>

            </div>
        </div>
    );
};

export default ProjectsPage;
