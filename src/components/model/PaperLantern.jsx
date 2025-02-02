"use client"
import { useRef } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

export function PaperLantern(props) {
    const ref = useRef();
    const { nodes, materials } = useGLTF('/models/paper-lantern-transformed.glb');

    useFrame((state) => {
        ref.current.position.y = 1.5 + Math.sin(state.clock.elapsedTime) * 0.01;
        ref.current.position.x = Math.sin(state.clock.elapsedTime) * 0.01;
        ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.02;
    });

    return (
        <group
            ref={ref}
            scale={[1.3, 1.3, 1.3]}
            position={[0, 1.5, 0]}
            rotation={[0.15, 0, 0]}
            {...props}
            dispose={null}
        >
            <mesh
                name="Object_2"
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials['Material.001']}
                rotation={[-Math.PI / 2, 0, 0]}
            />

            {/* Добавляем свет за моделью */}
            <pointLight
                position={[0, -1, .3]}
                intensity={1}
                color="orange"
                distance={5}
                decay={2}
            />
        </group>
    );
}

useGLTF.preload('/models/paper-lantern-transformed.glb');
