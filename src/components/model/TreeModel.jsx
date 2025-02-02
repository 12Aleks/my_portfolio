"use client"
// https://github.com/pmndrs/gltfjsx
import  { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export default function TreeModel({ onLoadComplete, ...props }) {
    const modelRef = useRef();
    const { nodes, materials } = useGLTF('/models/tree-transformed.glb');


    useEffect(() => {
        // Проверяем, передана ли функция обратного вызова
        if (onLoadComplete) {
            onLoadComplete();
        }
    }, [onLoadComplete]);


    useFrame((state) => {
       console.log(state.clock)
       modelRef.current.position.y = -1.6 + Math.sin(state.clock.elapsedTime)*0.01; //top-bottom
       modelRef.current.rotation.y = state.clock.elapsedTime * 0.015; //rotation
    })

    return (
        <group
             ref={modelRef}
             {...props} dispose={null}
             position={[0, -1.6, 0]}
             scale={[16,16,16]}
        >
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
    )
}

useGLTF.preload('/models/tree-transformed.glb')