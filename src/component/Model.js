import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
export default function Model({
  scale = [2.5, 2.2, 2.2],
  position = [0.0, 0.007, 1],
  rotation = [0.3, -0.3, 0],
  ...props
}) {
  const { nodes, materials } = useGLTF("/model.glb");
  return (
    <group
      {...props}
      scale={scale}
      position={position}
      rotation={rotation}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geometry_0.geometry}
        material={nodes.geometry_0.material}
        material-side={THREE.DoubleSide}
      />
    </group>
  );
}

useGLTF.preload("/model.glb");
