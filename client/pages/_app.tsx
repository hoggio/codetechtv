import React from 'react';
import Head from 'next/head';
import { Provider } from 'next-auth/client';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import '../styles/globals.css';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <>
      <Head>
        <title>CodeTech TV</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Layout>
        {pageLoading ? (
          <Loader />
        ) : (
          <Provider session={pageProps.session}>
            <Component {...pageProps} />
          </Provider>
        )}
      </Layout>
    </>
  );
}
