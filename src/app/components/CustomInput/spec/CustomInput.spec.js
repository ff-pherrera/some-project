import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from '../CustomInput';

describe('<CustomInput/>', () => {
  let wrapper;
  let defaultProps;
  const valueProp = 'testPropValue';
  let onChangePropSpy;

  beforeEach(() => {
    onChangePropSpy = jest.fn().mockName('onChange');
    defaultProps = {
      value: valueProp,
      onChange: onChangePropSpy,
    };
    wrapper = shallow(<CustomInput {...defaultProps} />);
  });

  test('Should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('Should pass correct props to input', () => {
    expect(wrapper.find('input').prop('value')).toBe(valueProp);
    expect(wrapper.find('input').prop('onChange')).toBeDefined();
    // expect(wrapper.find('input').prop('onChange')).toBe(expect.any(Function));
  });
  test('Should call onChange prop from input', () => {
    expect(wrapper.find('input').prop('onChange')).toBeDefined();
    // expect(wrapper.find('input').prop('onChange')).toBe(expect.any(Function));
    wrapper.find('input').simulate('change', { target: { value: valueProp } });
    expect(onChangePropSpy).toHaveBeenCalledWith(valueProp);
  });
});
