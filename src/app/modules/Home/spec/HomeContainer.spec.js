import React from 'react';
import { shallow } from 'enzyme';
import { HomeWrapper } from '../HomeContainer';

describe('<HomeContainer />', () => {
  let wrapper;
  let defaultProps;
  let setHeaderSpy;

  beforeEach(() => {
    setHeaderSpy = jest.fn().mockName('setHeader');
    defaultProps = {
      actions: {
        setHeader: setHeaderSpy,
      },
      header: 'Some header',
    };
    wrapper = shallow(<HomeWrapper {...defaultProps} />);
  });

  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

