import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from '../CustomInput';

describe('<CustomInput/>', () => {
  let wrapper;
  let defaultProps;
  const nameProp = 'name';
  const valueProp = 'value';
  let onChangePropSpy;

  beforeEach(() => {
    onChangePropSpy = jest.fn().mockName('onChange');
    defaultProps = {
      name: nameProp,
      value: valueProp,
      onChange: onChangePropSpy,
    };
    wrapper = shallow(<CustomInput {...defaultProps} />);
  });

  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should pass correct props to input', () => {
    expect(wrapper.find('input').prop('name')).toBe(nameProp);
    expect(wrapper.find('input').prop('value')).toBe(valueProp);
    expect(wrapper.find('input').prop('onChange'))
      .toEqual(expect.any(Function));
  });

  // test('should call onChange prop from input', () => {
  //   expect(wrapper.find('input').prop('onChange'))
  //     .toEqual(expect.any(Function));
  //   wrapper.find('input').simulate('change', { target: { value: valueProp } });
  //   expect(onChangePropSpy).toHaveBeenCalledWith(nameProp, valueProp);
  // });
});
