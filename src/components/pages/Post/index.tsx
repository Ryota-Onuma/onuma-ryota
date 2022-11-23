import React, { useState, useEffect } from 'react';

import { Icon } from '@iconify/react';
import { Container, Box, Typography } from '@mui/material';
import { marked, Renderer }  from 'marked';
import Image from 'next/image';
import Prism from 'prismjs';

import Loading from '@/components/elements/Loading';
import { PageProps, Post as PostType } from '@/types';
import { PostStyle as Style } from './style';


type PostPageProps = PageProps & {
  post: PostType;
  ogp:any;
};

const getDomainFromUrl = (url: string | undefined): string | undefined => {
  if (!url) return undefined;
  let result;
  let match;
  match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im);
  if (match) {
    result = match[1];
    match = result.match(/^[^.]+\.(.+\..+)$/);
    if (match) {
      result = match[1];
    }
  }
  return result;
};

const imgURL = (url: string | undefined, domain: string | undefined):string => {
  if (domain && (!url || url.match(/\.(jpeg|jpg|gif|png)$/) == null)) {
    return `https://www.google.com/s2/u/0/favicons?domain=${domain}&sz=65`
  }
  return url ?? "/images/buntyo.png"
}

const shouldNotBeCard = (ogpData) => {
    return !ogpData || ogpData.title === "" || ogpData.description === ""
}

const Post: React.FC<PostPageProps> = (props) => {
  const { isDesktop, post,ogp } = props;
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const renderer = new Renderer()
  renderer.link = (href, title, text) => {
    const sanitizedUrl = encodeURI(href ?? "");
    const ogpData = ogp.find(
      (data) => data.url && href?.startsWith(data.url)
    );
  
    if ((text !== href && `${text}/` !== href) || shouldNotBeCard(ogpData)) {
      return `
      <div class="og-raw-container">
        <a href="${sanitizedUrl}" target="_blank" 
          ${title ? `title="${title}">` : ''}
        >${text}</a>
      </div>`;
    }
    
    const domain = getDomainFromUrl(ogpData?.url);
    const imgSrc = imgURL(ogpData?.image, domain)
    const url = ogpData ? ogpData.url : ""
    return `
    <div class="og-container">
      <a href=${url} target="_blank" class="og-link">
        <div class="og-card">
          <div class="og-thumbnail-container">
            <img src="${imgSrc}" alt="${ogpData.title}" class="og-thumbnail"/>
          </div>
          <div class="og-text-container">
            <h1 class="og-title">${ogpData.title}</h1>
            <p class="og-description">${ogpData.description}</p>
            <div class="og-domain-container">
              <img src="https://www.google.com/s2/u/0/favicons?domain=${domain}" alt="${domain}"/>
              <div class="og-domain-name">${domain}</div>
            </div>
        </div>
        </div>
      </a>
    </div>
    `
  };

  useEffect(() => {
    marked.setOptions({
      breaks: true,
      langPrefix: 'language-',
      renderer,
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
    setContent(post.content ?? '');
    Prism.highlightAll();
  }, [content, post]);

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
              <div dangerouslySetInnerHTML={{ __html: marked(content) ?? '' }} />
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
              <div dangerouslySetInnerHTML={{ __html: marked(content) ?? '' }} />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Post;
