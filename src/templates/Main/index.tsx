import { useState, ReactNode } from 'react';

import { Container, Box } from '@mui/material';

import { Footer } from '@/components/elements/Footer';
import { Header } from '@/components/elements/Header';
import { useSize } from '@/utils/Hooks';

import { MainStyle as Style } from './style';

type IMainProps = {
  meta: ReactNode;
  children?: ReactNode;
};

const Main = (props: IMainProps) => {
  const [isHeaderClicked, setHeaderClicked] = useState(false);
  const { isDesktop } = useSize();
  const toggleHeaderClicked = () => {
    setHeaderClicked(!isHeaderClicked);
  };
  return (
    <Container sx={Style.main} maxWidth={false}>
      {props.meta}
      <Header
        isDesktop={isDesktop}
        isHeaderClicked={isHeaderClicked}
        toggleHeaderClicked={toggleHeaderClicked}
      />

      <Box sx={isHeaderClicked ? Style.hide : Style.show}>{props.children}</Box>
      <Footer />
    </Container>
  );
};

export { Main };
