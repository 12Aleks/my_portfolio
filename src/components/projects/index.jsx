import ProjectItem from "@/components/projects/ProjectItem";

const ProjectList = ({ projects, petprojects }) => {
    return (
        <div className="w-full max-w-4xl px-0 sm:px-0 md:px-0 xl:px-4 py-0 xl:py-10 2xl:py-10 3xl:py-20 space-y-8 flex flex-col items-center justify-center relative z-30">
            {projects?.map((project, index) => (
                <ProjectItem key={index} project={project} index={index} />
            ))}
            <h2 className="text-white text-2xl uppercase">Pet projecty</h2>
            {petprojects?.map((project, index) => (
                <ProjectItem key={project.id} project={project} index={index} />
            ))}
        </div>
    );
};

export default ProjectList;