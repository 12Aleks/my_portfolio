import { useState, useEffect } from "react";
import { BtnList, BtnListSmallRight, BtnListSmallLeft } from "@/app/data";
import NavigationButton from "@/components/navigation/NavigationButton";
import useScreen from "@/app/customHook/useScreen";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const Navigation = () => {
    const size = useScreen();

    const breakpoints = {
        isExtraLarge: size >= 1700,
        isXLLarge: size >= 1280,
        isLarge: size >= 1024,
        isMedium: size >= 768,
    };

    if (!size) return null; // <-- Теперь хук useScreen уже вызван

    const sizeLimit = breakpoints.isExtraLarge ? "40vw"
        : breakpoints.isXLLarge ? "34vw"
            : breakpoints.isLarge ? "44vw"
                : breakpoints.isMedium ? "64vw"
                    : "80vw";

    const radius = `calc(${sizeLimit} / 2 - 1rem)`;

    if (size < 639) {
        return (
            <div className="fixed h-screen flex items-center justify-between w-full z-30 sm:hidden">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col space-y-8 relative text-neutral-300 px-3 transform translate-y-24">
                    {BtnListSmallLeft.map((item, index) => (
                        <NavigationButton key={item.label} {...item} index={index} />
                    ))}
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col space-y-8 relative text-neutral-300 px-3 transform translate-y-24">
                    {BtnListSmallRight.map((item, index) => (
                        <NavigationButton key={item.label} {...item} index={index} labelDirection="left" />
                    ))}
                </motion.div>
            </div>
        );
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="fixed sm:flex items-center justify-center z-30 rounded-full animate-spin-slow hover:pause text-neutral-300"
            style={{ width: sizeLimit, height: sizeLimit }}
        >
            {BtnList.map((btn, index) => {
                const angleRad = (index * 360 / BtnList.length) * (Math.PI / 180);
                return (
                    <NavigationButton
                        key={btn.label}
                        x={`calc(${radius} * ${Math.cos(angleRad)})`}
                        y={`calc(${radius} * ${Math.sin(angleRad)})`}
                        {...btn}
                        index={index}
                    />
                );
            })}
        </motion.div>
    );
};

export default Navigation;
