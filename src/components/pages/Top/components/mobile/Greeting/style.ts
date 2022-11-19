import { theme } from '@/styles/theme';

export const GreetingStyle = {
  greeting: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    backgroundColor: theme.palette.primary.main,
  },
  greetingTop: {
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
  greetingBottom: {
    button: {
      p: 0,
      fontSize: '14px',
      lineHight: '16px',
      backgroundColor: theme.palette.buttonColor.main,
      width: '176px',
      height: '46px',
      borderRadius: '9px',
    },
  },
};
