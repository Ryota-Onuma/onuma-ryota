import { theme } from '@/styles/theme';

export const GreetingStyle = {
  greeting: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    backgroundColor: theme.palette.primary.main,
  },
  greetingTop: {
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
  greetingBottom: {
    button: {
      p: 0,
      fontSize: '16px',
      lineHight: '16px',
      backgroundColor: theme.palette.buttonColor.main,
      width: '232px',
      height: '60px',
      borderRadius: '9px',
    },
  },
};
