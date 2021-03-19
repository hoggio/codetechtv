import React from 'react';
import ReactPlayer from 'react-player/youtube';
import styles from '../styles/VideoPlayer.module.css';

const VideoPlayer = () => {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        className={styles.reactPlayer}
        height="100%"
        width="100%"
        url="https://www.youtube.com/watch?v=ao2v2UpCIM4&t=644s"
      />
    </div>
  );
};

export default VideoPlayer;
