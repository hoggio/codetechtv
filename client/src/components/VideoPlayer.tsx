import React from 'react';
import { useRouter } from 'next/router';

import ReactPlayer from 'react-player/youtube';
import styles from '../../styles/VideoPlayer.module.css';

const VideoPlayer = () => {
  const router = useRouter();
  const { id } = router.query;

  const vidId = 'ao2v2UpCIM4&t=644s';
  const url = `https://www.youtube.com/watch?v=${id}`;

  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        className={styles.reactPlayer}
        height="100%"
        width="100%"
        controls={true}
        url={url}
      />
    </div>
  );
};

export default VideoPlayer;
