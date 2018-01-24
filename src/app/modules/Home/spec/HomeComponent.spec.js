import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from '../HomeComponent';

describe('< HomeComponent />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeComponent header="test" onChange={jest.fn()}/>);
  });
  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('Should render header text', () => {
    const header = wrapper.find('h1');

    expect(header.text()).toBe('test');
  });

  // test('Should render header text', () => {
  //   wrapper.onChange('test1');
    
  //   expect(header.text()).toBe('test1');
  // });
});

// test('CheckboxWithLabel changes the text after click', () => {
//   // Render a checkbox with label in the document
//   const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

//   expect(checkbox.text()).toEqual('Off');

//   checkbox.find('input').simulate('change');

//   expect(checkbox.text()).toEqual('On');
// });
