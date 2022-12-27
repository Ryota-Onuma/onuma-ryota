import React from 'react';

import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';

import '@/styles/reset.css';
import '@/styles/prism.css';

import 'nprogress/nprogress.css';
import '@/styles/custom-nprogress.css';
import '@/styles/blog-card.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
