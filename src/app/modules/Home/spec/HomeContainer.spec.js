import React from 'react';
import { shallow } from 'enzyme';
import { HomeWrapper } from '../HomeContainer';

describe('<HomeContainer />', () => {
  let wrapper;
  let defaultProps;
  let setHeaderSpy;
  let onLogoutSpy;

  beforeEach(() => {
    setHeaderSpy = jest.fn().mockName('setHeader');
    onLogoutSpy = jest.fn().mockName('onLogout');
    defaultProps = {
      actions: {
        setHeader: setHeaderSpy,
        logOut: onLogoutSpy,
      },
      header: 'Some header',
    };
    wrapper = shallow(<HomeWrapper {...defaultProps} />);
  });

  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

