import { ErrorBadRequest } from '../../utils/error';
import UserModel from '../models/userModel';
import { User } from '../types/userTypes';

const getAll = async () =>
  (await UserModel.findAll()).map(({ password, ...user }: User) => user);

const getById = async (id: number) => {
  const { password, ...user } = await UserModel.findByPk(id);

  return user;
};

const getByEmail = async (
  email: string,
  throwError = true
): Promise<User | null> => {
  try {
    const { password, ...user } = await UserModel.findOne({
      where: {
        email,
      },
    });

    return user;
  } catch (err) {
    if (throwError) {
      throw new ErrorBadRequest('email', email, 'User not found');
    }
    return null;
  }
};

const getByUsername = async (
  username: string,
  throwError = true
): Promise<User | null> => {
  try {
    const { password, ...user } = await UserModel.findOne({
      where: {
        username,
      },
    });

    return user;
  } catch (err) {
    if (throwError) {
      throw new ErrorBadRequest('username', username, 'User not found');
    }
    return null;
  }
};

const create = async (userToCreate: User) => {
  const { dataValues } = await UserModel.create(userToCreate);
  const { password, ...user } = dataValues;

  return user;
};

const update = async (id: number, userToUpdate: User) => {
  const [numberOfAffectedRows, [updatedUser]] = await UserModel.update(
    userToUpdate,
    {
      where: {
        id,
      },
      returning: true,
    }
  );
  if (!numberOfAffectedRows) throw 'User not updated';
  const { password, ...user } = updatedUser;

  return user;
};

const remove = async (id: number) =>
  await UserModel.destroy({
    where: {
      id,
    },
  });

const getHashedPassword = async (username: string) => {
  const user = await UserModel.findOne({
    where: {
      username,
    },
  });
  if (!user) throw 'User not found';
  const { password } = user;

  return password;
};

export {
  getHashedPassword,
  getAll,
  getById,
  getByEmail,
  getByUsername,
  create,
  update,
  remove,
};
