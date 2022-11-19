import React from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Post from '@/components/pages/Post';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { Post as PostType } from '@/types';
import { getAllPosts, getPostBySlug } from '@/utils/Content';
import { useSize } from '@/utils/Hooks';
import { markdownToHtml } from '@/utils/Markdown';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  post: PostType;
};

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({
  params,
}) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'introduction',
    'date',
    'thumbnail',
    'content',
    'slug',
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        slug: post.slug,
        title: post.title,
        introduction: post.introduction ?? '',
        date: post.date,
        thumbnail: post.thumbnail,
        content,
      },
    },
  };
};
const PostPage: NextPage<IPostProps> = (props) => {
  const { isDesktop } = useSize();
  const { post } = props;
  return (
    <Main
      meta={
        <Meta
          title={post.title}
          description={post.introduction ?? `${post.title}のブログ`}
          post={{
            image: post.thumbnail ?? '/images/buntyo.png',
            date: post.date,
            modified_date: post.date,
          }}
        />
      }
    >
      <Post post={post} isDesktop={isDesktop} />
    </Main>
  );
};

export default PostPage;
