import { combineReducers } from 'redux';
import HomeReducer from './modules/Home/reducers/HomeReducer';

const rootReducer = combineReducers({
  home: HomeReducer,
});

export default rootReducer;
