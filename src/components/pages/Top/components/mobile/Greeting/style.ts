import { theme } from '@/styles/theme';

export const GreetingStyle = {
  greeting: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      gap: 3,
      backgroundColor: theme.palette.primary.main,
      height: '40vh',
    },
    top: {
      title: {
        fontSize: '36px',
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
