import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import Model from "./Model";
import { AmbientLight } from "three";
const HeroImage3d = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // height: "100vh"
      }}
    >
      <Canvas
        flat
        antialias={"true"}
        camera={{ fov: 35 }}
        style={{
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      >
        {/* <Canvas> */}
        {/* <ambientLight intensity={Math.PI / 2} /> */}
        <Environment preset="apartment" />
        <ambientLight intensity={2} />
        <OrbitControls enableZoom={false} />
        <Model />
        {/* <Box position={[1.2, 0, 0]} /> */}
      </Canvas>
    </div>
  );
};

export default HeroImage3d;

// new11.glb
