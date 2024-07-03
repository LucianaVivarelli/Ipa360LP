import React from "react";
import "./VideoGallery.sass";
import videoIpa from "../../assets/video/videoIpa.mp4";

const VideoGallery = () => {
  return (
    <section className="videoMain">
      <h3 className="AboutTitle">
        IPA Studios Design - <span>Ipanema 360°</span>
      </h3>
      <p>
        Viva na localização mais exclusiva e com a vista mais deslumbrante do
        Rio de Janeiro.
      </p>
      <section className="videoContainer">
        <video
          className="video"
          src={videoIpa}
          autoPlay
          loop
          muted
          playsInline
        />
      </section>
    </section>
  );
};

export default VideoGallery;
