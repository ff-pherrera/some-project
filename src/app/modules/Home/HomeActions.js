import { SET_HEADER, CLEAR_HEADER } from './HomeActionTypes';

export const setHeader = header => ({
  type: SET_HEADER,
  header,
});

export const clearHeader = () => ({
  type: CLEAR_HEADER,
  header: '',
});

// const setHeaderAction = header => ({
//   type: SET_HEADER,
//   header,
// });

// const clearHeaderAction = () => ({
//   type: CLEAR_HEADER,
//   header: '',
// });

// export const setHeader = header => (
//   dispatch => dispatch(setHeaderAction(header))
// );

// export const clearHeader = () => (
//   dispatch => dispatch(clearHeaderAction())
// );
