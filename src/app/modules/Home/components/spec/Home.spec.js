import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from '../HomeComponent';

describe('< HomeComponent />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeComponent />);
  });
  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('Should render header text', () => {
    const header = wrapper.find('h1');

    expect(header.text()).toBe('First Factory - React JS');
  });
});
