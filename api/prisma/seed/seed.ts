import prisma from '../client';
import { user1 } from './data/user';
import { post1, post2, post3 } from './data/post';
import { profile1 } from './data/profile';

const seed = async () => {
  const user = await prisma.user.create({ data: user1 });
  await prisma.profile.create({
    data: { ...profile1, userId: user.id, bio: 'Profile 1 bio' },
  });
  await prisma.post.createMany({
    data: [
      { ...post1, authorId: user.id },
      { ...post2, authorId: user.id },
      { ...post3, authorId: user.id },
    ],
  });
};

const main = async () => {
  try {
    console.log('Running seed.ts');
    await seed();
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};

main();
