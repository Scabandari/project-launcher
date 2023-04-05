import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './authReducer';

export default combineReducers({
  router: routerReducer,
  users: userReducer,
});
