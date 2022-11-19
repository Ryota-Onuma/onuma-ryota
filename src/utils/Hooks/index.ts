import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';

export const useSize = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return { isDesktop };
};
