"use client"
import { useState, useEffect } from 'react';

const useDayNightMode = () => {
    const [isNight, setIsNight] = useState(false);

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 18 || currentHour < 6) {
            setIsNight(true);
        } else {
            setIsNight(false);
        }
    }, []);

    return isNight;
};

export default useDayNightMode;