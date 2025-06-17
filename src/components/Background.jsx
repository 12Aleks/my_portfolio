"use client"
import clsx from "clsx";
import useDayNightMode from "@/app/customHook/useDayNightMode";

const Background = () => {
    const isNight = useDayNightMode();
    return (
        <div className={clsx(isNight ? 'opacity-8' : 'opacity-[.12]', "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-500 to-stone-950 z-0")} />
    );
};

export default Background;