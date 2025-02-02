"use client"
import {useEffect, useState} from "react";

const createFireFlies = () => ({
   id: Math.random(),
   top: `${Math.random() * 100}%`,
   left: `${Math.random() * 100}%`,
   animationDuration: `${Math.random() * 5 + 5}s`
})

const FireFlies = () => {
    const [fireFlies, setFireFlies] = useState([]);

    useEffect(() => {
        const intervalShow = () => {
            const newFireFlies = createFireFlies();
            setFireFlies(currentFirefly => [...currentFirefly.slice(-14), newFireFlies])
        }
        const interval = setInterval(intervalShow, 10000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
            {
                fireFlies.map((fireFly, index) => {
                    return <div key={fireFly.id}
                    className="absolute rounded-full w-[10px] h-[10px] bg-firefly-radial"
                    style={{top: fireFly.top, left: fireFly.left, animation: `move ${fireFly.animationDuration} infinite alternate`}}
                    ></div>
                } )
            }
        </div>
    );
};

export default FireFlies;