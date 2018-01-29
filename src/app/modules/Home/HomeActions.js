import routingService from '../../services/routingService';
import { SET_HEADER, CLEAR_HEADER } from './HomeActionTypes';

export const setHeader = value => ({
  type: SET_HEADER,
  value,
});

export const clearHeader = () => ({
  type: CLEAR_HEADER,
});

export const logout = () => (
  () => {
    routingService.goToLogin();
  }
);
