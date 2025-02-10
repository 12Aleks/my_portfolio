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

    useEffect(() => {
        setScreenSize(size);
    }, [size]);


    if (screenSize === null) return null; // Ждём, пока размер экрана не определится

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
                            className="w-full fixed  h-screen flex items-center justify-center z-30 text-white animate-spin-slow hover:pause group"
                        >
                            {BtnList.map((btn, index) => {
                                const angleRad = (index * angleIncrement * Math.PI) / 180;
                                const radius = isExtraLarge ? "calc(20vw - 1rem)"
                                    : isXLLarge ? "calc(17vw - 1rem)"
                                    : isLarge ? "calc(22vw - 1rem)"
                                    : isMedium ? "calc(32vw - 1rem)" : "calc(40vw - 1rem)";
                                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                                const y = `calc(${radius}*${Math.sin(angleRad)})`;
                                return <NavigationButton key={btn.label} x={x} y={y} {...btn} />;
                            })}
                        </motion.div>

                ) : (
                    <div className="fixed h-screen flex items-center justify-between w-full z-30">
                        <div className="flex flex-col space-y-8 relative text-white group px-3 transform translate-y-24">
                            {BtnListSmallLeft.map((item) => (
                                <NavigationButton key={item.label} {...item} />
                            ))}
                        </div>
                        <div className="flex flex-col space-y-8 relative text-white group px-3 transform translate-y-24">
                            {BtnListSmallRight.map((item) => (
                                <NavigationButton key={item.label} {...item} labelDirection="left"/>
                            ))}
                        </div>
                    </div>
                )
            }
        </ResponsiveComponent>
    );
};

export default Navigation;
