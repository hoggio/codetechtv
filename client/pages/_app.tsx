import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Layout from '../src/components/Layout';
import Theme from '../src/components/Theme';

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
