import { theme } from '@/styles/theme';

export const HeaderStyle = {
  pc: {
    inner: {
      width: '95%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mx: 'auto',
      py: 0,
      a: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        borderColor: theme.palette.monotone.white,
        mt: 1,
      },
    },
    link: {
      py: 0,
      cursor: 'pointer',
      px: 3,
      borderBottom: `2px solid transparent`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60px',
    },
    linkHover: {
      '&:hover': {
        borderBottom: `2px solid ${theme.palette.monotone.white}`,
      },
    },
    linkContainer: {
      display: 'flex',
    },
    linkDisplayName: {
      color: theme.palette.monotone.white,
    },
    localeMenu: {
      container: {
        position: 'relative',
      },
      icon: {
        pt: 1,
        boxSizing: 'border-box',
      },
      links: {
        position: 'absolute',
        top: '50px',
        right: 'auto',
        left: 'auto',
        px: 1,
        display: 'flex',
        flexDirection: 'column',
        color: theme.palette.monotone.white,
        alignItems: 'center',
        a: {
          textDecoration: 'none',
          color: theme.palette.monotone.white,
        },
      },

      button: {
        my: 0.5,
      },
    },
  },
  mobile: {
    inner: {
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
      boxSizing: 'border-box',
      paddingTop: '50px',
      gap: 8,
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
    locale: {
      container: {
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.monotone.white,
        gap: 4,
        a: {
          color: theme.palette.monotone.white,
          textDecoration: 'none',
        },
      },
      inner: {
        display: 'flex',
      },
      devider: {},
    },
    sns: {
      container: {
        display: 'flex',
        justifyContent: 'center',
      },
      icon: {
        mx: 8,
        cursor: 'pointer',
      },
    },
  },
};
