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
  });

  describe('default props provided', () => {
    beforeEach(() => {
      wrapper = shallow(<SubmitButton {...defaultProps} />);
    });

    describe('<button />', () => {
      test('should render with label as children', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.children()).toHaveLength(1);
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
  });

  describe('no default props provided', () => {
    beforeEach(() => {
      defaultProps.label = undefined;
      defaultProps.submitting = undefined;
      wrapper = shallow(<SubmitButton {...defaultProps} />);
    });

    describe('<button />', () => {
      test('should have correct props passed', () => {
        expect(wrapper.prop('submitting')).toBe(false);
        expect(wrapper.text()).toBe('Submit');
      });
    });
  });
});
