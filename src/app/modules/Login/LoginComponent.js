import React from 'react';
import T from 'prop-types';
import LoginForm from './components/LoginForm';

const defaultProps = {
  isLoggingIn: false,
};

const propTypes = {
  isLoggingIn: T.bool,
  onLogin: T.func.isRequired,
};

const LoginComponent = props => (
  <LoginForm
    isLoggingIn={props.isLoggingIn}
    onLogin={props.onLogin}
  />
);

LoginComponent.defaultProps = defaultProps;
LoginComponent.propTypes = propTypes;

export default LoginComponent;
