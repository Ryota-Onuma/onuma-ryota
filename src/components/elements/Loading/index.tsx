import * as React from 'react';

import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { LoadingStyle as Style } from './style';

const Loading = () => {
  return (
    <Box sx={Style.loadingContainer}>
      <CircularProgress sx={Style.loading} />
    </Box>
  );
};
export default Loading;
