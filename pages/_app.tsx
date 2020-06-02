/* eslint-disable jsx-a11y/accessible-emoji */
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styles/globalStyle.css';
import myTheme from '../src/styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>chargome.com</title>
        <meta name="description" content="Personal website of Charly Gomez – software engineer based in Vienna, Austria" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏽‍💻</text></svg>" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto+Mono:ital,wght@0,400;0,700;1,300;1,400&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
