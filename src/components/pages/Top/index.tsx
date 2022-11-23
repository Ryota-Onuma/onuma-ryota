import { Container } from '@mui/material';

import { Greeting as MobileGreeting } from '@/components/pages/Top/components/mobile/Greeting';
import { Greeting as PCGreeting } from '@/components/pages/Top/components/pc/Greeting';
import { PageProps } from '@/types';

import { TopStyle as Style } from './stype';

const Top: React.FC<PageProps> = ({ isDesktop }) => {
  return (
    <>
      {isDesktop ? (
        <Container sx={Style.desktop.top}>
          <PCGreeting />
        </Container>
      ) : (
        <Container sx={Style.mobile.top}>
          <MobileGreeting />
        </Container>
      )}
    </>
  );
};

export default Top;
