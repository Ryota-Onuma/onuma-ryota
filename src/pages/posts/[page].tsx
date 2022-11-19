import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { IPaginationProps } from '@/components/elements/Pagination';
import { PostGallery } from '@/components/pages/Posts';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { Post } from '@/types';
import { AppConfig } from '@/utils/AppConfig';
import { getAllPosts } from '@/utils/Content';
import { useSize } from '@/utils/Hooks';
import { convertTo2D } from '@/utils/Pagination';

type IPageUrl = {
  page: string;
};

type PaginatePostsPageProps = {
  posts: Post[];
  pagination: IPaginationProps;
};

const PaginatePosts = (props: PaginatePostsPageProps) => {
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

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const posts = getAllPosts(['slug']);

  const pages = convertTo2D(posts, AppConfig.pagination_size);

  return {
    paths: pages.map((_, ind) => ({
      params: {
        page: `${ind + 1}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PaginatePostsPageProps,
  IPageUrl
> = async ({ params }) => {
  const posts = getAllPosts([
    'slug',
    'title',
    'date',
    'thumbnail',
    'introduction',
    'externalUrl',
    'content',
  ]);
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

export default PaginatePosts;
