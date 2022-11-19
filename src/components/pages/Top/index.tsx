import { Container, Box } from '@mui/material';

import { AboutMe as MobileAboutMe } from '@/components/pages/Top/components/mobile/AboutMe';
import { Greeting as MobileGreeting } from '@/components/pages/Top/components/mobile/Greeting';
import { AboutMe as PCAboutMe } from '@/components/pages/Top/components/pc/AboutMe';
import { Greeting as PCGreeting } from '@/components/pages/Top/components/pc/Greeting';
import { SkillSets as PCSkillSets } from '@/components/pages/Top/components/pc/SkillSets';
import { PageProps } from '@/types';

import { TopStyle as Style } from './stype';

const Top: React.FC<PageProps> = ({ isDesktop }) => {
  return (
    <>
      {isDesktop ? (
        <Container sx={Style.desktop.top}>
          <Box sx={Style.desktop.topInner}>
            <PCGreeting />
            <PCAboutMe />
            <PCSkillSets />
          </Box>
        </Container>
      ) : (
        <Container sx={Style.mobile.top}>
          <Box sx={Style.mobile.topInner}>
            <MobileGreeting />
            <MobileAboutMe />
          </Box>
        </Container>
      )}
    </>
  );
};

export default Top;
