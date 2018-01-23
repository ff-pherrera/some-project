import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('< Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('Should render header text', () => {
    const header = wrapper.find('h1');

    expect(header.text()).toBe('First Factory - React JS');
  });
});
