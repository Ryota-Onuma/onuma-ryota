import { theme } from '@/styles/theme';

export const LoadingStyle = {
  loadingPage: {
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    top: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    jutifyContent: 'center !important',
    zIndex: 100,
  },
  loadingContainer: {
    my: 0,
    mx: 'auto',
  },
  loading: {
    color: theme.palette.fontColor.main,
  },
};
