"use client";
import { useState, useEffect } from "react";

const useDelayedRender = (delay = 500) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoaded(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    return isLoaded;
};

export default useDelayedRender;