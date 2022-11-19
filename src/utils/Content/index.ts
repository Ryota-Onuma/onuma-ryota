import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

import { Post } from '@/types';
import { convertToJST } from '@/utils/Time';

const postsDirectory = join(process.cwd(), '_posts');

export type PostItems = {
  [key: string]: string;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
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
  ]
) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const post: Post = {
    slug: '',
    externalUrl: '',
    content: '',
    title: '',
    date: '',
    thumbnail: '',
    introduction: '',
  };

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

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
