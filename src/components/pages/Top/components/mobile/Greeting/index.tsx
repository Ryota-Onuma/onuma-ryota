import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

import { GreetingStyle as Style } from './style';

export const Greeting = () => {
  return (
    <Box sx={Style.greeting}>
      <Box>
        <Typography
          component="h1"
          sx={{
            ...Style.greetingTop.title,
            ...Style.greetingTop.white,
          }}
        >
          Hello
        </Typography>
        <Typography
          component="h1"
          sx={{
            ...Style.greetingTop.title,
            ...Style.greetingTop.white,
          }}
        >
          Welcome to
        </Typography>
        <Typography
          component="h1"
          sx={{
            ...Style.greetingTop.title,
            ...Style.greetingTop.yellow,
          }}
        >
          onuma-ryota.com
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" sx={Style.greetingBottom.button}>
          <Link to="contact" smooth={true}>
            <Typography component="span">CONTACT ME</Typography>
          </Link>
        </Button>
      </Box>
    </Box>
  );
};
