import React, { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const VideoPlane = ({ videoUrl, position }) => {
  const videoRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "Anonymous";
    video.loop = true;
    video.muted = true;
    video.play();

    const texture = new THREE.VideoTexture(video);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const geometry = new THREE.PlaneGeometry(4, 2.25);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);

    scene.add(mesh);

    videoRef.current = video;

    return () => {
      scene.remove(mesh);
      video.pause();
      video.src = "";
    };
  }, [videoUrl, position, scene]);

  return null;
};

export default VideoPlane;
