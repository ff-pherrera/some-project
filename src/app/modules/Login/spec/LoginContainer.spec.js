import React from 'react';
import { shallow } from 'enzyme';
import { LoginWrapper } from '../LoginContainer';

describe('<LoginContainer />', () => {
  let wrapper;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      isLoggingIn: false,
      actions: {
        login: jest.fn().mockName('login'),
      },
    };
  });

  describe('default props provided', () => {
    beforeEach(() => {
      wrapper = shallow(<LoginWrapper {...defaultProps} />);
    });

    describe('<LoginComponent />', () => {
      test('should render with no children', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.children()).toHaveLength(0);
      });

      test('should have correct props passed', () => {
        expect(wrapper.prop('isLoggingIn')).toEqual(expect.any(Boolean));
        expect(wrapper.prop('isLoggingIn')).toBe(defaultProps.isLoggingIn);
        expect(wrapper.prop('onLogin')).toEqual(expect.any(Function));
        expect(wrapper.prop('onLogin')).toBe(defaultProps.actions.login);
        wrapper.simulate('login');
        expect(defaultProps.actions.login).toHaveBeenCalled();
      });
    });
  });

  describe('no default props provided', () => {
    beforeEach(() => {
      defaultProps.isLoggingIn = undefined;
      wrapper = shallow(<LoginWrapper {...defaultProps} />);
    });

    describe('<LoginComponent />', () => {
      test('should have correct props passed', () => {
        expect(wrapper.prop('isLoggingIn')).toEqual(expect.any(Boolean));
        expect(wrapper.prop('isLoggingIn')).toBe(false);
      });
    });
  });
});

