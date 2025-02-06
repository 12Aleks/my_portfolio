"use client"
// https://github.com/pmndrs/gltfjsx
import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from "three";

export default function TreeModel({ onLoadComplete, ...props }) {
    const modelRef = useRef();
    const lightRef = useRef();
    const { nodes, materials } = useGLTF('/models/tree-transformed.glb');

    useEffect(() => {
        if (onLoadComplete) {
            onLoadComplete();
        }
    }, [onLoadComplete]);

    useFrame((state) => {
        // Floating animation
        modelRef.current.position.y = -3.1 + Math.sin(state.clock.elapsedTime) * 0.01;
        modelRef.current.rotation.y = state.clock.elapsedTime * 0.015;

        // Pulsating shadow effect
        if (lightRef.current) {
            lightRef.current.shadow.radius = 2 + Math.sin(state.clock.elapsedTime * 3) * 1.5; // Pulsation between 0.5 and 3.5
        }
    });

    return (
        <group ref={modelRef} {...props} dispose={null} position={[0, -3.1, 0]} scale={[28, 28, 28]}>
            {/* Pulsating Shadow Light */}
            <directionalLight
                ref={lightRef}
                position={[5, 10, 5]} // Light coming from above
                intensity={2}
                color={new THREE.Color('black')}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.5}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />

            <mesh
                name="Oak_Bark_2_SHD_trunk_0"
                castShadow
                receiveShadow
                geometry={nodes.Oak_Bark_2_SHD_trunk_0.geometry}
                material={materials.SHD_trunk}
                scale={0.01}
            />
            <mesh
                name="olqeejih_2K_rsSprite1_0"
                castShadow
                receiveShadow
                geometry={nodes.olqeejih_2K_rsSprite1_0.geometry}
                material={materials.rsSprite1}
                scale={0.01}
            />
        </group>
    );
}

useGLTF.preload('/models/tree-transformed.glb');
