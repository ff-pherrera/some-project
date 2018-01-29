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
    wrapper = shallow(<Button {...defaultProps} />);
  });

  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should display label', () => {
    expect(wrapper.text()).toBe(defaultProps.label);
  });

  test('should call onClick prop on click', () => {
    wrapper.find('button').simulate('click');
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
