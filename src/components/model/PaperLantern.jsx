"use client"
import React, { useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function PaperLantern({ config = {} }) {
    const ref = useRef();
    const refCylinder = useRef();
    const bottomLightRef = useRef();
    const topLightRef = useRef();
    const lightRef = useRef();
    const { nodes, materials } = useGLTF('/models/paper-lantern-transformed.glb');

    const {
        floatAmplitude = 0.01,
        floatSpeed = 1,
        lightFlickerSpeed = 5,
        position = [0, 1.5, 0],
        rotationSpeed = 0.02,
        mashYRotation = 0,
        mashXRotation = 2,
        bugsPosition = 3,
        lightIntensity = 1,
    } = config;

    const flyCount = 15;
    const flies = useMemo(() => {
        return Array.from({ length: flyCount }, () => ({
            radius: Math.random() * 0.5 + 0.3,
            speed: Math.random() * 2,
            verticalAmplitude: Math.random() * 0.2,
            offset: Math.random() * Math.PI * 2,
        }));
    }, []);

    const flyRefs = useRef([]);

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        if (ref.current) {
            ref.current.position.y = position[1] + Math.sin(time * floatSpeed) * floatAmplitude;
            ref.current.rotation.y = Math.sin(time * floatSpeed) * rotationSpeed;
        }

        if (refCylinder.current) {
            refCylinder.current.position.y = 0.8 + Math.sin(time * floatSpeed) * 0.01;
        }

        if (topLightRef.current) {
            topLightRef.current.intensity = .7 + Math.sin(time * lightFlickerSpeed) * 0.5;
        }

        if (bottomLightRef.current) {
            bottomLightRef.current.intensity = 1 + Math.sin(time * lightFlickerSpeed) * 0.5;
        }

        if (lightRef.current) {
            lightRef.current.intensity = 5 + lightIntensity + Math.sin(time * lightFlickerSpeed) * 0.9;
        }

        flyRefs.current.forEach((fly, idx) => {
            const { radius, speed, verticalAmplitude, offset } = flies[idx];

            if (fly) {
                fly.position.x = position[0] + Math.cos(time * speed + offset) * radius;
                fly.position.z = position[2] + Math.sin(time * speed + offset) * radius;
                fly.position.y = position[1] - bugsPosition + Math.sin(time * speed * 2 + offset) * verticalAmplitude;
            }
        });
    });

    return (
        <group
            ref={ref}
            scale={[1.3, 1.3, 1.3]}
            position={position}
            rotation={[0.15, 0, 0]}
            dispose={null}
        >

            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[10, 10]} />
                <shadowMaterial opacity={0.4} />
            </mesh>

            <pointLight
                ref={lightRef}
                position={[0, .6, 0]}
                intensity={lightIntensity}
                color={new THREE.Color('#1e1d1d')}
                distance={80}
                decay={2}
                castShadow
            />

            <pointLight ref={topLightRef} position={[0, .9, 0.1]} intensity={1} color="orange" distance={5} decay={1} />

            <mesh
                name="Object_2"
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials['Material.001']}
                rotation={[-Math.PI / mashXRotation, 0, mashYRotation]}
            />

            <mesh position={[0, 0.8, 0]} ref={refCylinder} castShadow receiveShadow>
                <cylinderGeometry args={[0.01, 0.01, 2.5, 16]} />
                <meshStandardMaterial color="brown" />
            </mesh>

            <pointLight ref={bottomLightRef} position={[0, -1, 0.3]} intensity={1} color="orange" distance={5} decay={2} />

            {/* "Мухи" */}
            {flies.map((fly, idx) => (
                <mesh key={idx} ref={(el) => (flyRefs.current[idx] = el)}>
                    <sphereGeometry args={[0.01, 8, 8]} />
                    <meshStandardMaterial color="#d97706" emissive="#d97706" emissiveIntensity={1} />
                </mesh>
            ))}
        </group>
    );
}

useGLTF.preload('/models/paper-lantern-transformed.glb');
