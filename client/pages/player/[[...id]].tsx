import React from 'react';
import Head from 'next/head';
import VideoPlayer from '../../components/VideoPlayer';
import MoreVideos from '../../components/MoreVideos';
import { YOUTUBE_ALL_VIDEOS_API } from '../../constants/videoConstants';

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_ALL_VIDEOS_API}&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}

const Video = ({ data }: any) => {
  return (
    <div>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VideoPlayer />
        <MoreVideos data={data} />
      </main>
    </div>
  );
};

export default Video;
