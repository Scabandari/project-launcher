import { v4 as uuid } from "uuid";

import { user1 } from "./user";

export const profile1 = {
  id: uuid(),
  bio: "User1's profile bio",
  userId: user1.id,
};
