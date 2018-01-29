import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../SubmitButton';

describe('<SubmitButton />', () => {
  let wrapper;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      label: 'Submit',
      submitting: false,
    };
    wrapper = shallow(<SubmitButton {...defaultProps} />);
  });

  test('should render component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should display label', () => {
    expect(wrapper.text()).toBe(defaultProps.label);
  });

  test('should display "Loading" indicator', () => {
    defaultProps.submitting = true;
    wrapper = shallow(<SubmitButton {...defaultProps} />);
    expect(wrapper.text()).toBe(`${defaultProps.label} - Loading`);
  });
});
