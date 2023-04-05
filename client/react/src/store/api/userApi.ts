import api from 'src/utils/api';
import { UserLoginPayload } from '../models/UserModel';

export const loginUser = (payload: UserLoginPayload) =>
  api.post('/users/login', payload);
