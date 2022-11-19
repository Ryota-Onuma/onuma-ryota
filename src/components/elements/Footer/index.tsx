import { Container, Typography } from '@mui/material';

import { FooterStyle as Style } from './style';

export const Footer = () => (
  <Container
    component="footer"
    disableGutters={true}
    sx={Style.footer}
    maxWidth={false}
  >
    <Typography sx={Style.footerInner}>
      <>
        ©&ensp;{new Date().getFullYear() === 2022 ? '' : '2022 - '}
        {new Date().getFullYear().toString()}&ensp;&ensp;onuma-ryota.com
      </>
    </Typography>
  </Container>
);
