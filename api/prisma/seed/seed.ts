import prisma from "../prisma";
import { user1, post1, post2, post3, profile1 } from "../stubs";

const seed = async () => {
  const user = await prisma.user.create({ data: user1 });
  await prisma.profile.create({
    data: { ...profile1, userId: user.id, bio: "Profile 1 bio" },
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
    console.log("Running seed.ts");
    await seed();
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};

main();
