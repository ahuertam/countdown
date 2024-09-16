import { extend } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import RotatingCube from "./RotatingCube.jsx";

extend({ OrbitControls });

export default function Gallery() {
  const groupRef = useRef();

  return (
    <>
      <group ref={groupRef}>
        <RotatingCube position={[0, 0, 0]} />
        <RotatingCube position={[2, 0, 0]} />
        <RotatingCube position={[-2, 0, 0]} />
      </group>
    </>
  );
}
