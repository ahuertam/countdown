import { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const Game = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("¡Tiempo terminado!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  useFrame(() => {
    if (rotation[1] !== 0) {
      setRotation([0, rotation[1] - 0.01, 0]);
    }
  });

  return (
    <>
      <Text
        position={[0, 0, 0]}
        fontSize={1}
        rotation={rotation}
        onPointerOver={() => setRotation([0, Math.PI / 2, 0])}
        onPointerOut={() => setRotation([0, 0, 0])}
      >
        {timeLeft}
      </Text>
    </>
  );
};

export default Game;
