import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
      <p className="read-the-docs">Prueba</p>
    </>
  );
}

export default App;
