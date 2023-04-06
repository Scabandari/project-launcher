import { NavigateFunction } from 'react-router-dom';

interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

interface UserLoginPayload {
  email: string;
  password: string;
  navigate: NavigateFunction;
}

interface UserRegisterPayload {
  username: string;
  email: string;
  password: string;
  navigate?: NavigateFunction;
}

export type { User, UserLoginPayload, UserRegisterPayload };
