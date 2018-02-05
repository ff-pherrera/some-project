import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../LoginForm';

describe('<LoginForm />', () => {
  let wrapper;
  let defaultProps;
  let onFieldChangedSpy;
  const foo = 'foo';

  beforeEach(() => {
    defaultProps = {
      isLoggingIn: false,
      onLogin: jest.fn().mockName('onSubmit'),
    };
    onFieldChangedSpy = jest.spyOn(LoginForm.prototype, 'onFieldChanged');
  });

  describe('default props provided', () => {
    beforeEach(() => {
      wrapper = shallow(<LoginForm {...defaultProps} />);
    });

    describe('<form />', () => {
      test('should render and contain everything', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.children()).toHaveLength(3);
      });

      test('onFieldChanged should update state', () => {
        const user = wrapper.find('CustomInput[name="username"]');
        const password = wrapper.find('CustomInput[name="username"]');

        user.simulate('change', 'username', foo);
        expect(wrapper.state('username')).toBe(foo);
        password.simulate('change', 'password', foo);
        expect(wrapper.state('password')).toBe(foo);
      });

      test('should submit information', () => {
        const preventDefault = jest.fn().mockName('preventDefault');

        wrapper.simulate('submit', { preventDefault });
        expect(preventDefault).toHaveBeenCalled();
        expect(defaultProps.onLogin).toHaveBeenCalledWith(
          wrapper.state('username'),
          wrapper.state('password'),
        );
      });
    });

    describe('<CustomInput /> (username)', () => {
      test('should render with no children', () => {
        const input = wrapper.find('CustomInput[name="username"]');

        expect(input.exists()).toBe(true);
        expect(input.children()).toHaveLength(0);
      });

      test('should have correct props passed', () => {
        const input = wrapper.find('CustomInput[name="username"]');

        expect(input.prop('name')).toBe('username');
        expect(input.prop('disabled')).toEqual(expect.any(Boolean));
        expect(input.prop('disabled')).toBe(defaultProps.isLoggingIn);
        expect(input.prop('placeHolder')).toBe('Username');
        expect(input.prop('value')).toBe(wrapper.state('username'));
        expect(input.prop('onChange')).toEqual(expect.any(Function));
      });

      test('should update username', () => {
        const input = wrapper.find('CustomInput[name="username"]');

        input.simulate('change', 'username', foo);
        expect(onFieldChangedSpy).toHaveBeenCalledWith('username', foo);
      });
    });

    describe('<CustomInput /> (password)', () => {
      test('should render with no children', () => {
        const input = wrapper.find('CustomInput[name="password"]');

        expect(input.exists()).toBe(true);
        expect(input.children()).toHaveLength(0);
      });

      test('should update password', () => {
        const input = wrapper.find('CustomInput[name="password"]');

        input.simulate('change', 'password', foo);
        expect(onFieldChangedSpy).toHaveBeenCalledWith('password', foo);
      });

      test('should have correct props passed', () => {
        const input = wrapper.find('CustomInput[name="password"]');

        expect(input.prop('name')).toBe('password');
        expect(input.prop('disabled')).toEqual(expect.any(Boolean));
        expect(input.prop('disabled')).toBe(defaultProps.isLoggingIn);
        expect(input.prop('placeHolder')).toBe('Password');
        expect(input.prop('value')).toBe(wrapper.state('password'));
        expect(input.prop('onChange')).toEqual(expect.any(Function));
      });
    });

    describe('<SubmitButton />', () => {
      test('should render with no children', () => {
        const button = wrapper.find('SubmitButton');

        expect(button.exists()).toBe(true);
        expect(button.children()).toHaveLength(0);
      });

      test('SubmitButton should have correct props passed', () => {
        const button = wrapper.find('SubmitButton');

        expect(button.prop('submitting')).toEqual(expect.any(Boolean));
        expect(button.prop('submitting')).toBe(defaultProps.isLoggingIn);
      });
    });
  });

  describe('no default props provided', () => {
    beforeEach(() => {
      defaultProps.isLoggingIn = undefined;
      wrapper = shallow(<LoginForm {...defaultProps} />);
    });

    describe('<form />', () => {
      test('isLoggingIn should be false', () => {
        expect(wrapper.instance().props.isLoggingIn).toBe(false);
      });
    });

    describe('<CustomInput /> (username)', () => {
      test('isLoggingIn should be default value', () => {
        const instance = wrapper.instance().props;

        expect(wrapper.find('CustomInput[name="username"]')
          .prop('disabled')).toBe(instance.isLoggingIn);
      });
    });

    describe('<CustomInput /> (password)', () => {
      test('isLoggingIn should be default value', () => {
        const instance = wrapper.instance().props;

        expect(wrapper.find('CustomInput[name="password"]')
          .prop('disabled')).toBe(instance.isLoggingIn);
      });
    });
  });
});

