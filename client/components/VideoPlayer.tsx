import { useRouter } from 'next/router';
import ReactPlayer from 'react-player/youtube';
import { defaultVid } from '../constants/videoConstants';

export default function VideoPlayer() {
  const router = useRouter();
  const { id } = router.query;

  const vidUrl = `https://www.youtube.com/watch?v=${id ? id : defaultVid}`;
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <ReactPlayer height="100%" width="100%" controls={true} url={vidUrl} />
    </div>
  );
}
