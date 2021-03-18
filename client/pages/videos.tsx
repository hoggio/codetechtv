import Head from 'next/head';
import Player from '../components/Player';
import styles from '../styles/Home.module.css';

export default function Videos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Videos page</h1>
        <Player />
      </main>
    </div>
  );
}
