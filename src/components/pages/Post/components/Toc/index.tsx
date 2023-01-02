import React, { useState } from 'react';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import { useLocale } from '@/utils/Hooks';

import { TocStyle as Style } from './style';

export type TocProps = {
  headings: TocElement[];
  isDesctop: boolean;
};

export type TocElement = {
  text: string;
  depth: number;
};

export const Toc = ({ headings, isDesctop }: TocProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLocale();
  return (
    <>
      {isDesctop ? (
        <>
          <Box
            component="span"
            onClick={() => setIsOpen(!isOpen)}
            sx={Style.desktop.toc.toggleButtonContainer}
          >
            <Box sx={Style.desktop.toc.toggleButton}>
              {isOpen ? t.POST.TOC.CLOSE : t.POST.TOC.OPEN}
            </Box>
          </Box>
          {isOpen && (
            <Box sx={Style.desktop.toc.container}>
              <Typography component="p" sx={Style.desktop.toc.title}>
                {t.POST.TOC.TITLE}
              </Typography>
              <Box component="ul" sx={Style.desktop.toc.ul}>
                {headings.map((e, i) => (
                  <Box
                    key={i}
                    component="li"
                    style={{
                      marginLeft: `${e.depth * 30}px`,
                    }}
                  >
                    <Link
                      href={`#${e.text
                        .replace(/\s+/g, '-')
                        .replace(/[!$%^&@#*()+|~=`{}[\]:";'<>?,./]/g, '')
                        .toLowerCase()}`}
                      passHref
                    >
                      <Box
                        style={{
                          textDecoration: 'none',
                        }}
                        component="a"
                        sx={Style.desktop.toc.link}
                      >
                        {e.text}
                      </Box>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </>
      ) : (
        <>
          <Box
            component="span"
            onClick={() => setIsOpen(!isOpen)}
            sx={Style.mobile.toc.toggleButtonContainer}
          >
            <Box sx={Style.mobile.toc.toggleButton}>
              {isOpen ? t.POST.TOC.CLOSE : t.POST.TOC.OPEN}
            </Box>
          </Box>
          {isOpen && (
            <Box sx={Style.mobile.toc.container}>
              <Typography component="p" sx={Style.mobile.toc.title}>
                {t.POST.TOC.TITLE}
              </Typography>
              <Box component="ul" sx={Style.mobile.toc.ul}>
                {headings.map((e, i) => (
                  <Box
                    key={i}
                    component="li"
                    style={{
                      marginLeft: e.depth > 1 ? `${e.depth * 10}px` : 0,
                    }}
                  >
                    <Link
                      href={`#${e.text
                        .replace(/\s+/g, '-')
                        .replace(/[!$%^&@#*()+|~=`{}[\]:";'<>?,./]/g, '')
                        .toLowerCase()}`}
                      passHref
                    >
                      <Box
                        style={{
                          textDecoration: 'none',
                        }}
                        component="a"
                        sx={Style.mobile.toc.link}
                      >
                        {e.text}
                      </Box>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </>
      )}
    </>
  );
};
