import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from '../HomeComponent';

describe('<HomeComponent />', () => {
  let wrapper;
  let defaultProps;
  const headerProp = 'testPropValue';
  let onChangePropSpy;

  beforeEach(() => {
    onChangePropSpy = jest.fn().mockName('onChange');
    defaultProps = {
      header: headerProp,
      onChange: onChangePropSpy,
    };
    wrapper = shallow(<HomeComponent {...defaultProps} />);
  });

  test('Should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('Should render header text', () => {
    expect(wrapper.find('h1').text()).toBe(headerProp);
  });
  test('Should pass correct props to CustomInput', () => {
    expect(wrapper.find('CustomInput').prop('value')).toBe(headerProp);
    expect(wrapper.find('CustomInput').prop('onChange')).toBeDefined();
    // expect(wrapper.find('CustomInput').prop('onChange'))
    //   .toBe(expect.any(Function));
  });
});
