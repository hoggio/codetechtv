import React from 'react';
import Head from 'next/head';
import VideoList from '../../components/VideoList';
import WatchButton from '../../components/WatchButton';
import { Container } from '@material-ui/core';
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

export default function Videos({ data }: any) {
  return (
    <div>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <VideoList data={data} />
          <WatchButton data={data} />
        </Container>
      </main>
    </div>
  );
}
