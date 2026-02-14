"use client"
import {useEffect, useState} from "react";

const createFireFlies = () => ({
   id: Math.random(),
   top: `${Math.random() * 100}%`,
   left: `${Math.random() * 100}%`,
   animationDuration: `${Math.random() * 5 + 5}s`
})

const MAX_FIREFLIES = 15;

const FireFlies = () => {
    const [fireFlies, setFireFlies] = useState([]);

    useEffect(() => {
        // Pregenerate initial fireflies to avoid animation jank
        const initial = Array.from({length: 3}, createFireFlies);
        setFireFlies(initial);

        const intervalShow = () => {
            const newFireFlies = createFireFlies();
            setFireFlies(currentFirefly => {
                const updated = [...currentFirefly.slice(-MAX_FIREFLIES + 1), newFireFlies];
                return updated;
            })
        }
        const interval = setInterval(intervalShow, 10000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            {
                fireFlies.map((fireFly, index) => {
                    return <div key={fireFly.id}
                    className="absolute rounded-full w-[8px] h-[8px] xxs:w-[10px] xxs:h-[10px] bg-firefly-radial"
                    style={{top: fireFly.top, left: fireFly.left, animation: `move ${fireFly.animationDuration} infinite alternate`}}
                    ></div>
                } )
            }
        </div>
    );
};

export default FireFlies;