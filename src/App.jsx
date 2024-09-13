import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Countdown from "./components/Countdown.jsx";
import * as THREE from "three";
import "./App.css";

const Gallery = () => {
  // Implementa tu galería de fotos aquí
  return <div>Galería de Fotos</div>;
};

const Video = () => {
  // Implementa tu video aquí
  return <div>Video</div>;
};
function App() {
  const [code, setCode] = useState("");
  const [scene, setScene] = useState("main");
  const targetDate = new Date("2024-12-20T23:59:59");
  const handleCodeSubmit = (e) => {
    e.preventDefault();
    setScene(code);
  };
  return (
    <>
      <form
        onSubmit={handleCodeSubmit}
        style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}
      >
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Introduce el código"
        />
        <button type="submit">Cargar Escena</button>
      </form>
      <Canvas
        style={{ background: "black" }}
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
        {/*<Experience /> */}
        <ambientLight />
        {scene === "main" && (
          <Countdown
            targetDate={targetDate}
            style={{ position: "absolute", top: 10, right: 10 }}
          />
        )}
        {scene === "gallery" && <Gallery />}
        {scene === "video" && <Video />}
      </Canvas>
    </>
  );
}

export default App;
