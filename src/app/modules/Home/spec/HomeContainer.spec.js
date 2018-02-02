import React from 'react';
import { shallow } from 'enzyme';
import { HomeWrapper } from '../HomeContainer';

describe('<HomeContainer />', () => {
  let wrapper;
  let defaultProps;
  const foo = 'foo';
  const bar = 'bar';

  beforeEach(() => {
    defaultProps = {
      header: 'foo',
      actions: {
        setHeader: jest.fn().mockName('setHeader'),
        logout: jest.fn().mockName('logout'),
      },
    };
  });

  describe('default props provided', () => {
    beforeEach(() => {
      wrapper = shallow(<HomeWrapper {...defaultProps} />);
    });

    describe('<HomeComponent />', () => {
      test('should render with no children', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.children()).toHaveLength(0);
      });

      test('should have correct props passed', () => {
        expect(wrapper.prop('header')).toEqual(expect.any(String));
        expect(wrapper.prop('header')).toBe(defaultProps.header);
        wrapper.simulate('headerChange', foo, bar);
        expect(defaultProps.actions.setHeader).toHaveBeenCalled();

        expect(wrapper.prop('onLogout')).toEqual(expect.any(Function));
        expect(wrapper.prop('onLogout')).toBe(defaultProps.actions.logout);
        wrapper.simulate('logout');
        expect(defaultProps.actions.logout).toHaveBeenCalled();
      });
    });
  });

  describe('no default props provided', () => {
    beforeEach(() => {
      defaultProps.header = undefined;
      wrapper = shallow(<HomeWrapper {...defaultProps} />);
    });

    test('should have correct props passed', () => {
      expect(wrapper.prop('header')).toBe('');
    });
  });
});
