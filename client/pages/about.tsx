import React from 'react';
import Head from 'next/head';
import Team from '../components/Team';
import Statement from '../components/Statement';
import { Container, Divider } from '@material-ui/core';

const About = () => {
  return (
    <Container>
      <Head>
        <title>CodeTech TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Statement />
        <Divider />
        <Team />
      </main>
    </Container>
  );
};

export default About;
