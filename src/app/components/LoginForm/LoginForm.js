import React, { Component } from 'react';
import T from 'prop-types';
import CustomInput from '../CustomInput/CustomInput';
import SubmitButton from '../SubmitButton/SubmitButton';

const defaultProps = {
  isLoggingIn: false,
};

const propTypes = {
  isLoggingIn: T.bool,
  onLogin: T.func.isRequired,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onFieldChanged = this.onFieldChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFieldChanged(field, value) {
    this.setState({
      [field]: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <CustomInput
          name="username"
          disabled={this.props.isLoggingIn}
          placeHolder="Username"
          onChange={this.onFieldChanged}
          value={this.state.username}
        />
        <CustomInput
          name="password"
          placeHolder="Password"
          disabled={this.props.isLoggingIn}
          onChange={this.onFieldChanged}
          value={this.state.password}
        />
        <SubmitButton submitting={this.props.isLoggingIn} />
      </form>
    );
  }
}

LoginForm.defaultProps = defaultProps;
LoginForm.propTypes = propTypes;

export default LoginForm;
