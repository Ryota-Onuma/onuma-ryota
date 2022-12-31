import { theme } from '@/styles/theme';

export const TocStyle = {
  desktop: {
    toc: {
      container: {
        border: `2px solid ${theme.palette.tagContainerBorderColor.main}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        py: 2,
      },
      ul: {
        margin: 0,
      },
      title: {
        color: theme.palette.monotone.white,
        textAlign: 'center',
        mb: 1,
        mx: 0,
      },
      link: {
        textDecoration: 'none',
        color: theme.palette.monotone.white,
        my: 0.5,
        display: 'inline-block',
      },
    },
  },
  mobile: {
    toc: {
      container: {
        border: `2px solid ${theme.palette.tagContainerBorderColor.main}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        py: 2,
      },
      ul: {
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: 1,
      },
      title: {
        color: theme.palette.monotone.white,
        textAlign: 'center',
        mb: 1,
        mx: 0,
        fontSize: '18px',
        lineHeight: '18px',
      },
      link: {
        textDecoration: 'none',
        color: theme.palette.monotone.white,
        display: 'inline-block',
        verticalAlign: 'text-top',
        fontSize: '18px',
        lineHeight: '22px',
      },
    },
  },
};
