"use client"
import React, { useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BambooModel({ config = {} }) {
    const ref = useRef();
    const lightRef = useRef();
    const { nodes, materials } = useGLTF('/models/bamboo-transformed.glb');

    const {
        floatAmplitude = 0.01,
        floatSpeed = 1,
        swayAmplitude = 0.01,
        swaySpeed = 0.5,
        rotateY = .02,
        lightIntensity = 1,
        flickerSpeed = 2,
        light = 0
    } = config;

    const randomPhaseShift = useMemo(() => Math.random() * Math.PI * 2, []);

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        if (ref.current) {
            ref.current.position.y = -4.2 + Math.sin(time * floatSpeed + randomPhaseShift) * floatAmplitude;
            ref.current.rotation.z = Math.sin(time * swaySpeed + randomPhaseShift) * swayAmplitude;
        }

        if (lightRef.current) {
            lightRef.current.intensity = 5 + lightIntensity + Math.sin(time * flickerSpeed) * 0.9;
        }
    });

    return (
        <>
            {/* Лунный свет ВНЕ группы */}
            <pointLight
                ref={lightRef}
                position={[0, 1, 0]} // Теперь свет находится точно над моделью
                intensity={lightIntensity}
                color={new THREE.Color(0x9ecfff)}
                distance={10}
                decay={2}
                castShadow
            />

            {/* Эффект ореола */}
            { light && <mesh position={[0, 1, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshBasicMaterial color={new THREE.Color(0x9ecfff)} transparent opacity={0.3} />
            </mesh>}

            {/* Группа с моделью бамбука */}
            <group
                scale={[0.01, 0.01, 0.01]}
                position={[0, -4.2, 0]}
                dispose={null}
                ref={ref}
            >
                <mesh
                    name="Object_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.Leaves}
                    rotation={[-Math.PI / 2, 0, rotateY]}
                />
                <mesh
                    name="Object_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Trunk}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
            </group>
        </>
    );
}

useGLTF.preload('/models/bamboo-transformed.glb');
