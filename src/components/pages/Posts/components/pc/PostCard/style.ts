import { theme } from '@/styles/theme';

export const PostStyle = {
  a: {
    textDecoration: 'none',
  },
  post: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
  },
  postLeft: {
    container: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: 2,
    },
    title: {
      fontSize: '36px',
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
  postRight: {
    container: {
      width: '50%',
      height: '240px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
  },
};
