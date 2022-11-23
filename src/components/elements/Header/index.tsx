import githubIcon from '@iconify/icons-bi/github';
import twitterIcon from '@iconify/icons-bi/twitter';
import { Icon } from '@iconify/react';
import { Link, Container, Box, Typography } from '@mui/material';

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

const HeaderComponent = (props: {
  isHeaderClicked: boolean;
  toggleHeaderClicked: () => void;
}) => {
  const { isHeaderClicked, toggleHeaderClicked } = props;
  return (
    <Container
      component="header"
      disableGutters={true}
      sx={Style.header}
      maxWidth={false}
    >
      <Box onClick={() => toggleHeaderClicked()} sx={Style.headerMenuContainer}>
        <Box sx={Style.headerMenu.container}>
          <Box
            sx={
              isHeaderClicked
                ? {
                    ...Style.headerMenu.bar,
                    ...Style.headerMenu.clicked.barTop,
                  }
                : {
                    ...Style.headerMenu.bar,
                    ...Style.headerMenu.notClicked.barTop,
                  }
            }
          ></Box>
          <Box
            sx={
              isHeaderClicked
                ? {
                    ...Style.headerMenu.bar,
                    ...Style.headerMenu.clicked.barMiddle,
                  }
                : {
                    ...Style.headerMenu.bar,
                    ...Style.headerMenu.notClicked.barMiddle,
                  }
            }
          ></Box>
          <Box
            sx={
              isHeaderClicked
                ? {
                    ...Style.headerMenu.bar,
                    ...Style.headerMenu.clicked.barBottom,
                  }
                : {
                    ...Style.headerMenu.bar,
                    ...Style.headerMenu.notClicked.barBottom,
                  }
            }
          ></Box>
        </Box>
      </Box>
      {/* </Box> */}
      {isHeaderClicked ? (
        <>
          <Box sx={Style.headerOverlay}>
            <Box sx={Style.linkContainer}>
              {links.map((link: HeaderLink) => (
                <Link href={link.url} key={link.url}>
                  <Typography component="span" sx={Style.linkDisplayName}>
                    {link.displayName}
                  </Typography>
                </Link>
              ))}
            </Box>
            <Box sx={Style.sns.container}>
              <Box sx={Style.sns.icon}>
                <Icon icon={githubIcon} color="white" width="30" height="30" />
              </Box>
              <Box sx={Style.sns.icon}>
                <Icon icon={twitterIcon} color="white" width="30" height="30" />
              </Box>
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
  const { isHeaderClicked, toggleHeaderClicked } = props;
  return (
    <HeaderComponent
      isHeaderClicked={isHeaderClicked}
      toggleHeaderClicked={toggleHeaderClicked}
    />
  );
};
