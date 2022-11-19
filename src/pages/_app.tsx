import React from 'react';

import { AppProps } from 'next/app';

import '@/styles/reset.css';
import '@/styles/prism.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
