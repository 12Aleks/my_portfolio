// Model "Pine tree low poly" by doublesob (https://sketchfab.com/ssorpeg)
// Licensed under CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)

"use client"
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PineModel(props) {
    const { nodes, materials } = useGLTF('/models/pine_tree_low_poly-transformed.glb')
    return (
        <group
            {...props}
            dispose={null}
            position={[0, 0, 0]}
            scale={[33, 33, 33]}
        >
            <mesh
                name="Object_2"
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.Tex_0104_0_dds}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                name="Object_3"
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials.Tex_0108_0_dds}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/models/pine_tree_low_poly-transformed.glb')