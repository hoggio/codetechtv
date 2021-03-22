import React from 'react';
import Head from 'next/head';
import { Button, Container } from '@material-ui/core';
import VideoPlayer from '../../src/components/VideoPlayer';
import VideoRow from '../../src/components/VideoRow';
import styles from '../../styles/Player.module.css';
import Link from 'next/link';
import VideosButton from '../../src/components/VideosButton';
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

const Video = ({ data }) => {
  return (
    <div>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Container>
          <VideoPlayer />
        </Container>
        <VideoRow data={data} />
        <div className={styles.button}>
          <Link href="/videos" passHref>
            <VideosButton />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Video;
