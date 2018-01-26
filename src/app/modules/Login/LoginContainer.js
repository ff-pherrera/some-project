import React from 'react';
import T from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import * as loginActions from './LoginActions';

const defaultProps = {
  isLoggingIn: false,
};

const propTypes = {
  isLoggingIn: T.bool,
  actions: T.objectOf(T.any),
};

const mapStateToProps = state => ({
  isLoggingIn: state.login.isLoggingIn,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginActions, dispatch),
});

export const LoginWrapper = props => (
  <LoginComponent
    isLoggingIn={props.isLoggingIn}
    onLogin={props.actions.logIn}
  />
);

LoginWrapper.defaultProps = defaultProps;
LoginWrapper.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper);
