import { theme } from '@/styles/theme';

export const GreetingStyle = {
  greeting: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      mb: '80px',
      backgroundColor: theme.palette.primary.main,
    },
    top: {
      title: {
        fontSize: '72px',
        fontWeight: 'bold',
      },
      white: {
        color: theme.palette.monotone.white,
      },
      yellow: {
        color: theme.palette.fontColor.main,
      },
    },
  },
};
