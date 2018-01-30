import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from '../HomeComponent';

describe('<HomeComponent />', () => {
  let wrapper;
  let defaultProps;
  const headerProp = 'testPropValue';

  beforeEach(() => {
    defaultProps = {
      header: headerProp,
      onChange: jest.fn().mockName('onChange'),
      onLogout: jest.fn().mockName('onLogout'),
    };
    wrapper = shallow(<HomeComponent {...defaultProps} />);
  });

  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render header text', () => {
    expect(wrapper.find('h1').text()).toBe(headerProp);
  });

  test('should pass props to CustomInput', () => {
    expect(wrapper.find('CustomInput').prop('value')).toBe(headerProp);
    expect(wrapper.find('CustomInput').prop('onChange'))
      .toBe(defaultProps.onChange);
  });
});
