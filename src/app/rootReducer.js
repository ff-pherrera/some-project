import { combineReducers } from 'redux';
import LoginReducer from './modules/Login/LoginReducer';
import HomeReducer from './modules/Home/HomeReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  home: HomeReducer,
});

export default rootReducer;
