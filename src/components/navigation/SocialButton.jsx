"use client"
import {memo} from 'react';
import {motion} from "framer-motion";
import Link from "next/link";
import {Facebook, File, Github, Linkedin} from "lucide-react";
import {useLocale} from "next-intl";


const getIcon = iconName => {
    switch (iconName) {
        case "linkedin":
            return <Linkedin strokeWidth={1.5} aria-hidden="true"/>;
        case "github":
            return <Github strokeWidth={1.5} aria-hidden="true"/>;
        case "facebook":
            return <Facebook strokeWidth={1.5} aria-hidden="true"/>;
        case "resume":
            return <File strokeWidth={1.5} aria-hidden="true"/>;
        default:
            return null;
    }
}

const SocialButton = (data) => {
    const {label, link, icon, newTab} = data;
    const locale = useLocale();

    return (<motion.div
        initial={{scale: 0, opacity: 0}}
        whileInView={{scale: 1, opacity: 1}}
        transition={{duration: 0.2}}
        viewport={{once: true}}
    >
        <Link
            href={icon.includes('resume') ? `/${locale}${link}` : link}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
            className="rounded-full flex items-center justify-center"
            aria-label={label}
            prefetch={false}
            scroll={false}
        >
                 <span className="relative w-[45px] 2xl:w-12 3xl:w-14 aspect-square transition-all duration-500
                 bg-background/20 backdrop-blur-[6px] p-2 hover:p-2.5 2xl:p-3 2xl:hover:p-3.5
                 text-red-800 hover:text-amber-600 border-2
                 border-red-800 hover:border-amber-600 rounded-full
                 [&_svg]:w-full [&_svg]:h-auto
                 ">
                {getIcon(icon)}
                     <span className="peer  absolute top-0 left-0 w-full h-full"/>
                 <span
                     className="absolute hidden
                      2xl:peer-hover:block
                      bottom-full mb-2 left-1/2 -translate-x-1/2
                      px-2 py-1
                      bg-background text-foreground text-sm
                      rounded-md shadow-lg whitespace-nowrap"
                 >
                   {label}
                 </span>
              </span>

        </Link>
    </motion.div>);
};

export default memo(SocialButton);