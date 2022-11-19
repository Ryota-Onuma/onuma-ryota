import { useState } from 'react';

import { Icon } from '@iconify/react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import Loading from '@/components/elements/Loading';
import { Post } from '@/types';

import { PostStyle as Style } from './style';

type PostProps = {
  post: Post;
};

export const PostCard: React.FC<PostProps> = (props) => {
  const { post } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <Link
      href={`/post/${encodeURIComponent(post.slug)}`}
      style={Style.a}
      passHref
    >
      <Box sx={Style.post}>
        <Box sx={Style.postLeft.container}>
          <Typography variant="h2" component="h2" sx={Style.postLeft.title}>
            {post.title}
          </Typography>
          <Typography variant="body1" component="span" sx={Style.postLeft.date}>
            <Icon icon="bx:time" />
            &ensp;{`${post.date}`}
          </Typography>
          <Typography variant="body1" component="p" sx={Style.postLeft.content}>
            {post.introduction}
          </Typography>
        </Box>
        <Box sx={Style.postRight.container}>
          <Loading />
          {isLoading && <Loading />}
          <Image
            src={post.thumbnail ?? '/images/buntyo.png'}
            alt={`thumbnail of ${post.title}`}
            objectFit="cover"
            layout="fill"
            onLoadingComplete={() => setIsLoading(false)}
          />
        </Box>
      </Box>
    </Link>
  );
};
