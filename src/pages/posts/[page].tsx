import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { PaginationProps } from '@/components/elements/Pagination';
import { PostGallery } from '@/components/pages/Posts';
import { Meta } from '@/layout/Meta';
import { en } from '@/local/English';
import { ja } from '@/local/Japanese/';
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

export const getStaticPaths: GetStaticPaths<PageUrlProps> = async () => {
  const jaPosts = getAllPosts(['slug'], ja).filter((post) => post.slug !== '');
  const jaPages = convertTo2D(jaPosts, AppConfig.pagination_size);
  const jaPaths = jaPages.map((_, ind) => {
    return {
      params: {
        page: `${ind + 1}`,
      },
      locale: 'ja',
    };
  });
  const enPosts = getAllPosts(['slug'], en).filter((post) => post.slug !== '');
  const enPages = convertTo2D(enPosts, AppConfig.pagination_size);
  const enPaths = enPages.map((_, ind) => {
    return {
      params: {
        page: `${ind + 1}`,
      },
      locale: 'en',
    };
  });

  const paths = [...jaPaths, ...enPaths];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PaginatePostsPageProps,
  PageUrlProps
> = async ({ params, locale }) => {
  const posts = [
    ...getAllPosts(
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
    ),
  ];
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
