import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import hero from "./../../public/hero.png";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  Environment,
  useProgress,
  Html,
} from "@react-three/drei";
import Model from "./Model";
import { AmbientLight } from "three";
import Image from "next/image";

const Loader = ({scale}) => {

console.log(scale,"scale")
  return (
    <Html center>
      <div
        style={{
          textAlign: "center",
          width: scale > 1.7 ? 430:250,
          height: scale > 1.7 ? 430:250, 
        }}
      >
  
        <Image
          src={hero}
          className="modelImg"
          style={{
            width: "100%",
            height: "100%",
          }}
          alt="hero"
          priority={true}
          placeholder="empty"
        />
      </div>
    </Html>
  );
};










const HeroImage3d = () => {

  const [scale, setScale] = useState(2.1); 


  useEffect(() => {
    const handleResize = () => {

      if(window.innerWidth<408){
setScale(1.5);
      }else if (window.innerWidth < 600) {
setScale(1.8)
      }
 
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);




  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >

    
      <Canvas
        flat
        antialias={"true"}
        camera={{ fov: 35 }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          position: "absolute",
   
          top:scale<1.9?(scale<1.4?"0%" :"-7%"):'7%',
          zIndex: 2,
        }}
      >
        <Suspense fallback={<Loader scale={scale} />}>
          <Environment preset="apartment" />
          <ambientLight intensity={2} />
          <OrbitControls enableZoom={false} />
          <Model scale={[scale, scale, scale]} />
        </Suspense>
      </Canvas>
    </div>
  );
};


export default HeroImage3d;


