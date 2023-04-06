import UserTypesModel from '../models/userTypeModel';

const getByUserTypeName = async (userTypeName: string) => {
  const userType = await UserTypesModel.findOne({
    where: { userTypeName },
  });
  return userType;
};

export { getByUserTypeName };
