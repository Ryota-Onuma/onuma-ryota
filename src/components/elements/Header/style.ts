import { theme } from '@/styles/theme';

export const HeaderStyle = {
  header: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    py: 2,
    px: 6,
  },
  headerInner: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.monotone.white,
    cursor: 'pointer',
    borderBottom: `1px solid transparent`,
    pb: 1.5,
    px: 1.5,
    '&:hover': {
      borderColor: theme.palette.monotone.white,
    },
  },
  mobileHeader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    pt: 3,
    position: 'relative',
    mb: '20px',
  },
  mobileHeaderIconContainer: {
    color: theme.palette.monotone.white,
    zIndex: 100,
  },
  mobileHeaderOverlay: {
    position: 'absolute',
    top: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mobilelinkContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    a: {
      textDecoration: 'none',
    },
  },
  mobileLinkDisplayName: {
    fontSize: '36px',
    color: theme.palette.monotone.white,
  },
};
