import * as actions from '../LoginActions';
import * as actionTypes from '../LoginActionTypes';

describe('HomeActions', () => {
  describe('Sync actions', () => {
    let header;
    let expectedAction;

    test('should create an action to set the header', () => {
      header = 'New Header';
      expectedAction = {
        type: actionTypes.default.SET_IS_LOGGING_IN,
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
  });
  describe('async actions', () => {
    // Set tests in here for async actions, using redux-thunk
  });
});
