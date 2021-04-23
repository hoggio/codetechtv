import React from 'react';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player/youtube';
import { defaultVid } from '../constants/videoConstants';

const VideoPlayer = () => {
  const router = useRouter();
  const { id } = router.query;

  const vidUrl = `https://www.youtube.com/watch?v=${id ? id : defaultVid}`;

  return (
    <div>
      <ReactPlayer height="100%" width="100%" controls={true} url={vidUrl} />
    </div>
  );
};

export default VideoPlayer;
