import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const RotatingCube = ({ position }) => {
  const cubeRef = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [clickRotation, setClickRotation] = useState([0, 0, 0]);

  const textures = useLoader(TextureLoader, [
    "src/assets/1.png",
    "src/assets/2.png",
    "src/assets/3.png",
    "src/assets/4.png",
    "src/assets/5.png",
    "src/assets/6.png",
  ]);

  const handleClick = () => {
    const randomRotation = [
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
      Math.random() * Math.PI * 2,
    ];
    setClickRotation(randomRotation);
  };

  useFrame(() => {
    if (cubeRef.current) {
      // Rotación continua
      setRotation((prevRotation) => [
        prevRotation[0] + 0.01,
        prevRotation[1] + 0.01,
        prevRotation[2] + 0.01,
      ]);

      // Aplicar la rotación combinada
      cubeRef.current.rotation.x = rotation[0] + clickRotation[0];
      cubeRef.current.rotation.y = rotation[1] + clickRotation[1];
      cubeRef.current.rotation.z = rotation[2] + clickRotation[2];
    }
  });

  return (
    <mesh ref={cubeRef} onClick={handleClick} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      {textures.map((texture, index) => (
        <meshStandardMaterial
          attach={`material-${index}`}
          map={texture}
          key={index}
        />
      ))}
    </mesh>
  );
};

export default RotatingCube;
