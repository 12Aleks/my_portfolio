import React from 'react';
import ProjectItem from "@/components/projects/ProjectItem";

const ProjectList = ({ projects, petprojects }) => {
    return (
        <div className="w-full max-w-4xl px-16 space-y-8 flex flex-col items-center justify-center relative ">
            <h2 className="text-white text-2xl uppercase">Projecty</h2>
            {projects?.map((project, index) => (
                <ProjectItem key={index} project={project} index={index} />
            ))}
            <h2 className="text-white text-2xl uppercase">Pet projecty</h2>
            {petprojects?.map((project, index) => (
                <ProjectItem key={index} project={project} index={index} />
            ))}
        </div>
    );
};

export default ProjectList;