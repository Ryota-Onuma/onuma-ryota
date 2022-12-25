import React, { useState, useEffect } from 'react';

import { Icon } from '@iconify/react';
import { Container, Box, Typography } from '@mui/material';
import { marked, Renderer } from 'marked';
import Image from 'next/image';
import Prism from 'prismjs';

import Loading from '@/components/elements/Loading';
import { PageProps, Post as PostType } from '@/types';
import { OGP } from '@/utils/Ogp';

import { PostStyle as Style } from './style';

type PostPageProps = PageProps & {
  post: PostType;
  ogp: OGP[];
};
/* eslint-disable prefer-destructuring */
const getDomainFromUrl = (url: string) => new URL(url).origin;

const shouldNotBeCard = (ogpData: OGP) => {
  if (ogpData.title && ogpData.image && ogpData.url) {
    return false;
  }
  return true;
};

const generateDescription = (description: string, isDesktop: boolean) => {
  const threshold = isDesktop ? 40 : 30;
  return description.length > threshold
    ? `${description.substr(0, threshold)}...`
    : description;
};

const blogCardDesktop = (
  title: string,
  description: string,
  domain: string,
  imgSrc: string,
  url: string,
  isDesktop: boolean
) => {
  const cssMode = isDesktop ? 'desktop' : 'mobile';
  return `
      <div class="og-${cssMode}-container">
        <a href=${url} target="_blank" class="og-${cssMode}-link">
          <div class="og-${cssMode}-card">
            <div class="og-${cssMode}-text-container">
              <p class="og-${cssMode}-title">${title}</p>
              <p class="og-${cssMode}-description">${description}</p>
              <div class="og-${cssMode}-domain-container">
                <img src="https://www.google.com/s2/u/0/favicons?domain=${domain}" alt="${domain}"/>
                <div class="og-${cssMode}-domain-name">${domain}</div>
              </div>
            </div>
            <div class="og-${cssMode}-thumbnail-container">
              <img src="${imgSrc}" onerror="this.onerror=null;this.src='/images/no-image.png'" alt="${title}" class="og-${cssMode}-thumbnail"/>
            </div>
          </div>
        </a>
      </div>
  `;
};

const Post: React.FC<PostPageProps> = (props) => {
  const { isDesktop, post, ogp } = props;
  const [content] = useState<string>(post.content);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    marked.setOptions({
      breaks: true,
      langPrefix: 'language-',
      highlight: (code: string, lang: string) => {
        if (lang && lang.match(':')) {
          /* eslint-disable no-param-reassign */
          lang = lang.substring(0, lang.indexOf(':'));
        }
        if (lang in Prism.languages) {
          return Prism.highlight(code, Prism.languages[lang], lang);
        }
        return code;
      },
    });

    const renderer = new Renderer();
    renderer.link = (href, title, text) => {
      const sanitizedUrl = encodeURI(href ?? '');
      const ogpData = ogp.find(
        (data: OGP) => data.url && href?.startsWith(data.url)
      );
      if (!ogpData) {
        return '';
      }
      if ((text !== href && `${text}/` !== href) || shouldNotBeCard(ogpData)) {
        return `
          <div class="og-raw-container">
            <a href="${sanitizedUrl}" target="_blank" 
              ${title ? `title="${title}">` : ''}
            >${text}</a>
          </div>`;
      }

      const ogpDomain = getDomainFromUrl(ogpData?.url);
      const ogpImgSrc = ogpData.image ?? '/images/no-image.png';
      const url = ogpData ? ogpData.url : '';
      const ogpTitle = ogpData.title ?? '';
      const ogpDescription = ogpData.description ?? '';

      return blogCardDesktop(
        ogpTitle,
        generateDescription(ogpDescription, isDesktop),
        ogpDomain,
        ogpImgSrc,
        url,
        isDesktop
      );
    };
    marked.use({ renderer });
    Prism.highlightAll();
  });

  return (
    <>
      {isDesktop ? (
        <Container>
          <Box sx={Style.desktop.post.container}>
            <Box sx={Style.desktop.post.top.container}>
              <Box sx={Style.desktop.post.top.imageWrapper}>
                {isLoading && <Loading />}
                <Image
                  src={post.thumbnail ?? '/images/buntyo.png'}
                  alt={`thumbnail of ${post.title}`}
                  objectFit="cover"
                  layout="fill"
                  onLoadingComplete={() => setIsLoading(false)}
                />
              </Box>
              <Box sx={Style.desktop.post.top.postInfo.container}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={Style.desktop.post.top.postInfo.title}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="span"
                  sx={Style.desktop.post.top.postInfo.date}
                >
                  <Icon icon="bx:time" />
                  &ensp;{`${post.date}`}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={Style.desktop.post.bottom.container}
              className="postContent"
            >
              <div
                dangerouslySetInnerHTML={{ __html: marked(content) ?? '' }}
              />
            </Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <Box sx={Style.mobile.post.container}>
            <Box sx={Style.mobile.post.top.container}>
              <Box sx={Style.mobile.post.top.imageWrapper}>
                {isLoading && <Loading />}
                <Image
                  src={post.thumbnail ?? '/images/buntyo.png'}
                  alt={`thumbnail of ${post.title}`}
                  objectFit="cover"
                  layout="fill"
                  onLoadingComplete={() => setIsLoading(false)}
                />
              </Box>
              <Box sx={Style.mobile.post.top.postInfo.container}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={Style.mobile.post.top.postInfo.title}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body1"
                  component="span"
                  sx={Style.mobile.post.top.postInfo.date}
                >
                  <Icon icon="bx:time" />
                  &ensp;{`${post.date}`}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={Style.desktop.post.bottom.container}
              className="postContent"
            >
              <div
                dangerouslySetInnerHTML={{ __html: marked(content) ?? '' }}
              />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Post;
