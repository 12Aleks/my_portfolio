import {Home, User, FileStack, Mail, Github, Linkedin, Facebook, File} from 'lucide-react';
import Link from "next/link";

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
            return <Home className="w-full h-auto" strokeWidth={1.5}/>
    }
}

const NavigationButton = ({x, y, label, link, icon, newTab}) => {
    return (
        <div className="absolute cursor-pointer" style={{transform: `translate(${x}, ${y})`}}>
            <Link href={link}
                  target={newTab ? "_blank" : "_self"}
                  className="rounded-full flex items-center justify-center"
                  name={label}
                  aria-label={label}>
                 <span className="relative w-14 h-14 p-3 transition-all
                 animate-rotate-icons
                 bg-background/20 backdrop-blur-[6px] rounded-full
                 duration-500 hover:p-3.5 hover:text-amber-600
                 group-hover:pause
                   border-1 border-white hover:border-amber-600 border ">
                     {getIcon(icon)}
                     <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                     <span className="absolute hidden peer-hover:block px-2 py-1 mx-2 left-full
                 top-1/2 -translate-y-1 bg-background text-sm rounded-md shadow-lg whitespace-nowrap">{label}</span>
                 </span>

            </Link>
        </div>
    );
};

export default NavigationButton;