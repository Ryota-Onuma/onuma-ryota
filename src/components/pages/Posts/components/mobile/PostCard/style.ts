import { theme } from '@/styles/theme';

export const PostStyle = {
  a: {
    textDecoration: 'none',
  },
  post: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    cursor: 'pointer',
  },
  postTop: {
    container: {
      width: '100%',
      height: '240px',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    },
  },
  postBottom: {
    container: {
      width: '95%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: 2,
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: theme.palette.fontColor.main,
    },
    date: {
      fontSize: '18px',
      color: theme.palette.monotone.white40,
      display: 'flex',
      alignItems: 'center',
    },
    content: {
      fontSize: '18px',
      color: theme.palette.monotone.white,
    },
  },
};
