import React from 'react';
import { useRouter } from 'next/router';

import ReactPlayer from 'react-player/youtube';
import styles from './VideoPlayer.module.css';

const VideoPlayer = () => {
  const router = useRouter();
  const { id } = router.query;

  const vidUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        className={styles.reactPlayer}
        height="100%"
        width="100%"
        controls={true}
        url={vidUrl}
      />
    </div>
  );
};

export default VideoPlayer;
