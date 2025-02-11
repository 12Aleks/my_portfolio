import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { memo } from "react";

const ProjectItem = ({ project, index }) => {
    function getDate(date) {
        return new Date(date).toLocaleDateString("pl", {
            month: "long",
            year: "numeric"
        });
    }

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className={clsx(
                index % 2 === 0 ? "xl:flex-row 2xl:flex-row" : "xl:flex-row-reverse 2xl:flex-row-reverse",
                "flex flex-col text-white sm:flex-col md:flex-col lg:flex-col items-center justify-between relative rounded-lg w-full p-3 sm:p-3 md:p-5 lg:p-5 transition-all bg-background/20 backdrop-blur-[6px] duration-500 border border-1 border-white hover:border-amber-600"
            )}
        >
            <p className="pb-3 ml-auto block lg:block xl:hidden font-light text-sm">{getDate(project.date)}</p>
            <Image
                src={`/projects/${project.image}`}
                alt={project.name}
                width={260}
                height={250}
                className="rounded-md h-auto w-full sm:h-auto sm:w-full lg:w-full xl:w-auto md:max-w-full lg:max-w-full xl:max-w-[300px] 3xl:max-w-[320px] mb-2 xl:mb-0"
                loading="lazy"
            />

            <div
                className={clsx(
                    index % 2 === 0 ? "xl:ml-3" : "xl:mr-3",
                    "flex flex-col items-start justify-between h-full w-full m-0 lg:ml-0 flex-grow" // Added flex-grow for flexible spacing
                )}
            >

                <p className={clsx(index % 2 === 0 ? "ml-auto" : "mr-auto", "text-sm font-light hidden sm:hidden lg:hidden xl:block")}>
                    {getDate(project.date)}
                </p>
                <h2 className="text-lg mt-3 mb-2">{project.name}</h2>
                <p className="text-sm font-light mb-2 xl:mb-3 2xl:mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-x-1.5 gap-y-1.5 my-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="inset-0 bg-gray-700/35 backdrop-blur-md whitespace-nowrap transition-all duration-500 text-amber-500 text-sm hover:text-amber-600 opacity-80 px-2 py-0.5 rounded-lg border border-amber-500 hover:border-amber-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="pt-2 mt-auto mb-2 text-sm">
                    {project.demoLink && (
                        <Link
                            href={project.demoLink}
                            target="_blank"
                            className="px-2 py-0.5 bg-white rounded-lg mr-2 text-gray-500 hover:text-gray-700"
                        >
                            Live
                        </Link>
                    )}

                    {project.git && (
                        <Link
                            href={project.git}
                            target="_blank"
                            className="px-2 py-0.5 bg-white rounded-lg text-gray-500 hover:text-gray-700"
                        >
                            Code
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default memo(ProjectItem);
