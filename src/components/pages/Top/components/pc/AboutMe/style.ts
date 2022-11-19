import { theme } from '@/styles/theme';

export const AboutMeStyle = {
  aboutMe: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.main,
    gap: 4,
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: theme.palette.fontColor.main,
  },
  aboutMeInner: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  aboutMeLeft: {
    width: '50%',
    paragraph: {
      color: theme.palette.monotone.white,
    },
  },
  aboutMeRight: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    position: 'relative',
  },
  aboutMeRightImageWrapper: {
    position: 'absolute',
    top: -120,
  },
};
