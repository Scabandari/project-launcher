import { AuthAction, AuthActionTypes } from '../actions/userActions';
import { User } from '../models/UserModel';

interface AuthState {
  user: User | null;
  login: {
    loading: boolean;
    success: boolean | undefined;
  };
}

const initialState: AuthState = {
  user: null,
  login: {
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
      return {
        ...state,
        user: action.payload as User,
        login: {
          loading: false,
          success: true,
        },
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        login: {
          loading: false,
          success: false,
        },
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case AuthActionTypes.RESET_LOGIN_LOADING:
      return {
        ...state,
        login: {
          loading: false,
          success: undefined,
        },
      };
    default:
      return state;
  }
}

export default authReducer;
