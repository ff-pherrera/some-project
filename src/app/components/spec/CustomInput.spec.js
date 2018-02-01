import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from '../CustomInput';

describe('<CustomInput />', () => {
  let wrapper;
  let defaultProps;
  const testValue = 'foo';

  beforeEach(() => {
    defaultProps = {
      name: 'name',
      value: 'value',
      className: '',
      placeHolder: '',
      disabled: false,
      onChange: jest.fn().mockName('onChange'),
    };
    wrapper = shallow(<CustomInput {...defaultProps} />);
  });

  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should validate props', () => {
    expect(wrapper.find('input').prop('name')).toBe(defaultProps.name);
    expect(wrapper.find('input').prop('value')).toBe(defaultProps.value);
    expect(wrapper.find('input').prop('disabled')).toBe(defaultProps.disabled);
    expect(wrapper.find('input').prop('className'))
      .toBe(defaultProps.className);
    expect(wrapper.find('input').prop('placeholder'))
      .toBe(defaultProps.placeHolder);
    expect(wrapper.find('input').prop('onChange'))
      .toEqual(expect.any(Function));
  });

  test('should call onChange prop on changes', () => {
    wrapper.find('input').simulate('change', { target: { value: testValue } });
    expect(defaultProps.onChange)
      .toHaveBeenCalledWith(defaultProps.name, testValue);
  });
});
