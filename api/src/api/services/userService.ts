import * as dbUsers from '../db/usersDb';

const getAll = async () => {
  const users = await dbUsers.getAll();
  if (!users) {
    throw 'Users not found';
  } else if (users && !users.length) return [];

  return users;
};

const create = async (user: any) => {
  const newUser = await dbUsers.create(user);
  if (!newUser) throw 'User not created';

  return newUser;
};

export { getAll, create };
