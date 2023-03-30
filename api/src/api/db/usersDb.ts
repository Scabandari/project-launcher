import User from '../models/userModel';

const getAll = async () => await User.findAll();

const create = async (user: any) => {
  // const newUser =

  // typeof user.userTypeId === 'string'
  // ? { ...user, userTypeId: parseInt(user.userTypeId) }
  // : user;
  // let newUser;
  // if (typeof user.userTypeId === 'string') {
  //   newUser = { ...user, userTypeId: parseInt(user.userTypeId) };
  // } else {
  //   newUser = user;
  // }
  return await User.create(user);
};

export { getAll, create };
