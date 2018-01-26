import actionTypes from './LoginActionTypes';

const initialState = {
  isLoggingIn: false,
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_IS_LOGGING_IN:
    return {
      ...state,
      isLoggingIn: action.value,
    };
  default:
    return state;
  }
};

export default HomeReducer;
