import * as userTypeDb from '../db/userTypesDb';

const getUserTypeId = async (userTypeName: string) => {
  const userType = await userTypeDb.getByUserTypeName(userTypeName);
  if (!userType) {
    throw new Error('User type not found');
  }
  return userType.id;
};

export { getUserTypeId };
