import sequelize from './db';
import { createPasswordHash } from './utils/authUtils';
import UserTypeModel from './api/models/userTypeModel';

//const userTypesData = [
//{
//id: 1,
//user_type_name: 'admin',
//},
//{
//id: 2,
//user_type_name: 'customer',
//},
//{
//id: 3,
//user_type_name: 'guest',
//},
//];

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
    id: 1,
    user_type_id: 1,
    email: 'ryan3nichols@gmail.com',
    username: 'god',
  },
  {
    id: 2,
    user_type_id: 2,
    email: 'john.smith@email.com',
    username: 'john.smith',
  },
  {
    id: 3,
    user_type_id: 2,
    email: 'jane.doe@email.com',
    username: 'jane.does',
  },
  {
    id: 4,
    user_type_id: 2,
    email: 'bill.bruh@email.com',
    username: 'bill.bruh',
  },
];

const profilesData = [
  {
    user_id: 2,
    bio: 'Hi there! I am an avid traveler and foodie. I love to explore new places and try out different cuisines. In my free time, I enjoy reading books and watching movies.',
  },
  {
    user_id: 3,
    bio: 'Hey everyone! I am a fitness enthusiast and enjoy working out every day. I am also a big fan of music and love attending concerts and festivals. My favorite genres are rock and metal.',
  },
  {
    user_id: 4,
    bio: 'Hello, I am a freelance writer and editor. I have a passion for storytelling and enjoy crafting engaging content. In my spare time, I like to experiment with new recipes and bake desserts.',
  },
];

const postsData = [
  {
    user_id: 2,
    title: 'Trip to Thailand',
    content:
      'I recently traveled to Thailand and had the most amazing time exploring the temples and trying out all the delicious street food. One of my favorite experiences was taking a cooking class where I learned how to make Pad Thai from scratch. If you love food and adventure, Thailand is definitely a must-visit destination!',
    published: true,
  },
  {
    user_id: 3,
    title: 'First trip to Thailand',
    content:
      "Last summer, I had the opportunity to visit Thailand for the first time. It was an incredible experience! I got to try all kinds of delicious food, explore ancient temples, and even go on a jungle trek. One of my favorite memories was visiting the stunning beaches in Krabi. I can't wait to go back one day.",
    published: true,
  },
  {
    user_id: 4,
    title: 'It felt like I conquered the world',
    content:
      'It was a grueling journey to the top of Mount Everest, but the view from the summit was absolutely breathtaking. I feel incredibly grateful to have had this experience and I encourage everyone to push their limits and pursue their dreams.',
    published: true,
  },
];
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

  const queryInterface = sequelize.getQueryInterface();
  const hashedPassword = await createPasswordHash('password');

  await queryInterface.bulkInsert(
    'users',
    usersData.map((user) => ({ ...user, password: hashedPassword }))
  );
  await queryInterface.bulkInsert('profiles', profilesData);
  await queryInterface.bulkInsert('posts', postsData);
})();
