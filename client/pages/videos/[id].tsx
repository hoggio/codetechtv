import React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';
import VideoRow from '../../components/VideoRow';
import styles from '../../styles/Video.module.css';
import Link from 'next/link';
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
