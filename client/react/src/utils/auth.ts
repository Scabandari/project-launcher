import { User } from 'src/store/models/UserModel';

export const TOKEN_KEY_USER = 'login_token';
export const KEY_USER = 'user_key';

export const setToken = (token: string) =>
  localStorage.setItem(TOKEN_KEY_USER, token);
export const getToken = () => localStorage.getItem(TOKEN_KEY_USER);
export const removeToken = () => localStorage.removeItem(TOKEN_KEY_USER);

export const setUser = (user: User) =>
  localStorage.setItem(KEY_USER, JSON.stringify(user));
export const getUser = (): User | null => {
  const user = localStorage.getItem(KEY_USER);
  return !!user ? JSON.parse(user) : null;
};
export const removeUser = () => localStorage.removeItem(KEY_USER);
