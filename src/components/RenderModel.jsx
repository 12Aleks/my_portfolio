"use client"
import {Suspense} from 'react';
import {Canvas} from "@react-three/fiber"
import clsx from "clsx";
import {Environment} from "@react-three/drei";
import useDelayedRender from "@/app/customHook/useDelayedRender";

const RenderModel = ({children, className, light}) => {
    const isLoaded = useDelayedRender(500);

    return (

      <Canvas className={clsx("w-screen h-screen -z-10 relative transition-opacity duration-1000",
          className,
          isLoaded ? "opacity-100" : "opacity-0"
      )}>
          <Suspense fallback={null}>
              {children}
          </Suspense>

          {
              light &&  <Environment preset={light} />
          }
      </Canvas>
    );
};

export default RenderModel;