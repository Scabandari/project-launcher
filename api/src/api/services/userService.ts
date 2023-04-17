import * as dbUsers from '../db/usersDb';
import * as authUtils from '../../utils/authUtils';
import { User } from '../types/userTypes';

const getGuestUser = () => {
  const guestUser = {
    id: 0,
    username: 'guest',
    email: 'guest@email.com',
    userTypeId: 2,
  };

  return guestUser;
};

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

const getByEmail = async (email: string) => {
  const user = await dbUsers.getByEmail(email);
  if (!user) throw 'User not found';

  return user;
};

const isUserExists = async (email: string, username: string) => {
  const userByEmail = await dbUsers.getByEmail(email, false);
  const userByUsername = await dbUsers.getByUsername(username, false);
  return !!userByEmail || !!userByUsername;
};

const getAll = async () => {
  const users = await dbUsers.getAll();
  if (!users) {
    throw 'Users not found';
  } else if (users && !users.length) return [];

  return users;
};

const create = async (user: User) => {
  const hashedPassword = await authUtils.createPasswordHash(user.password!);
  const newUser = await dbUsers.create({ ...user, password: hashedPassword });
  if (!newUser) throw 'User not created';

  return newUser;
};

const update = async (id: number, user: User) => {
  const updatedUser = await dbUsers.update(id, user);
  if (!updatedUser) throw 'User not updated';

  return updatedUser;
};

const login = async (username: string, password: string) => {
  const hashedPassword = await dbUsers.getHashedPassword(username);
  const passwordsMatch = await authUtils.comparePasswords(
    password,
    hashedPassword
  );
  if (!passwordsMatch) throw 'Passwords do not match';

  const token = authUtils.createToken(username);
  return token;
};

const remove = async (userId: number) => {
  const numberOfUsersDeleted = await dbUsers.remove(userId);
  if (!numberOfUsersDeleted) throw 'User not removed';
};

export {
  update,
  getAll,
  getGuestUser,
  create,
  getById,
  getByEmail,
  getByUsername,
  remove,
  login,
  isUserExists,
};
