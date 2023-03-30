import UserTypes from './userTypesModel';

const getAll = async () => await UserTypes.findAll();

export default { getAll };
