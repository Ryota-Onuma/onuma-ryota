/* eslint-disable import/no-named-as-default */
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

import en from '@/locale/English';
import ja from '@/locale/Japanese';

export const useSize = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return { isDesktop };
};

export const useLocale = () => {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ja;
  return { locale, t };
};
