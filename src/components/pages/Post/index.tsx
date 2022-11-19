import React, { useState, useEffect } from 'react';

import { Icon } from '@iconify/react';
import { Container, Box, Typography } from '@mui/material';
import { marked } from 'marked';
import Image from 'next/image';
import Prism from 'prismjs';

import { PageProps, Post as PostType } from '@/types';

import { PostStyle as Style } from './style';

type PostPageProps = PageProps & {
  post: PostType;
};

const Post: React.FC<PostPageProps> = (props) => {
  const { isDesktop, post } = props;
  const [content, setContent] = useState<string>('');
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
                <Image
                  src={post.thumbnail ?? '/images/buntyo.png'}
                  alt={`thumbnail of ${post.title}`}
                  objectFit="cover"
                  layout="fill"
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
              <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
            </Box>
          </Box>
        </Container>
      ) : (
        <Container>
          <Box sx={Style.mobile.post.container}>
            <Box sx={Style.mobile.post.top.container}>
              <Box sx={Style.mobile.post.top.imageWrapper}>
                <Image
                  src={post.thumbnail ?? '/images/buntyo.png'}
                  alt={`thumbnail of ${post.title}`}
                  objectFit="cover"
                  layout="fill"
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
              <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Post;
