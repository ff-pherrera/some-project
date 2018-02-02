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
  });

  describe('default props provided', () => {
    beforeEach(() => {
      wrapper = shallow(<LoginComponent {...defaultProps} />);
    });

    describe('<LoginForm />', () => {
      test('LoginForm should render with no children', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.children().length).toBe(0);
      });

      test('LoginForm should have correct props passed', () => {
        expect(wrapper.prop('isLoggingIn')).toEqual(expect.any(Boolean));
        expect(wrapper.prop('isLoggingIn')).toBe(defaultProps.isLoggingIn);
        expect(wrapper.prop('onLogin')).toEqual(expect.any(Function));
        expect(wrapper.prop('onLogin')).toBe(defaultProps.onLogin);
      });
    });
  });

  describe('no default props provided', () => {
    beforeEach(() => {
      defaultProps.isLoggingIn = undefined;
      wrapper = shallow(<LoginComponent {...defaultProps} />);
    });

    test('isLoggingIn should be false', () => {
      expect(wrapper.prop('isLoggingIn')).toBe(false);
    });
  });
});
