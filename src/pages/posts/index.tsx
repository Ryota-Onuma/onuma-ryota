import React from 'react';

import { GetStaticProps } from 'next';

import { PaginationProps } from '@/components/elements/Pagination';
import { PostGallery } from '@/components/pages/Posts';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { Post } from '@/types';
import { AppConfig } from '@/utils/AppConfig';
import { getAllPosts } from '@/utils/Content';
import { useSize } from '@/utils/Hooks';
import { convertTo2D } from '@/utils/Pagination';

type PageUrlProps = {
  page: string;
};

type PaginatePostsPageProps = {
  posts: Post[];
  pagination: PaginationProps;
};

export const getStaticProps: GetStaticProps<
  PaginatePostsPageProps,
  PageUrlProps
> = async ({ params, locale }) => {
  const posts = getAllPosts(
    [
      'slug',
      'title',
      'date',
      'thumbnail',
      'introduction',
      'externalUrl',
      'content',
    ],
    locale
  );
  const pages = convertTo2D(posts, AppConfig.pagination_size);
  const currentPage = Number(params ? params.page : 1);
  const currentInd = currentPage - 1;
  return {
    props: {
      posts: pages[currentInd],
      pagination: {
        current: currentPage,
        total: pages.length,
      },
    },
  };
};

const Posts = (props: PaginatePostsPageProps) => {
  const { isDesktop } = useSize();
  return (
    <Main
      meta={
        <Meta
          title="onuma-ryota.com | Posts"
          description="onuma-ryota.com | Posts"
        />
      }
    >
      <PostGallery
        posts={props.posts}
        pagination={props.pagination}
        isDesktop={isDesktop}
      />
    </Main>
  );
};

export default Posts;
