interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

interface UserLoginPayload {
  email: string;
  password: string;
}

interface UserRegisterPayload {
  username: string;
  email: string;
  password: string;
}

export type { User, UserLoginPayload, UserRegisterPayload };
