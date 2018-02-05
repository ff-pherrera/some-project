import reducer from '../HomeReducer';
import * as actionTypes from '../HomeActionTypes';

describe('HomeReducer', () => {
  const initialState = {
    header: '',
  };
  const foo = 'foo';

  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle header change', () => {
    expect(reducer(initialState, {
      type: actionTypes.SET_HEADER,
      value: foo,
    })).toEqual({ header: foo });
  });

  test('should handle header clearing', () => {
    expect(reducer({}, { type: actionTypes.CLEAR_HEADER }))
      .toEqual(initialState);
  });
});
