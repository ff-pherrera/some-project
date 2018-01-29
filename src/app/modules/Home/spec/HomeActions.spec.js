import * as actions from '../HomeActions';
import * as actionTypes from '../HomeActionTypes';

describe('HomeActions', () => {
  let value;
  let expectedAction;

  test('should create an action to set the header', () => {
    value = 'value';
    expectedAction = {
      type: actionTypes.SET_HEADER,
      value,
    };
    expect(actions.setHeader(value)).toEqual(expectedAction);
  });

  test('should create an action to clear the header', () => {
    expectedAction = {
      type: actionTypes.CLEAR_HEADER,
    };
    expect(actions.clearHeader()).toEqual(expectedAction);
  });

  // test('should create an action to clear the header', () => {
  //   // TODO: Manage redirection.
  // });
});
