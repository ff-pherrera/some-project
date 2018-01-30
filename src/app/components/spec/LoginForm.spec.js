import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../LoginForm';

describe('<LoginForm />', () => {
  let wrapper;
  let defaultProps;
  const testValue = 'test';

  beforeEach(() => {
    defaultProps = {
      isLoggingIn: false,
      onLogin: jest.fn().mockName('onSubmit'),
    };
    wrapper = shallow(<LoginForm {...defaultProps} />);
  });

  test('form, Two CustomInput, SubmitButton should render', () => {
    const form = wrapper.find('form');

    expect(form.exists()).toBe(true);
    expect(form.find('CustomInput[name="username"]').exists()).toBe(true);
    expect(form.find('CustomInput[name="password"]').exists()).toBe(true);
    expect(form.find('SubmitButton').exists()).toBe(true);
  });

  test('form contains other components', () => {
    expect(wrapper.find('form').children()).toEqual(wrapper.children());
  });

  test('username CustomInput should have no children', () => {
    const input = wrapper.find('form').find('CustomInput[name="username"]');

    expect(input.children().length).toBe(0);
  });

  test('password CustomInput should have no children', () => {
    const input = wrapper.find('form').find('CustomInput[name="password"]');

    expect(input.children().length).toBe(0);
  });

  test('username CustomInput should have correct props passed', () => {
    const input = wrapper.find('form').find('CustomInput[name="username"]');

    expect(input.prop('name')).toBe('username');
    expect(input.prop('disabled')).toEqual(expect.any(Boolean));
    expect(input.prop('disabled')).toBe(defaultProps.isLoggingIn);
    expect(input.prop('placeHolder')).toBe('Username');
    expect(input.prop('value')).toBe(wrapper.state('username'));
    expect(input.prop('onChange')).toEqual(expect.any(Function));
  });

  test('password CustomInput should have correct props passed', () => {
    const input = wrapper.find('form').find('CustomInput[name="password"]');

    expect(input.prop('name')).toBe('password');
    expect(input.prop('disabled')).toEqual(expect.any(Boolean));
    expect(input.prop('disabled')).toBe(defaultProps.isLoggingIn);
    expect(input.prop('placeHolder')).toBe('Password');
    expect(input.prop('value')).toBe(wrapper.state('password'));
    expect(input.prop('onChange')).toEqual(expect.any(Function));
  });

  test('SubmitButton should have correct props passed', () => {
    const submitButton = wrapper.find('form').find('SubmitButton');

    expect(submitButton.prop('submitting')).toEqual(expect.any(Boolean));
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
    const preventDefault = jest.fn().mockName('preventDefault');

    wrapper.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
    expect(defaultProps.onLogin).toHaveBeenCalledWith(
      wrapper.state('username'),
      wrapper.state('password'),
    );
  });
});
