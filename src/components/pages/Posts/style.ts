import { theme } from '@/styles/theme';

export const PostsStyle = {
  desktop: {
    posts: {
      container: {
        py: 8,
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
      },
      titleContainer: {
        container: {
          width: '100%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-start',
        },
        title: {
          width: '100%',
          fontSize: '48px',
          fontWeight: 'bold',
          color: theme.palette.fontColor.main,
          textAlign: 'left',
        },
        horizonLine: {
          width: '300px',
          position: 'absolute',
          top: '30px',
          left: '270px',
          borderBottom: `1px solid ${theme.palette.fontColor.main}`,
        },
      },
    },
    postCards: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      border: `4px solid ${theme.palette.tagContainerBorderColor.main}`,
      borderRadius: '10px',
      p: 3,
    },
  },
  mobile: {
    posts: {
      container: {
        pb: 8,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
      },
      titleContainer: {
        container: {
          width: '100%',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-start',
        },
        title: {
          width: '100%',
          fontSize: '48px',
          fontWeight: 'bold',
          color: theme.palette.fontColor.main,
          textAlign: 'left',
        },
      },
    },
    postCards: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    },
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      border: `4px solid ${theme.palette.tagContainerBorderColor.main}`,
      borderRadius: '10px',
      p: 3,
    },
  },
};
