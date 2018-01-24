import { combineReducers } from 'redux';
import HomeReducer from './modules/Home/HomeReducer';

const rootReducer = combineReducers({
  home: HomeReducer,
});

export default rootReducer;
