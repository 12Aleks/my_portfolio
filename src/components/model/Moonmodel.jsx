"use client";
import { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export function MoonModel({ onLoaded = () => {}, config = {} }) {
    const lightRef = useRef();
    const moonRef = useRef();
    const texture = useLoader(THREE.TextureLoader, "/moon.webp");

    const { lightIntensity = 1, flickerSpeed = 1.5 } = config;

    useEffect(() => {
        if (texture) onLoaded(); // сообщаем, что модель загружена
    }, [texture]);

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        if (lightRef.current) {
            lightRef.current.intensity =
                1 + lightIntensity + Math.sin(time * flickerSpeed) * 0.9;
        }

        if (moonRef.current) {
            const t = (Math.sin(time * 0.5) + 1) / 2;
            const color1 = new THREE.Color(0xff6666);
            const color2 = new THREE.Color(0xff0000);
            const blendedColor = color1.clone().lerp(color2, t);
            moonRef.current.material.color.set(blendedColor);

            moonRef.current.rotation.y += 0.00015;
        }
    });

    return (
        <>
            <directionalLight
                ref={lightRef}
                position={[0, 10, -5]}
                intensity={lightIntensity}
                color={new THREE.Color(0xff9999)}
                castShadow
                shadow-mapSize-width={1048}
                shadow-mapSize-height={1048}
            />
            <mesh ref={moonRef} position={[0, 0, 0]} scale={[2.4, 2.4, 2.4]}>
                <sphereGeometry args={[1.2, 128, 128]} />
                <meshPhysicalMaterial
                    map={texture}
                    roughness={0.8}
                    metalness={0.1}
                    emissive={0xff4444}
                    emissiveIntensity={0.3}
                />
            </mesh>
        </>
    );
}
