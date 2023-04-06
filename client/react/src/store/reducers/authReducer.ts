import { AuthAction, AuthActionTypes } from '../actions/userActions';
import { User } from '../models/UserModel';
import {
  getToken,
  getUser,
  setToken,
  setUser,
  removeToken,
  removeUser,
} from 'src/utils/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  login: {
    loading: boolean;
    success: boolean | undefined;
  };
  register: {
    loading: boolean;
    success: boolean | undefined;
  };
}
const localStorageToken = getToken();
const localStorageUser = getUser();

const initialState: AuthState = {
  user: localStorageUser,
  token: localStorageToken,
  login: {
    loading: false,
    success: undefined,
  },
  register: {
    loading: false,
    success: undefined,
  },
};

function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_USER_REQUEST:
      return {
        ...state,
        login: {
          loading: true,
          success: undefined,
        },
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      setToken(action.payload.token);
      setUser(action.payload.user as User);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user as User,
        login: {
          loading: false,
          success: true,
        },
      };
    case AuthActionTypes.LOGIN_FAILURE:
      removeToken();
      removeUser();
      return {
        ...state,
        token: null,
        user: null,
        login: {
          loading: false,
          success: false,
        },
      };
    case AuthActionTypes.RESET_LOGIN_LOADING:
      return {
        ...state,
        login: {
          loading: false,
          success: undefined,
        },
      };
    case AuthActionTypes.REGISTER_USER_REQUEST:
      return {
        ...state,
        login: {
          loading: true,
          success: undefined,
        },
      };
    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user as User,
        register: {
          loading: false,
          success: true,
        },
      };
    case AuthActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        token: null,
        user: null,
        register: {
          loading: false,
          success: false,
        },
      };
    case AuthActionTypes.RESET_REGISTER_LOADING:
      return {
        ...state,
        register: {
          loading: false,
          success: undefined,
        },
      };
    case AuthActionTypes.LOGOUT:
      removeToken();
      removeUser();
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
}

export default authReducer;
