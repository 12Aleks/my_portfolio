"use client";
import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import {useFrame, useLoader} from "@react-three/fiber";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export default function TreeModel({onLoadComplete, ...props}) {
    const modelRef = useRef();
    const lightRef = useRef();
    const groundRef = useRef();
    const texture = useLoader(THREE.TextureLoader, '/ground.webp');

    const { nodes, materials } = useGLTF("/models/tree-transformed.glb", loader => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("/draco/"); // Указываем путь к декодеру
        loader.setDRACOLoader(dracoLoader);
    });

    useEffect(() => {
        if (onLoadComplete) {
            onLoadComplete();
        }
    }, [onLoadComplete]);

    useFrame((state) => {
        modelRef.current.position.y = -3.3 + Math.sin(state.clock.elapsedTime) * 0.01;
        modelRef.current.rotation.set(
            -0.29,
            -state.clock.elapsedTime * 0.015,
            0
        );

        // Pulsating shadow effect
        if (lightRef.current) {
            lightRef.current.shadow.radius = 2 + Math.sin(state.clock.elapsedTime * 3) * 1.5;
        }
    });

    return (
        <group
            ref={modelRef}
            {...props}
            dispose={null}
            position={[0, -3.3, 0]}
            scale={[33, 33, 33]}
            rotation={[-0.29, 0, 0]}
        >
            <directionalLight
                ref={lightRef}
                position={[0, 0.07, 0]}
                intensity={.1}
                color={new THREE.Color(0xFFFFFF)}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.9}
                shadow-camera-far={50}
                shadow-camera-left={-100}
                shadow-camera-right={100}
                shadow-camera-top={100}
                shadow-camera-bottom={-100}
            />


            <mesh
                position={[0, 0.01, 0.01]} // Подогнано под масштаб
                rotation={[-0.01, 0, 0]} // Земля будет располагаться с выпуклой стороной вверх
                scale={[0.185, 0.185, 0.185]} // Масштаб для земли
                receiveShadow
                castShadow
                ref={groundRef}
            >
                {/* Конусная форма земли */}
                <coneGeometry args={[0.20, 0.07, 64]} />
                <meshStandardMaterial
                    map={texture}
                    color="saddlebrown"
                    roughness={1}
                    displacementScale={1}
                />
            </mesh>

            <mesh
                name="Oak_Bark_2_SHD_trunk_0"
                castShadow
                receiveShadow
                geometry={nodes.Oak_Bark_2_SHD_trunk_0.geometry}
                material={materials.SHD_trunk}
                scale={0.01}
            >
            </mesh>
            <mesh
                name="olqeejih_2K_rsSprite1_0"
                castShadow
                receiveShadow
                geometry={nodes.olqeejih_2K_rsSprite1_0.geometry}
                material={materials.rsSprite1}
                scale={0.01}
            >

            </mesh>
        </group>
    );
}

useGLTF.preload("/models/tree-transformed.glb");
