import { Container, Paper } from '@material-ui/core';
import Head from 'next/head';
import VideosButton from '../components/VideosButton';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Paper className={styles.paper}>
          <Container>
            <h1 className={styles.title}>Welcome to CodeTech TV</h1>
          </Container>

          <p className={styles.description}>
            Learn how to code with free coding videos!
          </p>
        </Paper>
        <VideosButton />
      </main>
    </Container>
  );
}
