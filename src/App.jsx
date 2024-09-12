import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import * as THREE from "three";
import "./App.css";

function App() {
  return (
    <>
      <Canvas
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          // outputColorSpace: THREE.SRGBColorSpace
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
        }}
      >
        <Experience />
      </Canvas>
      <p className="read-the-docs">Prueba</p>
    </>
  );
}

export default App;
