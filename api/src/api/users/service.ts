import * as dbUsers from "./db";

const getAll = async (throwError = false) => {
  const users = await dbUsers.getAll();
  if (!users && throwError) {
    throw "Users not found";
  } else if (users && !users.length) return [];
  return users;
};

export { getAll };
