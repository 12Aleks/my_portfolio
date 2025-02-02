import React from 'react';
import ProjectItem from "@/components/projects/ProjectItem";

const ProjectList = ({projects}) => {

    return (
        <div className="w-full max-w-4xl px-16 space-y-8 flex flex-col items-center justify-center relative mt-20 ml-[35%]">

            {projects?.map((project, index) =>
                <ProjectItem key={index} project={project}/>
            )}
        </div>
    );
};

export default ProjectList;