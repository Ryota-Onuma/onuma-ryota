import githubIcon from '@iconify/icons-bi/github';
import twitterIcon from '@iconify/icons-bi/twitter';
import { Icon } from '@iconify/react';
import { Link, Container, Box, Typography } from '@mui/material';
import Image from 'next/image';

import { useSize } from '@/utils/Hooks';

import { HeaderStyle as Style } from './style';

type HeaderLink = {
  displayName: string;
  url: string;
  isDesktop: boolean;
};
const links: HeaderLink[] = [
  {
    displayName: 'Home',
    url: '/',
    isDesktop: false,
  },
  {
    displayName: 'Posts',
    url: '/posts',
    isDesktop: true,
  },
];

type HeaderProps = {
  isDesktop: boolean;
  isHeaderClicked: boolean;
  toggleHeaderClicked: () => void;
};

const PCHeader = () => {
  return (
    <Box sx={Style.pc.inner}>
      <Box>
        <Link href="/">
          <Image
            src="/images/buntyo.png"
            width={50}
            height={50}
            alt="main logo"
          />
        </Link>
      </Box>
      <Box>
        {links.map((link: HeaderLink) => (
          <Box key={link.url}>
            {link.isDesktop && (
              <Link href={link.url} key={link.url}>
                <Typography component="span" sx={Style.pc.linkDisplayName}>
                  {link.displayName}
                </Typography>
              </Link>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const MobileHeader = (props: {
  isHeaderClicked: boolean;
  toggleHeaderClicked: () => void;
}) => {
  const { isHeaderClicked, toggleHeaderClicked } = props;
  return (
    <Box sx={Style.mobile.inner}>
      <Box
        onClick={() => toggleHeaderClicked()}
        sx={Style.mobile.headerMenuContainer}
      >
        <Box sx={Style.mobile.headerMenu.container}>
          <Box
            sx={
              isHeaderClicked
                ? {
                    ...Style.mobile.headerMenu.bar,
                    ...Style.mobile.headerMenu.clicked.barTop,
                  }
                : {
                    ...Style.mobile.headerMenu.bar,
                    ...Style.mobile.headerMenu.notClicked.barTop,
                  }
            }
          ></Box>
          <Box
            sx={
              isHeaderClicked
                ? {
                    ...Style.mobile.headerMenu.bar,
                    ...Style.mobile.headerMenu.clicked.barMiddle,
                  }
                : {
                    ...Style.mobile.headerMenu.bar,
                    ...Style.mobile.headerMenu.notClicked.barMiddle,
                  }
            }
          ></Box>
          <Box
            sx={
              isHeaderClicked
                ? {
                    ...Style.mobile.headerMenu.bar,
                    ...Style.mobile.headerMenu.clicked.barBottom,
                  }
                : {
                    ...Style.mobile.headerMenu.bar,
                    ...Style.mobile.headerMenu.notClicked.barBottom,
                  }
            }
          ></Box>
        </Box>
      </Box>
      {isHeaderClicked ? (
        <>
          <Box sx={Style.mobile.headerOverlay}>
            <Box sx={Style.mobile.linkContainer}>
              {links.map((link: HeaderLink) => (
                <Link href={link.url} key={link.url}>
                  <Typography
                    component="span"
                    sx={Style.mobile.linkDisplayName}
                  >
                    {link.displayName}
                  </Typography>
                </Link>
              ))}
            </Box>
            <Box sx={Style.mobile.sns.container}>
              <Link href="https://github.com/Ryota-Onuma" target="_blank">
                <Box sx={Style.mobile.sns.icon}>
                  <Icon
                    icon={githubIcon}
                    color="white"
                    width="30"
                    height="30"
                  />
                </Box>
              </Link>
              <Link href="/">
                <Box sx={Style.mobile.sns.icon}>
                  <Icon
                    icon={twitterIcon}
                    color="white"
                    width="30"
                    height="30"
                  />
                </Box>
              </Link>
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export const Header: React.FC<HeaderProps> = (props) => {
  const { isHeaderClicked, toggleHeaderClicked } = props;
  const { isDesktop } = useSize();

  return (
    <Container component="header" disableGutters={true} maxWidth={false}>
      {isDesktop ? (
        <PCHeader />
      ) : (
        <MobileHeader
          isHeaderClicked={isHeaderClicked}
          toggleHeaderClicked={toggleHeaderClicked}
        />
      )}
    </Container>
  );
};
