import { extend } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "../CustomObject.jsx";

extend({ OrbitControls });

export default function Gallery() {
  const groupRef = useRef();

  return (
    <>
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>

      <CustomObject />
    </>
  );
}
