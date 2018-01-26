import { SET_HEADER, CLEAR_HEADER } from './HomeActionTypes';

const initialState = {
  header: '',
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_HEADER:
    return {
      ...state,
      header: action.header,
    };
  case CLEAR_HEADER:
    return {
      ...state,
      header: '',
    };
  default:
    return state;
  }
};

export default HomeReducer;
