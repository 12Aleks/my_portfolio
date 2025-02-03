"use client"

import {Suspense} from 'react';
import {Canvas} from "@react-three/fiber"
import clsx from "clsx";
import {Environment} from "@react-three/drei";

const RenderModel = ({children, className, light}) => {
    return (
      <Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>
          <Suspense fallback={null}>
              {children}
          </Suspense>
          {
              light &&  <Environment preset={light}/>
          }
      </Canvas>
    );
};

export default RenderModel;