import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../HomeActions';
import * as actionTypes from '../HomeActionTypes';
import routingService from '../../../services/routingService';

jest.mock('../../../services/routingService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('HomeActions', () => {
  describe('sync', () => {
    let expectedAction;
    const value = 'foo';

    test('should create an action to set the header', () => {
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
  });

  describe('async', () => {
    let store;

    beforeEach(() => {
      // Currently not used but might be used in the future
      store = mockStore({ isLoggingIn: false });
    });

    test('should logout', () => {
      store.dispatch(actions.logout());
      expect(routingService.goToLogin).toHaveBeenCalled();
    });
  });
});
