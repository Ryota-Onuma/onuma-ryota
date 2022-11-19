import { Icon } from '@iconify/react';
import { Link, Container, Box, Typography } from '@mui/material';
import Image from 'next/image';

import { HeaderStyle as Style } from './style';

type HeaderLink = {
  displayName: string;
  url: string;
};
const links: HeaderLink[] = [
  {
    displayName: 'Home',
    url: '/',
  },
  {
    displayName: 'Posts',
    url: '/posts',
  },
];

type HeaderProps = {
  isDesktop: boolean;
  isHeaderClicked: boolean;
  toggleHeaderClicked: () => void;
};

const PCHeader = () => {
  return (
    <Container
      component="header"
      disableGutters={true}
      sx={Style.header}
      maxWidth={false}
    >
      <Box sx={Style.headerInner}>
        <Box>
          <Link href="/">
            <Image
              src="/images/buntyo.png"
              width={42}
              height={42}
              alt="Offical Icon"
            />
          </Link>
        </Box>
        <Box sx={Style.linkContainer}>
          {links.map((link: HeaderLink) => (
            <Link href={link.url} key={link.url} sx={Style.link}>
              <Typography component="span">{link.displayName}</Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

const MobileHeader = (props: {
  isHeaderClicked: boolean;
  toggleHeaderClicked: () => void;
}) => {
  const { isHeaderClicked, toggleHeaderClicked } = props;
  return (
    <Container
      component="header"
      disableGutters={true}
      sx={Style.mobileHeader}
      maxWidth={false}
    >
      <Box sx={Style.mobileHeaderIconContainer}>
        {isHeaderClicked ? (
          <Icon
            icon="ep:close-bold"
            width="50"
            height="50"
            onClick={() => toggleHeaderClicked()}
          />
        ) : (
          <Icon
            icon="ant-design:menu-outlined"
            width="50"
            height="50"
            onClick={() => toggleHeaderClicked()}
          />
        )}
      </Box>
      {isHeaderClicked ? (
        <>
          <Box sx={Style.mobileHeaderOverlay}>
            <Box sx={Style.mobilelinkContainer}>
              {links.map((link: HeaderLink) => (
                <Link href={link.url} key={link.url}>
                  <Typography component="span" sx={Style.mobileLinkDisplayName}>
                    {link.displayName}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export const Header: React.FC<HeaderProps> = (props) => {
  const { isDesktop, isHeaderClicked, toggleHeaderClicked } = props;
  return isDesktop ? (
    <PCHeader />
  ) : (
    <MobileHeader
      isHeaderClicked={isHeaderClicked}
      toggleHeaderClicked={toggleHeaderClicked}
    />
  );
};
