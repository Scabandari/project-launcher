import { NavigateFunction } from 'react-router-dom';
import {
  User,
  UserLoginPayload,
  UserRegisterPayload,
} from '../models/UserModel';

export enum AuthActionTypes {
  LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  GUEST_LOGIN = 'GUEST_LOGIN',
  RESET_LOGIN_LOADING = 'RESET_LOGIN_LOADING',

  REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAILURE = 'REGISTER_FAILURE',
  RESET_REGISTER_LOADING = 'RESET_REGISTER_LOADING',

  LOGOUT = 'LOGOUT',
}

export interface AuthAction {
  type: AuthActionTypes;
  payload?: any;
}

export const logout = () => ({
  type: AuthActionTypes.LOGOUT,
});

export const loginUserRequest = (payload: UserLoginPayload) => ({
  type: AuthActionTypes.LOGIN_USER_REQUEST,
  payload,
});

export const guestLogin = ({ navigate }: { navigate: NavigateFunction }) => ({
  type: AuthActionTypes.GUEST_LOGIN,
  payload: { navigate },
});

export const registerUserRequest = (payload: UserRegisterPayload) => {
  return {
    type: AuthActionTypes.REGISTER_USER_REQUEST,
    payload,
  };
};

export const loginUserSuccess = ({
  user,
  token,
}: {
  user: User;
  token: string;
}) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: { user, token },
});

export const registerUserSuccess = () => () => ({
  type: AuthActionTypes.REGISTER_USER_REQUEST,
});

export const loginUserFailure = (error: string) => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: error,
});
