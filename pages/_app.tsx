/* eslint-disable jsx-a11y/accessible-emoji */
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import '@fontsource/roboto-mono';
import '@fontsource/open-sans';

import GlobalStyle from '../src/styles/globalStyle.css';
import '../src/styles/globals.css';
import '../src/styles/prism.css';
import myTheme from '../src/styles/theme';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>chargome.com</title>
      <meta name="description" content="Personal website of Charly Gomez – software engineer based in Vienna, Austria" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏽‍💻</text></svg>" />
      <meta name="keywords" content="Charly Gomez, Software engineer, Freelancer, React" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
      <link rel="apple-touch-icon" href="/images/icons/icon-144x144.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#317EFB" />
    </Head>
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
