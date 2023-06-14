import React from "react";
import styles from "./YoutubeEmbed.module.css";

const YoutubeEmbed = ({ url }) => {
  const videoId = url.split("v=")[1].split("&")[0];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={styles.videoResponsive}>
      <iframe
        width="853"
        height="480"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
