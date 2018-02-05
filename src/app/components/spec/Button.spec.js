import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  let wrapper;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      label: 'Button',
      onClick: jest.fn().mockName('onClick'),
    };
  });

  describe('default props provided', () => {
    beforeEach(() => {
      wrapper = shallow(<Button {...defaultProps} />);
    });

    describe('<button />', () => {
      test('should render with label as children', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.children()).toHaveLength(1);
      });

      test('should display label', () => {
        expect(wrapper.text()).toBe(defaultProps.label);
      });

      test('should call onClick prop on click', () => {
        wrapper.simulate('click');
        expect(defaultProps.onClick).toHaveBeenCalled();
      });
    });
  });

  describe('no default props provided', () => {
    beforeEach(() => {
      defaultProps.label = undefined;
      wrapper = shallow(<Button {...defaultProps} />);
    });

    describe('<button />', () => {
      test('should display "Button" as label', () => {
        expect(wrapper.text()).toBe('Button');
      });
    });
  });
});
