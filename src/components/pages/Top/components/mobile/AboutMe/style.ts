import { theme } from '@/styles/theme';

export const AboutMeStyle = {
  aboutMe: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.main,
    gap: 3,
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: theme.palette.fontColor.main,
  },
  aboutMeInner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  aboutMeTop: {
    display: 'flex',
    justifyContent: 'center',
  },
  aboutMeBottom: {
    paragraph: {
      color: theme.palette.monotone.white,
    },
  },
};
