import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../LoginForm';

describe('<LoginForm />', () => {
  let wrapper;
  let defaultProps;
  let onLoginProp;
  let isLoggingInProp;
  let testValue;

  beforeAll(() => {
    isLoggingInProp = false;
    testValue = 'test';
  });

  beforeEach(() => {
    onLoginProp = jest.fn().mockName('onSubmit');
    defaultProps = {
      onLogin: onLoginProp,
      isLoggingIn: isLoggingInProp,
    };
    wrapper = shallow(<LoginForm {...defaultProps} />);
  });

  test('should have correct structure', () => {
    const form = wrapper.find('form');

    expect(form).toHaveLength(1);
    expect(form.find('CustomInput')).toHaveLength(2);
    expect(form.find('SubmitButton')).toHaveLength(1);
  });

  test('should have username input configured correctly', () => {
    const usernameInput = wrapper.find('form')
      .find('CustomInput').find('[name="username"]');

    expect(usernameInput.exists()).toBe(true);
    expect(usernameInput.prop('name')).toBe('username');
    expect(usernameInput.prop('disabled')).toBe(isLoggingInProp);
    expect(usernameInput.prop('placeHolder')).toBe('Username');
    expect(usernameInput.prop('value')).toBe(wrapper.state('username'));
    expect(usernameInput.prop('onChange')).toEqual(expect.any(Function));
  });

  test('should have password input configured correctly', () => {
    const usernameInput = wrapper.find('form')
      .find('CustomInput').find('[name="password"]');

    expect(usernameInput.exists()).toBe(true);
    expect(usernameInput.prop('name')).toBe('password');
    expect(usernameInput.prop('disabled')).toBe(isLoggingInProp);
    expect(usernameInput.prop('placeHolder')).toBe('Password');
    expect(usernameInput.prop('value')).toBe(wrapper.state('password'));
    expect(usernameInput.prop('onChange')).toEqual(expect.any(Function));
  });

  test('should have submit button configured correctly', () => {
    const submitButton = wrapper.find('form').find('SubmitButton');

    expect(submitButton.exists()).toBe(true);
    expect(submitButton.prop('submitting')).toBe(isLoggingInProp);
  });

  test('should update username correctly', () => {
    const usernameInput = wrapper.find('form')
      .find('CustomInput').find('[name="username"]');

    usernameInput.prop('onChange')('username', testValue);
    expect(wrapper.state('username')).toBe(testValue);
    // TODO: Revalidate child?
    // wrapper.instance().forceUpdate();
    // wrapper.update();
    // expect(usernameInput.prop('value')).toBe(value);
  });

  test('should update password correctly', () => {
    const passwordInput = wrapper.find('form')
      .find('CustomInput').find('[name="password"]');

    passwordInput.prop('onChange')('password', testValue);
    expect(wrapper.state('password')).toBe(testValue);
    // TODO: Revalidate child?
    // wrapper.instance().forceUpdate();
    // wrapper.update();
    // expect(passwordInput.prop('value')).toBe(value);
  });

  test('should submit information on submitting form', () => {
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(onLoginProp).toHaveBeenCalled();
  });
});
