import { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState("");
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const [fontSize, setFontSize] = useState(1);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setFontSize(0.5);
      } else {
        setFontSize(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame(() => {
    if (!isHovered) {
      setRotation((prevRotation) => [
        prevRotation[0],
        prevRotation[1] + 0.01,
        prevRotation[2],
      ]);
    }
  });

  return (
    <Text
      position={[0, 0, 0]}
      fontSize={fontSize}
      rotation={rotation}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {timeLeft}
    </Text>
  );
};

export default Countdown;