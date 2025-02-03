"use client"
import { useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

export function PaperLantern({ config = {} }) {
    const ref = useRef();
    const refCylinder = useRef();
    const lightRef = useRef();
    const { nodes, materials } = useGLTF('/models/paper-lantern-transformed.glb');

    const {
        floatAmplitude = 0.01,
        floatSpeed = 1,
        lightFlickerSpeed = 5,
        position = [0, 1.5, 0],
        rotationSpeed = 0.02,
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

        if (lightRef.current) {
            lightRef.current.intensity = 1 + Math.sin(time * lightFlickerSpeed) * 0.5;
        }

        flyRefs.current.forEach((fly, idx) => {
            const { radius, speed, verticalAmplitude, offset } = flies[idx];

            if (fly) {
                fly.position.x = position[0] + Math.cos(time * speed + offset) * radius;
                fly.position.z = position[2] + Math.sin(time * speed + offset) * radius;
                fly.position.y = position[1] - 2.8 + Math.sin(time * speed * 2 + offset) * verticalAmplitude;
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
            {/* Shadow Plane */}
            <mesh position={[0, 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshBasicMaterial color="black" opacity={0.7} transparent={true} />
            </mesh>

            {/* Lantern */}
            <mesh
                name="Object_2"
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials['Material.001']}
                rotation={[-Math.PI / 2, 0, 0]}
            />

            <mesh position={[0, 0.8, 0]} ref={refCylinder} castShadow receiveShadow>
                <cylinderGeometry args={[0.01, 0.01, 1, 16]} />
                <meshStandardMaterial color="brown" />
            </mesh>

            <pointLight ref={lightRef} position={[0, -1, 0.3]} intensity={1} color="orange" distance={5} decay={2} />

            <directionalLight
                position={[0, -4, 0]}
                intensity={-1}
                castShadow
                shadowBias={-0.5}  // Adjust shadow softness
            />

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
