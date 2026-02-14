"use client"

import {Canvas} from "@react-three/fiber"
import clsx from "clsx";
import {Environment} from "@react-three/drei";
import useDelayedRender from "@/app/customHook/useDelayedRender";

const RenderModel = ({children, className, light}) => {
    const isLoaded = useDelayedRender(500);

    return (
        <Canvas
            dpr={[1, 1.5]}
            gl={{ 
                antialias: true, 
                powerPreference: "high-performance",
                precision: "mediump",
                alpha: true,
                stencil: false,
                depth: true,
                logarithmicDepthBuffer: false
            }}
            className={clsx(
                "w-screen h-screen -z-10 relative transition-opacity duration-1000",
                className,
                isLoaded ? "opacity-100" : "opacity-0"
            )}
        >
            {children}
            {light && <Environment preset={light} />}
        </Canvas>
    );
};

export default RenderModel;