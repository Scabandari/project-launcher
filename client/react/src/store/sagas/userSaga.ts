import { put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-hot-toast';
import { loginUserSuccess, AuthAction } from '../actions/userActions';
import { AuthActionTypes } from '../actions/userActions';
import { loginUser } from '../api/userApi';
import { callGenerator } from './sagaUtils';

function* loginUserSaga(action: AuthAction) {
  try {
    const {
      data: { user },
    } = yield* callGenerator(loginUser, action.payload);
    yield put(loginUserSuccess(user));
  } catch (error: any) {
    toast.error(error.response.data.error.message);
  } finally {
    yield put({ type: AuthActionTypes.RESET_LOGIN_LOADING });
  }
}

export default function* rootSaga() {
  yield takeLatest(AuthActionTypes.LOGIN_USER_REQUEST, loginUserSaga);
}
