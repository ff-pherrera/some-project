import { SET_HEADER, CLEAR_HEADER } from './HomeActionTypes';

export const setHeader = header => ({
  type: SET_HEADER,
  header,
});

export const clearHeader = () => ({
  type: CLEAR_HEADER,
});
