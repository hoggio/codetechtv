import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Layout from '../components/Layout';
import Theme from '../components/Theme';

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
