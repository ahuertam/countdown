import { useEffect, useRef } from "react";

const ExternalVideo = ({ videoUrl, position }) => {
  const videoRef = useRef();

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.src = videoUrl;
    videoElement.style.position = "absolute";
    videoElement.style.top = `${position[1]}px`;
    videoElement.style.left = `${position[0]}px`;
    videoElement.style.width = "640px"; // Ajusta el tamaño según sea necesario
    videoElement.style.height = "360px"; // Ajusta el tamaño según sea necesario
  }, [videoUrl, position]);

  return (
    <iframe
      ref={videoRef}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default ExternalVideo;
