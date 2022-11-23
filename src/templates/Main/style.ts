import { theme } from '@/styles/theme';

export const MainStyle = {
  main: {
    backgroundColor: theme.palette.primary.main,
    width: '100vw',
    minHeight: '100vh',
    p: 0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  show: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
};
