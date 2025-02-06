"use client";
import { BtnList } from "@/app/data";
import NavigationButton from "@/components/navigation/NavigationButton";
import { useEffect, useState } from "react";

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;
    const radius = "calc(18vw - 1rem)";

    const [rotation, setRotation] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return; // Pause rotation on hover

        const interval = setInterval(() => {
            setRotation(prev => prev + 0.2);
        }, 50);

        return () => clearInterval(interval);
    }, [isHovered]); // Dependency array includes `isHovered`

    return (
        <div
            className="fixed h-screen flex items-center justify-center w-full z-0"
            style={{ perspective: "1400px" }}
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
                            setIsHovered={setIsHovered} // Pass function to children
                            {...item}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;
