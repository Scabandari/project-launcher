import { v4 as uuid } from 'uuid';

import { profile1 } from './profile';

export const post1 = {
  id: uuid(),
  title: 'Post1 title',
  content: 'Post1 content',
  published: true,
  authorId: profile1.id,
};

export const post2 = {
  id: uuid(),
  title: 'Post2 title',
  content: 'Post2 content',
  published: true,
  authorId: profile1.id,
};

export const post3 = {
  id: uuid(),
  title: 'Post3 title',
  content: 'Post3 content',
  published: true,
  authorId: profile1.id,
};
