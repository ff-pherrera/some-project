import { SET_HEADER, CLEAR_HEADER } from './HomeActionTypes';

const setHeaderAction = (header) => ({
  type: SET_HEADER,
  header,
});

const clearHeaderAction = () => ({
  type: CLEAR_HEADER,
  header: '',
});

export const setHeader = (header) => (
  dispatch => {
    dispatch(setHeaderAction(header));
  }
);

export const clearHeader = () => (
  dispatch => {
    dispatch(setHeaderAction(''));
  }
);