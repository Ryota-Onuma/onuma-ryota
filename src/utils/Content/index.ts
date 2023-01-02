import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

import { Post } from '@/types';
import { convertToJST } from '@/utils/Time';

const postsDirectory = join(process.cwd(), '_posts');

export type PostItems = {
  [key: string]: string;
};

export function getPostSlugs(locale: string = 'ja') {
  return fs.readdirSync(`${postsDirectory}/${locale}`);
}

export function getPostBySlug(
  slug: string,
  fields: string[] = [
    'slug',
    'title',
    'date',
    'thumbnail',
    'introduction',
    'externalUrl',
    'content',
  ],
  locale: string = 'ja'
) {
  const post: Post = {
    slug: '',
    externalUrl: '',
    content: '',
    title: '',
    date: '',
    thumbnail: '',
    introduction: '',
  };
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, locale, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) {
    return post;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  if (JSON.stringify(data) !== '{}') {
    fields.forEach((field) => {
      switch (field) {
        case 'slug':
          post[field] = realSlug;
          break;
        case 'content':
          post[field] = content;
          break;
        case 'date':
          post[field] = convertToJST(data[field]);
          break;
        case 'title':
          post[field] = data[field];
          break;
        case 'thumbnail':
          post[field] = data[field];
          break;
        case 'introduction':
          post[field] = data[field];
          break;
        default:
          break;
      }
    });
  }

  return post;
}

export function getAllPosts(fields: string[] = [], locale: string = 'ja') {
  const slugs = getPostSlugs(locale);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, locale))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
