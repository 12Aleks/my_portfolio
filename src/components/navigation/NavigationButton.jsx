import {Home, User, FileStack, Mail, Github, Linkedin, Facebook, File} from 'lucide-react';
import Link from "next/link";
import ResponsiveComponent from "@/components/ResponsiveComponent";
import clsx from "clsx";
import {motion} from "framer-motion";
import {useLocale} from "next-intl";


const getIcon = iconName => {
    switch (iconName) {
        case "home":
            return <Home className="w-full h-auto" strokeWidth={1.5}/>;
        case "about":
            return <User className="w-full h-auto" strokeWidth={1.5}/>;
        case "projects":
            return <FileStack className="w-full h-auto" strokeWidth={1.5}/>;
        case "contact":
            return <Mail className="w-full h-auto" strokeWidth={1.5}/>;
        case "linkedin":
            return <Linkedin className="w-full h-auto" strokeWidth={1.5}/>;
        case "github":
            return <Github className="w-full h-auto" strokeWidth={1.5}/>;
        case "facebook":
            return <Facebook className="w-full h-auto" strokeWidth={1.5}/>;
        case "resume":
            return <File className="w-full h-auto" strokeWidth={1.5}/>;
        default:
            return <Home className="w-full h-auto " strokeWidth={1.5}/>
    }
}

const item = {
    hidden: {scale: 0},
    show: {scale: 1},
};
const NavLink = motion.create(Link);

const NavigationButton = ({x, y, label, link, icon, newTab, rotation, labelDirection = 'right', index}) => {
    const iconRotation = (x === "0px" ? 0 : 180) - rotation;
    const locale = useLocale();
    const delay = index * 0.3;

    const localizedLink = link.startsWith("/") && !link.endsWith(".pdf") && !link.startsWith(`/${locale}`)
        ? `/${locale}${link}`
        : link;


    return (
        <ResponsiveComponent>

            {
                ({size}) => {
                    return size && size >= 639 ?
                        <div

                            className="absolute cursor-pointer z-50"
                            style={{transform: `translate(${x}, ${y})`}}
                        >
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.2 , delay }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={localizedLink}
                                    target={newTab ? "_blank" : "_self"}
                                    className="rounded-full flex items-center justify-center"
                                    aria-label={label}
                                    name={label}
                                    prefetch={false}
                                    scroll={false}
                                >
              <span className="relative w-13 h-13 p-2.5 2xl:w-13 2xl:h-13 2xl:p-2.5 3xl:w-14 3xl:h-14 3xl:p-3 transition-all
                 animate-rotate-icons
                 bg-background/20 backdrop-blur-[6px] rounded-full
                 duration-500 p-3 2xl:hover:p-3 3xl:hover:p-3.5 hover:text-amber-600
                 group-hover:pause
                   border-1 border-white text-white hover:border-amber-600 border">
                {getIcon(icon)}
                  <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>

                <span
                    className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
                                </Link>
                            </motion.div>
                        </div>
                        : <div className="cursor-pointer backdrop-blur-[6px] rounded-full">
                            <NavLink
                                variants={item}
                                href={link}
                                target={newTab ? "_blank" : "_self"}
                                className="rounded-full flex items-center justify-center "
                                name={label}
                                aria-label={label}>
                <span
                    className="relative w-11 h-11 p-2 transition-all
                    bg-background/20 backdrop-blur-[6px] rounded-full
                    duration-500 hover:p-2.5 hover:text-amber-600
                    group-hover:pause
                    border-1 border-white hover:border-amber-600 border"
                >
                    {getIcon(icon)}
                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                    <span
                        className={clsx(labelDirection === 'left' ? 'right-full left-auto' : '', "absolute hidden peer-hover:block px-2 py-1 mx-2 left-full top-1/2 -translate-y-1 bg-background text-sm rounded-md shadow-lg whitespace-nowrap")}>
                        {label}
                    </span>
                </span>
                            </NavLink>
                        </div>

                }
            }

        </ResponsiveComponent>
    );
};

export default NavigationButton;



