"use client"
import useScreen from "@/app/customHook/useScreen";

const ResponsiveComponent = ({children}) => {
    const size = useScreen();

    return (
        <>
            {children({size})}
        </>
    );
};

export default ResponsiveComponent;