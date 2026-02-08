"use client";

import { motion } from "framer-motion";
import { Code2, LucideMonitorSmartphone, Rocket } from "lucide-react";
import Link from "next/link";
import { Links } from '@/app/data';
import SocialButton from "@/components/navigation/SocialButton";
import {useLocale, useTranslations} from "next-intl";


const buttonBaseClass =
    "backdrop-blur text-center border border-amber-600 bg-amber-500 text-[#272728] px-6 py-1.5 sm:py-2 " +
    "uppercase transition duration-200 hover:bg-[#272728] hover:text-amber-600 rounded-sm";

const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.08 * i, duration: 0.45, ease: "easeOut" },
    }),
};

const MainContent = () => {
    const t = useTranslations("home");
    const locale = useLocale();

    const technologies = [
        {
            key: "technology",
            title: t("firstBlockTitle"),
            subtitle: t("firstBlockSubTitle"),
            description: t("firstBlockDescription"),
            Icon: Code2
        },
        {
            key: "responsive",
            title: t("secondBlockTitle"),
            subtitle: t("secondBlockSubTitle"),
            description: t("secondBlockDescription"),
            Icon: LucideMonitorSmartphone
        },
        {
            key: "speed",
            title: t("thirdBlockTitle"),
            subtitle: t("thirdBlockSubTitle"),
            description: t("thirdBlockDescription"),
            Icon: Rocket
        }
    ];

    return (

        <div className="w-full xl:w-1/2 flex">
            <div className="block text-center xl:text-left w-full lg:w-4/5 3xl:w-5/6
                        mx-auto tracking-wide 3xl:tracking-wider">
                <div className="mb-[1vh] sm:mb-[4vh] md:mb-[6vh] lg:mb-[8vh] 3xl-only:mb-[2vh] 4xl:mb-[4vh]">
                    <h1 className="sr-only">{t("title")}</h1>
                    <h2 className="font-marker text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl
                                4xl:text-6xl font-bold mb-2 sm:mb-3 lg:mb-6 tracking-[2px] sm:tracking-[4px]">
                        Front End Polska
                    </h2>
                    <p className="text-sm 2xl:text-base 4xl:text-xl leading-relaxed mb-4 lg:mb-1 text-gray-300">
                        {t("firstSubtitle")}
                    </p>
                    <p className="text-sm 2xl:text-base 4xl:text-xl leading-relaxed hidden lg:block lg:mb-6
                                 3xl:mb-8 text-gray-300 ">
                        {t("secondSubtitle")}
                    </p>

                    <div className="relative w-full mb-[2vh] 4xl:mb-[4vh] hidden 3xl:block">
                        <div className="mx-auto max-w-6xl">

                            <div className="grid grid-cols-3 gap-4">
                                {technologies && technologies.map((tech, i) => (
                                    <motion.article
                                        key={tech.key}
                                        custom={i}
                                        variants={cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.25 }}
                                        whileHover={{ y: -6 }}
                                        className={[
                                            "group relative overflow-hidden rounded-sm",
                                            "bg-background/20 backdrop-blur-md",
                                            "border border-neutral-400/40",
                                            "transition-colors duration-300",
                                            "hover:border-amber-600/80",
                                            "p-5",
                                            "min-h-[190px]",
                                        ].join(" ")}
                                    >
                                        <div
                                            className={[
                                                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                "bg-gradient-to-b from-amber-500/10 via-transparent to-transparent",
                                            ].join(" ")}
                                        />

                                        <div className="relative flex flex-col gap-3">
                                            <div className="flex items-center justify-center">
                                                <div className="h-12 w-12 text-red-800">
                                                    <tech.Icon className="h-full w-full" strokeWidth={1.6} />
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-md font-semibold leading-tight pb-1">
                                                    {tech.title}
                                                </h3>
                                                <p className="text-sm text-neutral-300/90">
                                                    {tech.subtitle}
                                                </p>
                                            </div>

                                            <p className="text-sm leading-relaxed text-neutral-300/85">
                                                {tech.description}
                                            </p>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center xl:justify-start md:flex-row
                                gap-3 sm:gap-4 text-[12px] tracking-[1px] sm:text-sm xl-only:text-base
                                3xl:text-lg px-8 sm:px-3 lg:p-0">
                        <Link href={locale + '/projects'} className={buttonBaseClass}>
                            {t("leftButton")}
                        </Link>
                        <Link href={locale + '/contact'} className={buttonBaseClass}>
                            {t("rightButton")}
                        </Link>
                    </div>


                </div>

                <div className="hidden xl:flex flex-row gap-10">
                    {Links?.map((data) => (
                        <SocialButton key={data.label} {...data} />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default MainContent;