import * as dbUsers from '../db/usersDb';

const getById = async (id: number) => {
  const user = await dbUsers.getById(id);
  if (!user) throw 'User not found';

  return user;
};

const getByUsername = async (username: string) => {
  const user = await dbUsers.getByUsername(username);
  if (!user) throw 'User not found';

  return user;
};

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

const remove = async (userId: number) => {
  const numberOfUsersDeleted = await dbUsers.remove(userId);
  if (!numberOfUsersDeleted) throw 'User not removed';

  return numberOfUsersDeleted;
};

export { getAll, create, getById, getByUsername, remove };
