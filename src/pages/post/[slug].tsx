import React from 'react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Post from '@/components/pages/Post';
import { Meta } from '@/layout/Meta';
import { en } from '@/locale/English';
import { ja } from '@/locale/Japanese';
import { Main } from '@/templates/Main';
import { Post as PostType } from '@/types';
import { getAllPosts, getPostBySlug } from '@/utils/Content';
import { useSize } from '@/utils/Hooks';
import { getOgpData, getFloatingUrls } from '@/utils/Ogp';

type PostUrl = {
  slug: string;
};

type PostProps = {
  post: PostType;
  ogpData: any;
};

export const getStaticPaths: GetStaticPaths<PostUrl> = async () => {
  const jaPosts = getAllPosts(['slug'], ja).filter((post) => post.slug !== '');
  const jaPaths = jaPosts
    .filter((v) => v)
    .map((post) => ({
      params: {
        slug: post.slug,
      },
      locale: 'ja',
    }));

  const enPosts = getAllPosts(['slug'], en).filter((post) => post.slug !== '');
  const enPaths = enPosts
    .filter((v) => v)
    .map((post) => ({
      params: {
        slug: post.slug,
      },
      locale: 'en',
    }));

  const paths = [...jaPaths, ...enPaths];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps, PostUrl> = async ({
  params,
  locale,
}) => {
  const post = getPostBySlug(
    params!.slug,
    ['title', 'introduction', 'date', 'thumbnail', 'content', 'slug'],
    locale
  );

  const floatingUrls = getFloatingUrls(post.content ?? '');
  const data = await getOgpData(floatingUrls);
  return {
    props: {
      post: {
        slug: post.slug,
        title: post.title,
        introduction: post.introduction ?? '',
        date: post.date,
        thumbnail: post.thumbnail,
        content: post.content,
      },
      ogpData: data,
    },
  };
};
const PostPage: NextPage<PostProps> = (props) => {
  const { isDesktop } = useSize();
  const { post, ogpData } = props;
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
      <Post post={post} isDesktop={isDesktop} ogp={ogpData} />
    </Main>
  );
};

export default PostPage;
