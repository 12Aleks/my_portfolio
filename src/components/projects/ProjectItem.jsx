import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const ProjectItem = ({project, index}) => {
    return (
        <div className={clsx(
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse',
            "flex items-center justify-between relative rounded-lg w-full p-5 transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600"
        )}>
            <Image src={`/projectImages/${project.image}`} alt={project.name} width={260} height={250}
                   className="rounded-md aspect-3/2 object-cover" loading="lazy"/>
            <div className={clsx(index % 2 === 0 ? 'ml-3' : 'mr-3',
                "flex flex-col items-start justify-center space-y-3 w-full")}>
                <p className={clsx(index % 2 === 0 ? 'ml-auto' : 'mr-auto', "text-white pb-3")}>
                    {new Date(project.date).toLocaleDateString("pl", {
                        month: "long",
                        year: "numeric"
                    })}
                </p>
                <h2 className="text-white text-lg">{project.name}</h2>
                <p className="text-white text-sm">{project.description}</p>
                <div>
                    {project.technologies.map(tech => (
                        <span className=" transition-all duration-500 text-amber-500 text-sm hover:text-amber-600 opacity-80 px-2 py-0.5 ml-1 rounded-lg border border-1 border-amber-500 hover:border-amber-600" key={tech}>{tech}</span>
                    ))}
                </div>
                <div className="pt-2 mt-auto text-sm">
                    {project.demoLink && (
                        <Link href={project.demoLink} target="_blank" className='px-2 py-0.5 bg-white rounded-lg mr-2 hover:text-gray-700'>Live</Link>
                    )}

                    {project.git && (
                        <Link href={project.git} target="_blank" className='px-2 py-0.5 bg-white rounded-lg hover:text-gray-700 '>Code</Link>
                    )}
                </div>
            </div>


        </div>
    );
};

export default ProjectItem;
