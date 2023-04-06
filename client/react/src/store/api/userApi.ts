import api from 'src/utils/api';
import { UserLoginPayload, UserRegisterPayload } from '../models/UserModel';

export const loginUser = (payload: UserLoginPayload) =>
  api.post('/users/login', payload);

export const guestLogin = () => api.post('/users/login/guest', {});

export const registerUser = (payload: UserRegisterPayload) =>
  api.post('/users/register', payload);
