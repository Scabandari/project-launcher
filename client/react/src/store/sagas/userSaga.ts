import { put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-hot-toast';
import { loginUserSuccess, AuthAction } from '../actions/userActions';
import { AuthActionTypes } from '../actions/userActions';
import { loginUser, registerUser, guestLogin } from '../api/userApi';
import { callGenerator } from './sagaUtils';

function* loginUserSaga(action: AuthAction) {
  const { navigate, ...rest } = action.payload;
  try {
    const {
      data: { user, token },
    } = yield* callGenerator(loginUser, rest);
    yield put(loginUserSuccess({ user, token }));
    navigate('/');
  } catch (error: any) {
    toast.error(error.response.data.error.message);
  } finally {
    yield put({ type: AuthActionTypes.RESET_LOGIN_LOADING });
  }
}

function* guestLoginSaga(action: AuthAction) {
  const { navigate } = action.payload;
  try {
    const {
      data: { user, token },
    } = yield* callGenerator(guestLogin);
    yield put(loginUserSuccess({ user, token }));
    navigate('/');
  } catch (error: any) {
    toast.error(error.response.data.error.message);
  } finally {
    yield put({ type: AuthActionTypes.RESET_LOGIN_LOADING });
  }
}

function* registerUserSaga(action: AuthAction) {
  try {
    const { navigate, ...rest } = action.payload;
    yield* callGenerator(registerUser, rest);
    toast.success('User created successfully');
    navigate('/login');
  } catch (error: any) {
    toast.error(error.response.data.error.message);
  } finally {
    yield put({ type: AuthActionTypes.RESET_REGISTER_LOADING });
  }
}

export default function* rootSaga() {
  yield takeLatest(AuthActionTypes.LOGIN_USER_REQUEST, loginUserSaga);
  yield takeLatest(AuthActionTypes.REGISTER_USER_REQUEST, registerUserSaga);
  yield takeLatest(AuthActionTypes.GUEST_LOGIN, guestLoginSaga);
}
