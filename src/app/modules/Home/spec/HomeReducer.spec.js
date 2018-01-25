import reducer from '../HomeReducer'
import * as actionTypes from '../HomeActionTypes'

describe('HomeReducer', () => {
  let initialState = {
    header: '',
  };

  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle change of header', () => {
    expect(reducer({}, { type: actionTypes.SET_HEADER, header: 'Some header' }))
      .toEqual({ header: 'Some header' });
  });

  test('should handle clearing of header', () => {
    expect(reducer({}, { type: actionTypes.CLEAR_HEADER }))
      .toEqual({ header: '' });
  });
})