import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../LoginActions';
import * as actionTypes from '../LoginActionTypes';
import authService from '../../../services/authService';
import routingService from '../../../services/routingService';

jest.mock('../../../services/authService');
jest.mock('../../../services/routingService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('LoginActions', () => {
  describe('async', () => {
    let expectedActions;
    let store;

    beforeEach(() => {
      store = mockStore({ isLoggingIn: false });
    });

    test('login should fail with invalid credentials', () => {
      authService.attemptLogin
        .mockReturnValue(Promise.reject(new Error('Invalid credentials')));

      expectedActions = [
        { type: actionTypes.default.SET_IS_LOGGING_IN, value: true },
        { type: actionTypes.default.SET_IS_LOGGING_IN, value: false },
      ];

      return store.dispatch(actions.login())
        .then((err) => {
          expect(store.getActions()).toEqual(expectedActions);
          expect(err instanceof Error).toBe(true);
          expect(err.message).toBe('Invalid credentials');
        });
    });

    test('login should success', () => {
      authService.attemptLogin.mockReturnValue(Promise.resolve());

      expectedActions = [
        { type: actionTypes.default.SET_IS_LOGGING_IN, value: true },
        { type: actionTypes.default.SET_IS_LOGGING_IN, value: false },
      ];

      return store.dispatch(actions.login())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          expect(routingService.goToHome).toHaveBeenCalled();
        });
    });
  });
});
