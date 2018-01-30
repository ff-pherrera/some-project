import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from '../HomeComponent';

describe('<HomeComponent />', () => {
  let wrapper;
  let defaultProps;
  const headerProp = 'testPropValue';
  let onChangePropSpy;
  let onLogoutPropSpy;

  beforeEach(() => {
    onChangePropSpy = jest.fn().mockName('onChange');
    onLogoutPropSpy = jest.fn().mockName('onLogout');
    defaultProps = {
      header: headerProp,
      onChange: onChangePropSpy,
      onLogout: onLogoutPropSpy,
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
      .toEqual(expect.any(Function));
  });
});
