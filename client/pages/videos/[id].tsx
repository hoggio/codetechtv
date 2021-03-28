import React from 'react';
import Head from 'next/head';
import VideoPlayer from '../../components/VideoPlayer';
import VideoRow from '../../components/VideoRow';
import Link from '../../components/Link';
import VideosButton from '../../components/VideosButton';
import { YOUTUBE_PLAYLIST_ITEMS_API } from '../../constants/videoConstants';

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}&key=${process.env.YOUTUBE_API_KEY}`
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
        <VideoRow data={data} />
        <Link href="/videos" passHref>
          <VideosButton />
        </Link>
      </main>
    </div>
  );
};

export default Video;
