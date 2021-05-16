import React from 'react';
import Head from 'next/head';
import VideoList from '../components/VideoList';
import { YOUTUBE_ALL_VIDEOS_API } from '../constants/videoConstants';

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

export default function Videos({ data }: any) {
  return (
    <div>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <VideosList data={data} /> */}
        <VideoList data={data} />
      </main>
    </div>
  );
}
