import actionTypes from './LoginActionTypes';
import authService from '../../services/authService';
import routingService from '../../services/routingService';

export const setLoggingIn = value => ({
  type: actionTypes.SET_IS_LOGGING_IN,
  value,
});

export const logIn = (username, password) => (
  (dispatch) => {
    dispatch(setLoggingIn(true));
    return authService.attemptLogIn(username, password)
      .then(() => {
        dispatch(setLoggingIn(false));
        routingService.goToHome();
      })
      .catch(() => {
        dispatch(setLoggingIn(false));
        routingService.goToHome();
      });
  }
);
