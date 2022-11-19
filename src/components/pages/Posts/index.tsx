import { Container, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { IPaginationProps, Pagination } from '@/components/elements/Pagination';
import { PostCard as MobilePostCard } from '@/components/pages/Posts/components/mobile/PostCard';
import { PostCard as PCPostCard } from '@/components/pages/Posts/components/pc/PostCard';
import { PageProps, Post } from '@/types';

import { PostsStyle as Style } from './style';

export type IPostGalleryProps = {
  posts: Post[];
  pagination: IPaginationProps;
} & PageProps;

const PostGallery = (props: IPostGalleryProps) => {
  const router = useRouter();
  const onChangePagination = (page: number) => {
    router.replace(`/posts/${page}`);
  };
  const { isDesktop, posts, pagination } = props;
  return (
    <>
      {isDesktop ? (
        <Container sx={Style.desktop.posts.container}>
          <Box sx={Style.desktop.posts.titleContainer.container}>
            <>
              <Typography
                variant="h1"
                component="h1"
                sx={Style.desktop.posts.titleContainer.title}
              >
                Posts
              </Typography>
              <Box
                sx={Style.desktop.posts.titleContainer.horizonLine}
                component="span"
              ></Box>
            </>
          </Box>
          <Box sx={Style.desktop.postCards}>
            {posts.map((post) => (
              <PCPostCard key={post.slug} post={post} />
            ))}
          </Box>

          <Box>
            <Pagination
              total={pagination.total}
              current={pagination.current}
              onChange={onChangePagination}
            />
          </Box>
        </Container>
      ) : (
        <Container sx={Style.mobile.posts.container}>
          <Box sx={Style.mobile.posts.titleContainer.container}>
            <Typography
              variant="h1"
              component="h1"
              sx={Style.mobile.posts.titleContainer.title}
            >
              Posts
            </Typography>
          </Box>
          <Box sx={Style.mobile.postCards}>
            {posts.map((post) => (
              <MobilePostCard key={post.slug} post={post} />
            ))}
          </Box>
          <Box>
            <Pagination
              total={pagination.total}
              current={pagination.current}
              onChange={onChangePagination}
            />
          </Box>
        </Container>
      )}
    </>
  );
};

export { PostGallery };
