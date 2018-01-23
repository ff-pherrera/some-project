function errorHandler(dispatch, error, type) {
  const errorObj = {
    payload: 'You are not authorized to do this. Please login and try again.',
    type,
  };

  if (error.data) {
    errorObj.payload = error.data.message;
  }

  if (error.status === 401 || error.data) {
    dispatch(errorObj);
  }
}

export default errorHandler;
