import * as actions from '../HomeActions';
import * as actionTypes from '../HomeActionTypes';

describe('HomeActions', () => {
  let header;
  let expectedAction;

  test('should create an action to set the header', () => {
    header = 'header';
    expectedAction = {
      type: actionTypes.SET_HEADER,
      header,
    };
    expect(actions.setHeader(header)).toEqual(expectedAction);
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
