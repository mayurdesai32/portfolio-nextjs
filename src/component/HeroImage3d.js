import React from "react";
import { Canvas } from "@react-three/fiber";

import Model from "./Model";
const HeroImage3d = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>

      <Canvas>

        <Model />

      </Canvas>
    </div>
  );
};

export default HeroImage3d;



// new11.glb

