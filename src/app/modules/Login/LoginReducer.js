import actionTypes from './LoginActionTypes';

const initialState = {
  isLoggingIn: false,
};

const LoginReducer = (state = initialState, action) => {
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

export default LoginReducer;
