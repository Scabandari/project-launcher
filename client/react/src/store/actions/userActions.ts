import { User, UserLoginPayload } from '../models/UserModel';

export enum AuthActionTypes {
  LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  RESET_LOGIN_LOADING = 'RESET_LOGIN_LOADING',
  LOGOUT = 'LOGOUT',
}

export interface AuthAction {
  type: AuthActionTypes;
  payload?: any;
}

export const loginUserRequest = (payload: UserLoginPayload) => ({
  type: AuthActionTypes.LOGIN_USER_REQUEST,
  payload,
});

export const loginUserSuccess = (user: User) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const loginUserFailure = (error: string) => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: error,
});
