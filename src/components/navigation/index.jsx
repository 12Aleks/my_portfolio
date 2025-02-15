"use client";
import {BtnList, BtnListSmallRight, BtnListSmallLeft} from "@/app/data";
import NavigationButton from "@/components/navigation/NavigationButton";
import {useEffect, useState} from "react";
import useScreen from "@/app/customHook/useScreen";
import ResponsiveComponent from "@/components/ResponsiveComponent";
import {motion} from "framer-motion";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const Navigation = () => {
    const size = useScreen();
    const [screenSize, setScreenSize] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (size) {
            setScreenSize(size);
            const timer = setTimeout(() => setIsReady(true), 500);
            return () => clearTimeout(timer);
        }
    }, [size]);

    if (screenSize === null) return null;

    const angleIncrement = 360 / BtnList.length;
    const isExtraLarge = size >= 1700;
    const isXLLarge = size >= 1280;
    const isLarge = size >= 1024;
    const isMedium = size >= 768;

    return (
        <ResponsiveComponent>
            {({size}) =>
                size >= 639 ? (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="w-full fixed h-screen hidden sm:flex items-center justify-center z-30
                             animate-spin-slow hover:pause group text-neutral-300"
                    >
                        {BtnList.map((btn, index) => {
                            const angleRad = (index * angleIncrement * Math.PI) / 180;
                            const radius = isExtraLarge ? "calc(20vw - 1rem)"
                                : isXLLarge ? "calc(17vw - 1rem)"
                                    : isLarge ? "calc(22vw - 1rem)"
                                        : isMedium ? "calc(32vw - 1rem)" : "calc(40vw - 1rem)";
                            const x = `calc(${radius}*${Math.cos(angleRad)})`;
                            const y = `calc(${radius}*${Math.sin(angleRad)})`;
                            return <NavigationButton key={btn.label} x={x} y={y} {...btn} index={index}/>;
                        })}
                    </motion.div>

                ) : (<div className="fixed h-screen flex items-center justify-between w-full z-30 sm:hidden">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1 }}
                                className="flex flex-col space-y-8 relative text-neutral-300 group px-3 transform translate-y-24">
                                {BtnListSmallLeft.map((item, index) => (
                                    <NavigationButton key={item.label} {...item} index={index}/>
                                ))}
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1 }}
                                className="flex flex-col space-y-8 relative text-neutral-300 group px-3 transform translate-y-24">
                                {BtnListSmallRight.map((item, index) => (
                                    <NavigationButton key={item.label} {...item} index={index} labelDirection="left"/>
                                ))}
                            </motion.div>
                        </div>
                )
            }
        </ResponsiveComponent>
    );
};

export default Navigation;
