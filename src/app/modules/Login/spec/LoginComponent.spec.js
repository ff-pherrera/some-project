import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../LoginComponent';

describe('<LoginComponent />', () => {
  let wrapper;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      isLoggingIn: false,
      onLogin: jest.fn().mockName('onLogin'),
    };
    wrapper = shallow(<LoginComponent {...defaultProps} />);
  });

  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should pass props to LoginForm', () => {
    const loginForm = wrapper.find('LoginForm');

    expect(loginForm.prop('isLoggingIn')).toBe(defaultProps.isLoggingIn);
    expect(loginForm.prop('onLogin')).toBe(defaultProps.onLogin);
  });
});
