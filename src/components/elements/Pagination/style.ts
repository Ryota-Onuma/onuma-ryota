import { theme } from '@/styles/theme';

export const PaginationStyle = {
  '.MuiPaginationItem-root': {
    color: theme.palette.monotone.white,
    '&:hover': {
      backgroundColor: theme.palette.buttonColor.main,
    },
    '&:active': {
      backgroundColor: theme.palette.buttonColor.main,
    },
  },
  '.MuiButtonBase-root.Mui-selected': {
    '&:hover': {
      backgroundColor: theme.palette.buttonColor.main,
    },
    backgroundColor: theme.palette.buttonColor.main,
  },
};
