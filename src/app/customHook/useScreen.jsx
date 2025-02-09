"use client";
import { useEffect, useState } from "react";

const useScreen = () => {
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        // Ensure this runs only on the client
        if (typeof window === "undefined") return;

        const updateScreenSize = () => setScreenSize(window.innerWidth);

        // Set initial size
        updateScreenSize();

        // Add event listener
        window.addEventListener("resize", updateScreenSize);

        // Cleanup on unmount
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return screenSize;
};

export default useScreen;