import ExternalVideo from "./ExternalVideo";

const Video = () => {
  return (
    <>
      {/*<ExternalVideo
        videoUrl="https://drive.google.com/uc?export=preview&id=1yBXIxaIYGSa00ka8k8xezUR3HhPVxxE5"
        position={[0, 10, 0]}
      /> //*/}
      <ExternalVideo
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?si=k14806i2vw0lBz9T"
        position={[0, 0, 0]}
      />
    </>
  );
};

export default Video;
