import sequelize from './db';
import { createPasswordHash } from './utils/authUtils';
import UserTypeModel from './api/models/userTypeModel';
import UserModel from './api/models/userModel';
import PostModel from './api/models/postModel';
import ProfileModel from './api/models/profileModel';

import * as usersService from './api/services/userService';

const userTypesData = [
  {
    id: 1,
    userTypeName: 'admin',
  },
  {
    id: 2,
    userTypeName: 'customer',
  },
  {
    id: 3,
    userTypeName: 'guest',
  },
];
const usersData = [
  {
    userTypeId: 1,
    email: 'ryan3nichols@gmail.com',
    username: 'god',
  },
  {
    userTypeId: 2,
    email: 'john.smith@email.com',
    username: 'john.smith',
  },
  {
    userTypeId: 2,
    email: 'jane.doe@email.com',
    username: 'jane.does',
  },
  {
    userTypeId: 2,
    email: 'bill.bruh@email.com',
    username: 'bill.bruh',
  },
];

const profilesData: { bio: string }[] = [
  {
    bio: 'Hi there! I am an avid traveler and foodie. I love to explore new places and try out different cuisines. In my free time, I enjoy reading books and watching movies.',
  },
  {
    bio: 'Hey everyone! I am a fitness enthusiast and enjoy working out every day. I am also a big fan of music and love attending concerts and festivals. My favorite genres are rock and metal.',
  },
  {
    bio: 'Hello, I am a freelance writer and editor. I have a passion for storytelling and enjoy crafting engaging content. In my spare time, I like to experiment with new recipes and bake desserts.',
  },
];

const getProfilesData = (userIds: number[]) =>
  profilesData.map((profile, index) => {
    return {
      ...profile,
      userId: userIds[index],
    };
  });

const postsData: { title: string; content: string; published: boolean }[] = [
  {
    title: 'Trip to Thailand',
    content:
      'I recently traveled to Thailand and had the most amazing time exploring the temples and trying out all the delicious street food. One of my favorite experiences was taking a cooking class where I learned how to make Pad Thai from scratch. If you love food and adventure, Thailand is definitely a must-visit destination!',
    published: true,
  },
  {
    title: 'First trip to Thailand',
    content:
      "Last summer, I had the opportunity to visit Thailand for the first time. It was an incredible experience! I got to try all kinds of delicious food, explore ancient temples, and even go on a jungle trek. One of my favorite memories was visiting the stunning beaches in Krabi. I can't wait to go back one day.",
    published: true,
  },
  {
    title: 'It felt like I conquered the world',
    content:
      'It was a grueling journey to the top of Mount Everest, but the view from the summit was absolutely breathtaking. I feel incredibly grateful to have had this experience and I encourage everyone to push their limits and pursue their dreams.',
    published: true,
  },
];

const getPostData = (userIds: number[]) =>
  postsData.map((post, index) => {
    return {
      ...post,
      userId: userIds[index],
    };
  });

const tableNames = ['posts', 'profiles', 'users'];

const emptyDbTables = async () => {
  const queryInterface = sequelize.getQueryInterface();
  await Promise.all(
    tableNames.map((tableName) => {
      return queryInterface.bulkDelete(tableName, null, {});
    })
  );
};

const insertUserTypes = async () => {
  const currentUserTypes = await UserTypeModel.findAll();
  if (currentUserTypes.length === 0) {
    await sequelize.models.user_type.bulkCreate(userTypesData);
  }
};

(async () => {
  await emptyDbTables();
  await insertUserTypes();

  const hashedPassword = await createPasswordHash('password');

  await UserModel.bulkCreate(
    usersData.map((user) => ({ ...user, password: hashedPassword }))
  );

  const [john, jane, bill] = await Promise.all([
    usersService.getByUsername('john.smith'),
    usersService.getByUsername('jane.does'),
    usersService.getByUsername('bill.bruh'),
  ]);

  // console.log('\n\n\n\njohn, jane, bill', john, jane, bill);
  if (!john || !jane || !bill) {
    throw new Error('Could not find users');
  }
  const userIds: number[] = [john.id!, jane.id!, bill.id!];

  await ProfileModel.bulkCreate(getProfilesData(userIds));
  await PostModel.bulkCreate(getPostData(userIds));
})();
