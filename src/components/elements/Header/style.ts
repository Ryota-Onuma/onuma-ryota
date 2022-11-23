import { theme } from '@/styles/theme';

export const HeaderStyle = {
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    pt: 3,
    mb: '20px',
  },
  headerMenuContainer: {
    color: theme.palette.monotone.white,
    zIndex: 100,
    mr: '20px',
  },
  headerMenu: {
    container: {
      margin: '7px 0',
      width: '30px',
      height: '21px',
      position: 'relative',
      cursor: 'pointer',
    },
    bar: {
      position: 'absolute',
      right: 0,
      left: 0,
      height: '2px',
      borderRadius: ' 1px',
      backgroundColor: theme.palette.monotone.white,
      width: '25px',
      margin: '0 auto',
      transition: '0.3s',
      transformOrigin: '50% right',
    },
    notClicked: {
      barTop: {
        top: 0,
      },
      barBottom: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        margin: 'auto',
      },
      barMiddle: {
        bottom: 0,
      },
    },
    clicked: {
      barTop: {
        top: '9.5px',
        transform: 'rotate(135deg)',
        transition: '0.3s',
      },
      barBottom: {
        transform: 'rotate(-135deg)',
        transition: '0.3s',
        bottom: '9.5px',
      },
      barMiddle: {
        width: 0,
        transition: '0.3s',
      },
    },
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    animation: 'appear .5s ease', // src/styles/custom-nprogress.css
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    backgroundColor: theme.palette.primary.main,
    gap: 6,
    a: {
      textDecoration: 'none',
    },
  },
  linkDisplayName: {
    width: '300px',
    fontSize: '24px',
    color: theme.palette.monotone.white,
    p: 2,
  },
  sns: {
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
    icon: {
      m: 8,
      cursor: 'pointer',
    },
  },
};
