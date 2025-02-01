"use client"
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function AbstractModel(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/abstract-transformed.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="GLTF_SceneRootNode">
                    <group name="Icosphere_0">
                        <mesh
                            name="Object_4"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.base}
                        />
                    </group>
                    <group name="Icosphere001_1">
                        <mesh
                            name="Object_7"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_7.geometry}
                            material={materials.material}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/abstract-transformed.glb')