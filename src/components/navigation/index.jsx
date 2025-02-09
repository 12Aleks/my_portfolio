"use client";
import { BtnList, BtnListSmallRight, BtnListSmallLeft } from "@/app/data";
import NavigationButton from "@/components/navigation/NavigationButton";
import { useEffect, useState } from "react";
import useScreen from "@/app/customHook/useScreen";
import ResponsiveComponent from "@/components/ResponsiveComponent";

const Navigation = () => {
    const size = useScreen();
    const [screenSize, setScreenSize] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setScreenSize(size);
    }, [size]);

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            setRotation(prev => prev + 0.2);
        }, 50);

        return () => clearInterval(interval);
    }, [isHovered]);

    if (screenSize === null) return null; // Ждём, пока размер экрана не определится

    const angleIncrement = 360 / BtnList.length;
    const isExtraLarge = screenSize >= 1536;
    const isLarge = screenSize >= 1280;
    const isMedia = screenSize >= 768;

    const radius = isExtraLarge ? "calc(18vw - 1rem)" :
        isLarge ? "calc(30vw - 1rem)" :
            isMedia ? "calc(35vw - 1rem)" : "calc(40vw - 1rem)";


    return (
        <ResponsiveComponent>
            {({ size }) =>
                size >= 639 ? (
                    <div
                        className="fixed h-screen flex items-center justify-center w-full z-0"
                        style={{ perspective: "1400px", opacity: size ? 1 : 0, transition: "opacity 0.3s" }}
                    >
                        <div
                            className="w-max flex items-center justify-center relative text-white group"
                            style={{
                                transform: `rotateY(${rotation}deg) translateY(18vh)`,
                                transformStyle: "preserve-3d",
                            }}
                        >
                            {BtnList.map((item, index) => {
                                const angleRad = (index * angleIncrement * Math.PI) / 180;
                                const x = `calc(${radius} * ${Math.sin(angleRad)})`;
                                const y = "0px";
                                const z = `calc(${radius} * ${Math.cos(angleRad)})`;

                                return (
                                    <NavigationButton
                                        key={item.label}
                                        x={x}
                                        y={y}
                                        z={z}
                                        rotation={rotation}
                                        setIsHovered={setIsHovered}
                                        {...item}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="fixed h-screen flex items-center justify-between w-full z-30"
                         style={{ opacity: size ? 1 : 0, transition: "opacity 0.3s" }}
                    >
                        <div className="flex flex-col space-y-10 relative text-white group px-3">
                            {BtnListSmallLeft.map((item) => (
                                <NavigationButton key={item.label} {...item} />
                            ))}
                        </div>
                        <div className="flex flex-col space-y-10 relative text-white group px-3">
                            {BtnListSmallRight.map((item) => (
                                <NavigationButton key={item.label} {...item} labelDirection="left" />
                            ))}
                        </div>
                    </div>
                )
            }
        </ResponsiveComponent>
    );
};

export default Navigation;
