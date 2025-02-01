"use client"

import {BtnList} from "@/app/data";
import NavigationButton from "@/components/navigation/NavigationButton";

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;


    return (
        <div className="fixed h-screen flex items-center justify-center w-full">
            <div className="w-max flex items-center justify-center relative text-white animate-spin-slow hover:pause  group">
                {
                    BtnList.map((item, index) => {
                        const angleRad = (index * angleIncrement * Math.PI) / 180
                        const radius = 'calc(20vw - 1rem)';
                        const x = `calc(${radius}*${Math.cos(angleRad)})`;
                        const y = `calc(${radius}*${Math.sin(angleRad)})`;

                        return <NavigationButton key={item.label} x={x} y={y} {...item} />;
                    })
                }
            </div>
        </div>
    );
};

export default Navigation;