import { theme } from '@/styles/theme';

export const PostStyle = {
  desktop: {
    post: {
      container: {
        width: '60%',
        color: theme.palette.monotone.white,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        mx: 'auto',
      },
      top: {
        container: {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 7,
        },
        imageWrapper: {
          position: 'relative',
          width: '100%',
          height: '320px',
          backgroundColor: theme.palette.monotone.black50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        postInfo: {
          container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          },
          title: {
            width: '100%',
            color: theme.palette.fontColor.main,
            fontSize: '34px',
            fontWeight: 'bold',
            textAlign: 'left',
          },
          date: {
            width: '100%',
            fontSize: '18px',
            color: theme.palette.monotone.white,
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
      bottom: {
        container: {},
      },
    },
  },
  mobile: {
    post: {
      container: {
        color: theme.palette.monotone.white,
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        mx: 'auto',
      },
      top: {
        container: {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 7,
        },
        imageWrapper: {
          width: '100%',
          height: '260px',
          backgroundColor: theme.palette.monotone.black50,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        postInfo: {
          container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            px: 2,
            gap: 3,
          },
          title: {
            color: theme.palette.fontColor.main,
            fontSize: '26px',
            fontWeight: 'bold',
          },
          date: {
            fontSize: '18px',
            color: theme.palette.monotone.white,
          },
        },
      },
      bottom: {
        container: {},
      },
    },
  },
};
