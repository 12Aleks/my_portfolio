"use client"
import { useEffect, useState } from "react";
import clsx from "clsx";

const createPetal = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
    animationDelay: `${Math.random() * 3}s`,
    rotation: `${Math.random() * 360}deg`,
});

const Petals = () => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        const intervalShow = () => {
            const newPetal = createPetal();
            setPetals(currentPetals => [...currentPetals.slice(-8), newPetal]);
        };
        const interval = setInterval(intervalShow, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed z-20 h-[250px] w-[200px] 2xl:w-[200px] 2xl:h-[250px] 3xl:w-[250px] 3xl:md:h-[350px] flex items-center justify-center mb-0 xxs:mb-0 xs:mt-0 sm:mt-14">
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className={clsx(
                        "absolute rounded-full bg-pink-200 opacity-0 animate-petals w-0.5 h-0.5 3xl:w-[3px] 3xl:h-[3px]"
                    )}
                    style={{
                        top: petal.top,
                        left: petal.left,
                        animationDuration: petal.animationDuration,
                        animationDelay: petal.animationDelay,
                        transform: `rotate(${petal.rotation})`,
                        borderRadius: '50% 50% 50% 0',
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Petals;
