import { useRouter } from 'next/router';
import ReactPlayer from 'react-player/lazy';
import { defaultVid } from '../constants/videoConstants';

export default function VideoPlayer() {
  const router = useRouter();
  const { id } = router.query;

  const vidUrl = `https://www.youtube.com/watch?v=${id ? id : defaultVid}`;
  return (
    <>
      <div className="flex justify-center max-w-7xl mx-auto sm:px-6 lg:hidden">
        <ReactPlayer
          width="320px"
          height="180px"
          controls={true}
          url={vidUrl}
        />
      </div>
      <div className="w-auto h-auto hidden lg:flex justify-center mx-auto sm:px-6 lg:px-8">
        <ReactPlayer
          // width="960px"
          // height="540px"
          controls={true}
          url={vidUrl}
        />
      </div>
    </>
  );
}
