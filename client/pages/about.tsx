import React from 'react';
import Head from 'next/head';
import Team from '../components/Team';
import Statement from '../components/Statement';
import { Container } from '@material-ui/core';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <Container>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Statement />
        <Team />
      </main>
    </Container>
  );
};

export default About;
