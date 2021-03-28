import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'CodeTech TV' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Learn how to code with free coding videos"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://codetechtv.com/" />
      <meta
        property="og:image"
        content="https://codetechtv.com/images/codetech.png"
      />
    </Head>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
