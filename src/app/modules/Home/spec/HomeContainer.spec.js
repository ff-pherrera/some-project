import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from '../HomeContainer';

describe('<HomeContainer />', () => {
  let wrapper;
  let defaultProps;
  const headerProp = 'testPropValue';
  let onChangePropSpy;

  beforeEach(() => {
    onChangePropSpy = jest.fn().mockName('onChange');
    defaultProps = {
      actions: {},
      onChange: onChangePropSpy,
    };
    wrapper = shallow(<HomeContainer {...defaultProps} />);
  });

  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

// describe('<HomeContainer />', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<HomeComponent />);
//   });

//   test('should render component', () => {
//     expect(wrapper.exists()).toBe(true);
//   });
// });
