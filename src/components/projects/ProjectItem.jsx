import React from 'react';

const ProjectItem = ({project}) => {

    return (
        <div className="flex items-center justify-between relative rounded-lg w-full p-6 transition-all
                 bg-background/20 backdrop-blur-[6px]
                 duration-500 hover:text-pink-200
                 border border-1 border-white hover:border-pink-200 ">
            <div className="flex items-center justify-center space-x-2">
                <h2 className="text-white">{project.name}</h2>
                <p className="text-white">{project.description}</p>
            </div>
            <div className="flex-1 mx-2 mb-1 self-end bg-transparent border border-b border-dashed border-muted"></div>
            <p className="text-white">
                {new Date(project.date).toLocaleDateString("pl", {month: "long", day: "numeric", year: "numeric"})}
            </p>
        </div>
    );
};

export default ProjectItem;