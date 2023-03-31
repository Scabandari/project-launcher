import User from '../models/userModel';

const getAll = async () => await User.findAll();

const getById = async (id: number) => await User.findByPk(id);

const getByUsername = async (username: string) =>
  await User.findOne({
    where: {
      username,
    },
  });

const create = async (user: any) => await User.create(user);

const remove = async (id: number) =>
  await User.destroy({
    where: {
      id,
    },
  });

export { getAll, getById, getByUsername, create, remove };
