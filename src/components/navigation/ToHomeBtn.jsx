import Link from "next/link";
import {Home} from "lucide-react";

const ToHomeBtn = () => {
    return (
        <Link
            href={'/'}
            aria-label="To Home"
            name="Home"
            target="_self"
            className="rounded-full flex items-center justify-center fixed top-20 left-5 z-20"
        >
            <span className="relative w-14 h-14 p-3 transition-all
                bg-background/20 backdrop-blur-[6px] rounded-full
                 duration-500  hover:text-amber-600
                 group-hover:pause cursor-pointer
                   border-1 border-white hover:border-amber-600 border text-white">
                     <Home className="h-auto w-full" strokeWidth={1.5}/>
                     <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                     <span className="absolute hidden peer-hover:block px-2 py-1 mx-2 left-full
                 top-1/2 -translate-y-1 bg-background text-sm rounded-md shadow-lg whitespace-nowrap">Home</span>
                 </span>

        </Link>
    );
};

export default ToHomeBtn;