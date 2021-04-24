import React from 'react';
import Head from 'next/head';
import Team from '../components/Team';

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Team />
      </main>
    </div>
  );
};

export default About;
