import { Box, Typography } from '@mui/material';

import { GreetingStyle as Style } from './style';

export const Greeting = () => {
  return (
    <Box sx={Style.greeting.container}>
      <Box>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            ...Style.greeting.top.title,
            ...Style.greeting.top.white,
          }}
        >
          Hello.
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            ...Style.greeting.top.title,
            ...Style.greeting.top.white,
          }}
        >
          Welcome to
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            ...Style.greeting.top.title,
            ...Style.greeting.top.yellow,
          }}
        >
          onuma-ryota.com.
        </Typography>
      </Box>
    </Box>
  );
};
