import { Button, Container } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to CodeTech TV</h1>

        <p className={styles.description}>
          Learn how to code with free coding videos!
        </p>
        <Link href="/videos" passHref>
          <Button variant="contained" color="primary">
            <i className="fas fa-play" />
            Watch Now
          </Button>
        </Link>
      </main>
    </Container>
  );
}
