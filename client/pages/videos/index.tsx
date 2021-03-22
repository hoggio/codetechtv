import React from 'react';
import Head from 'next/head';
import VideoList from '../../src/components/VideoList';
import styles from '../../styles/Home.module.css';
import { Container } from '@material-ui/core';
import { YOUTUBE_PLAYLIST_ITEMS_API } from '../../src/constants/videoConstants';

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
      <main className={styles.main}>
        <Container>
          <VideoList data={data} />
        </Container>
      </main>
    </div>
  );
}
