import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({
  scale = [1.7, 1.7, 1],
  position = [-0.2, 0.2, 1],
  ...props
}) {
  const { nodes, materials } = useGLTF("/model.glb");
  return (
    <group {...props} scale={scale} position={position} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geometry_0.geometry}
        material={nodes.geometry_0.material}
      />
    </group>
  );
}

useGLTF.preload("/model.glb");
