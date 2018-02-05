import reducer from '../LoginReducer';
import actionTypes from '../LoginActionTypes';

describe('LoginReducer', () => {
  const initialState = {
    isLoggingIn: false,
  };
  const foo = true;

  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle isLoggingIn change', () => {
    expect(reducer(initialState, {
      type: actionTypes.SET_IS_LOGGING_IN,
      value: foo,
    })).toEqual({ isLoggingIn: foo });
  });
});
