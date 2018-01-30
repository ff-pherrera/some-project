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

  test('LoginForm should render with no children', () => {
    const loginForm = wrapper.find('LoginForm');

    expect(loginForm.exists()).toBe(true);
    expect(loginForm.children().length).toBe(0);
  });

  test('LoginForm should have correct props passed', () => {
    const loginForm = wrapper.find('LoginForm');

    expect(wrapper.prop('isLoggingIn')).toEqual(expect.any(Boolean));
    expect(loginForm.prop('isLoggingIn')).toBe(defaultProps.isLoggingIn);
    expect(wrapper.prop('onLogin')).toEqual(expect.any(Function));
    expect(loginForm.prop('onLogin')).toBe(defaultProps.onLogin);
  });
});
