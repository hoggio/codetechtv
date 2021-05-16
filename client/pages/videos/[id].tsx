import React from 'react';
import Head from 'next/head';
import VideoList from '../../components/VideoList';
import { YOUTUBE_PLAYLIST_ITEMS_API } from '../../constants/videoConstants';

export async function getServerSideProps({ query }) {
  const { id } = query;

  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}&playlistId=${id}&key=${process.env.YOUTUBE_API_KEY}`
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
        <VideoList data={data} />
      </main>
    </div>
  );
};

export default Video;
