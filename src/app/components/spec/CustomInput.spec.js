import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from '../CustomInput';

describe('<CustomInput />', () => {
  let wrapper;
  let defaultProps;
  const nameProp = 'name';
  const valueProp = 'value';
  const classNameProp = 'className';
  const placeHolderProp = 'placeHolder';
  const disabledProp = false;
  let onChangePropSpy;

  beforeEach(() => {
    onChangePropSpy = jest.fn().mockName('onChange');
    defaultProps = {
      name: nameProp,
      value: valueProp,
      className: classNameProp,
      placeHolder: placeHolderProp,
      disabled: disabledProp,
      onChange: onChangePropSpy,
    };
    wrapper = shallow(<CustomInput {...defaultProps} />);
  });

  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // TODO: Add test to manage default props
  // test('should initialize with defaultProps', () => {});

  test('should pass correct props to input', () => {
    expect(wrapper.find('input').prop('name')).toBe(nameProp);
    expect(wrapper.find('input').prop('value')).toBe(valueProp);
    expect(wrapper.find('input').prop('className')).toBe(classNameProp);
    expect(wrapper.find('input').prop('placeholder')).toBe(placeHolderProp);
    expect(wrapper.find('input').prop('disabled')).toBe(disabledProp);
    expect(wrapper.find('input').prop('onChange'))
      .toEqual(expect.any(Function));
  });

  test('should call onChange prop from input', () => {
    wrapper.find('input').simulate('change', { target: { value: `${valueProp}1` } });
    expect(onChangePropSpy).toHaveBeenCalledWith(nameProp, `${valueProp}1`);
  });
});
