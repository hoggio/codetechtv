import React from 'react';
import Head from 'next/head';
import { Button, Container } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';
import styles from '../../styles/Player.module.css';
import Link from 'next/link';

const Player = () => {
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
        <div className={styles.button}>
          <Link href="/videos" passHref>
            <Button variant="contained" color="primary">
              Back to videos
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Player;
