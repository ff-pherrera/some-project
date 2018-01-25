import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from '../CustomInput';

describe('<CustomInput/>', () => {
  let wrapper;
  let defaultProps;
  let valueProp = "testPropValue";
  let onChangePropSpy;

  beforeEach(() => {
    onChangePropSpy = jest.fn().mockName('onChange');
    defaultProps = {
      value: valueProp,
      onChange: onChangePropSpy
    };
    wrapper = shallow(<CustomInput {...defaultProps} />);
  });
  test('Should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('Input child with correct value prop', () => {
    expect(wrapper.find('input').prop('value')).toBe(headerProp);
  });
  test('Input child with correct onChange prop', () => {
    let input = wrapper.find('input');

    expect(input.prop('onChange')).toBe(expect.any(Function));
  });
  test('Should set  prop as input value', () => {
    let input = wrapper.find('input');

    expect(input.prop('onChange').toBeAny(Function));
    expect(input.prop('value')).toBe(valueProp);
  });
  // wrapper.prop('onchange').toBedefined
  // wrapper.simulate('onChange')
  // expect(onChagneSpy.toHaveBeenCalledWith(valueProp))

  // test('Should have correct prop value', () => {
  //   wrapper.find('CustomInput');
  //   // expect(wrapper.prop('value').toBe(valueProp));
  // });
    
  test('CustomInput child with correct onChange prop', () => {
    let customInput = wrapper.find('CustomInput');

    expect(customInput.prop('onChange')).toBeDefined();
  });
});

// Fercho

// wrapper.prop('value').toBe("value")

// wrapper.prop('onchange').toBedefined
// wrapper.simulate('onChange')
// expect(onChagneSpy.toHaveBeenCalledWith(valueProp))