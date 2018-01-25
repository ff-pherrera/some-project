import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from '../HomeComponent';

describe('<HomeComponent />', () => {
  let wrapper;
  let headerProp = "testPropValue";
  let onChangeProp = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<HomeComponent header={headerProp} onChange={onChangeProp}/>);
  });

  test('Should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('Should render header text', () => {
    const header = wrapper.find('h1');

    expect(header.text()).toBe(headerProp);
  });

  test('CustomInput child with correct header prop', () => {
    let customInput = wrapper.find('CustomInput');

    expect(customInput.prop('value')).toBe(headerProp);
  });

  test('CustomInput child with correct onChange prop', () => {
    let customInput = wrapper.find('CustomInput');

    expect(customInput.prop('onChange')).toBeDefined();
  });
});
