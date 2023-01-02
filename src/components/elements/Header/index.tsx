import { useState } from 'react';

import githubIcon from '@iconify/icons-bi/github';
import twitterIcon from '@iconify/icons-bi/twitter';
import { Icon } from '@iconify/react';
import { Link as MuiLink, Container, Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { en, enName } from '@/locale/English';
import { ja, jaName } from '@/locale/Japanese';
import { useSize, useLocale } from '@/utils/Hooks';

import { HeaderStyle as Style } from './style';

type HeaderLink = {
  displayName: string;
  path: string;
  isDesktop: boolean;
};
const links: HeaderLink[] = [
  {
    displayName: 'Home',
    path: '/',
    isDesktop: false,
  },
  {
    displayName: 'Posts',
    path: '/posts',
    isDesktop: true,
  },
];

const locales: {
  shorthandName: string;
  name: string;
}[] = [
  {
    shorthandName: ja,
    name: jaName,
  },
  {
    shorthandName: en,
    name: enName,
  },
];

type HeaderProps = {
  isDesktop: boolean;
  isHeaderClicked: boolean;
  toggleHeaderClicked: () => void;
};

const generatePath = (path: string, locale: string = ja) => {
  if (locale === ja) {
    return path;
  }
  return `/${locale}${path}`;
};

const PCHeader = (props: { currentPath: string }) => {
  const { currentPath } = props;
  const [isOpenLocaleMenu, setIsOpenLocaleMenu] = useState(false);
  const { locale } = useLocale();
  return (
    <Box sx={Style.pc.inner}>
      <Box sx={Style.pc.link}>
        <MuiLink href={generatePath('/', locale)}>
          <Image
            src="/images/buntyo.png"
            width={50}
            height={50}
            alt="main logo"
          />
        </MuiLink>
      </Box>
      <Box sx={Style.pc.linkContainer}>
        {links
          .filter((l) => l.isDesktop)
          .map((link: HeaderLink) => (
            <Box
              key={generatePath(link.path, locale)}
              sx={{
                ...Style.pc.link,
                ...Style.pc.linkHover,
              }}
            >
              {link.isDesktop && (
                <MuiLink href={generatePath(link.path, locale)} key={link.path}>
                  <Typography component="span" sx={Style.pc.linkDisplayName}>
                    {link.displayName}
                  </Typography>
                </MuiLink>
              )}
            </Box>
          ))}
        {!/.*\/post\/.*/.test(currentPath) && (
          <Box sx={Style.pc.localeMenu.container}>
            <Box
              onClick={() => setIsOpenLocaleMenu(!isOpenLocaleMenu)}
              sx={{
                ...Style.pc.link,
                ...Style.pc.localeMenu.icon,
              }}
            >
              <Icon icon="mdi:language" color="white" width={25} height={25} />
            </Box>
            {isOpenLocaleMenu && (
              <Box sx={Style.pc.localeMenu.links}>
                {locales.map((lcl) => (
                  <Box
                    onClick={() => setIsOpenLocaleMenu(!isOpenLocaleMenu)}
                    sx={Style.pc.localeMenu.button}
                    key={lcl.shorthandName}
                  >
                    <Link
                      href={currentPath}
                      locale={lcl.shorthandName}
                      passHref
                    >
                      {lcl.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

const MobileHeader = (props: {
  isHeaderClicked: boolean;
  toggleHeaderClicked: () => void;
  currentPath: string;
}) => {
  const { isHeaderClicked, toggleHeaderClicked, currentPath } = props;
  const [isOpenLocaleMenu, setIsOpenLocaleMenu] = useState(false);
  const { locale } = useLocale();
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
                <MuiLink href={generatePath(link.path, locale)} key={link.path}>
                  <Typography
                    component="span"
                    sx={Style.mobile.linkDisplayName}
                  >
                    {link.displayName}
                  </Typography>
                </MuiLink>
              ))}
            </Box>
            {!/.*\/post\/.*/.test(currentPath) && (
              <Box sx={Style.mobile.locale.container}>
                {locales.map((lcl) => {
                  return (
                    <Box key={lcl.name} sx={Style.mobile.locale.inner}>
                      <Box
                        onClick={() => {
                          setIsOpenLocaleMenu(!isOpenLocaleMenu);
                          toggleHeaderClicked();
                        }}
                      >
                        <Link
                          href={currentPath}
                          locale={lcl.shorthandName}
                          passHref
                        >
                          {lcl.name}
                        </Link>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            )}
            <Box sx={Style.mobile.sns.container}>
              <MuiLink href="https://github.com/Ryota-Onuma" target="_blank">
                <Box sx={Style.mobile.sns.icon}>
                  <Icon
                    icon={githubIcon}
                    color="white"
                    width="30"
                    height="30"
                  />
                </Box>
              </MuiLink>
              <MuiLink href="/">
                <Box sx={Style.mobile.sns.icon}>
                  <Icon
                    icon={twitterIcon}
                    color="white"
                    width="30"
                    height="30"
                  />
                </Box>
              </MuiLink>
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
  const router = useRouter();
  const currentPath = decodeURI(router.asPath);
  return (
    <Container component="header" disableGutters={true} maxWidth={false}>
      {isDesktop ? (
        <PCHeader currentPath={currentPath} />
      ) : (
        <MobileHeader
          isHeaderClicked={isHeaderClicked}
          toggleHeaderClicked={toggleHeaderClicked}
          currentPath={currentPath}
        />
      )}
    </Container>
  );
};
