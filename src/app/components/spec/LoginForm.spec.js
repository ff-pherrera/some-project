import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../LoginForm';

describe('<LoginForm />', () => {
  let wrapper;
  let defaultProps;
  const testValue = 'test';

  beforeEach(() => {
    defaultProps = {
      onLogin: jest.fn().mockName('onSubmit'),
      isLoggingIn: false,
    };
    wrapper = shallow(<LoginForm {...defaultProps} />);
  });

  test('should render components', () => {
    const form = wrapper.find('form');

    expect(form).toHaveLength(1);
    expect(form.find('CustomInput')).toHaveLength(2);
    expect(form.find('SubmitButton')).toHaveLength(1);
  });

  test('should validate props for username CustomInput', () => {
    const usernameInput = wrapper.find('form').find('CustomInput')
      .find('[name="username"]');

    expect(usernameInput.prop('name')).toBe('username');
    expect(usernameInput.prop('disabled')).toBe(defaultProps.isLoggingIn);
    expect(usernameInput.prop('placeHolder')).toBe('Username');
    expect(usernameInput.prop('value')).toBe(wrapper.state('username'));
    expect(usernameInput.prop('onChange')).toEqual(expect.any(Function));
  });

  test('should validate props for password CustomInput', () => {
    const usernameInput = wrapper.find('form').find('CustomInput')
      .find('[name="password"]');

    expect(usernameInput.prop('name')).toBe('password');
    expect(usernameInput.prop('disabled')).toBe(defaultProps.isLoggingIn);
    expect(usernameInput.prop('placeHolder')).toBe('Password');
    expect(usernameInput.prop('value')).toBe(wrapper.state('password'));
    expect(usernameInput.prop('onChange')).toEqual(expect.any(Function));
  });

  test('validate props for SubmitButton', () => {
    const submitButton = wrapper.find('form').find('SubmitButton');

    expect(submitButton.prop('submitting')).toBe(defaultProps.isLoggingIn);
  });

  test('should update username', () => {
    const usernameInput = wrapper.find('form')
      .find('CustomInput[name="username"]');
    const onChange = usernameInput.prop('onChange');

    onChange('username', testValue);
    expect(wrapper.state('username')).toBe(testValue);
  });

  test('should update password', () => {
    const passwordInput = wrapper.find('form')
      .find('CustomInput').find('[name="password"]');
    const onChange = passwordInput.prop('onChange');

    onChange('password', testValue);
    expect(wrapper.state('password')).toBe(testValue);
  });

  test('should submit information', () => {
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(defaultProps.onLogin).toHaveBeenCalledWith(
      wrapper.state('username'),
      wrapper.state('password'),
    );
  });
});
