import React from 'react';
import { shallow } from 'enzyme';
import CustomInput from '../CustomInput';

describe('<CustomInput />', () => {
  let wrapper;
  let defaultProps;
  const foo = 'foo';

  beforeEach(() => {
    defaultProps = {
      name: 'name',
      value: 'value',
      className: '',
      placeHolder: '',
      disabled: false,
      onChange: jest.fn().mockName('onChange'),
    };
  });

  describe('default props provided', () => {
    beforeEach(() => {
      wrapper = shallow(<CustomInput {...defaultProps} />);
    });

    describe('<input />', () => {
      test('should render component', () => {
        expect(wrapper.exists()).toBe(true);
      });

      test('should have correct props passed', () => {
        expect(wrapper.prop('name')).toBe(defaultProps.name);
        expect(wrapper.prop('value')).toBe(defaultProps.value);
        expect(wrapper.prop('disabled')).toBe(defaultProps.disabled);
        expect(wrapper.prop('className')).toBe(defaultProps.className);
        expect(wrapper.prop('placeholder')).toBe(defaultProps.placeHolder);
        expect(wrapper.prop('onChange')).toEqual(expect.any(Function));
      });

      test('should call onChange prop on changes', () => {
        wrapper.simulate('change', { target: { value: foo } });
        expect(defaultProps.onChange).toBeCalledWith(defaultProps.name, foo);
      });
    });
  });

  describe('no default props provided', () => {
    beforeEach(() => {
      defaultProps.className = undefined;
      defaultProps.placeHolder = undefined;
      defaultProps.disabled = undefined;
      wrapper = shallow(<CustomInput {...defaultProps} />);
    });

    describe('<input />', () => {
      test('should have correct props passed', () => {
        expect(wrapper.prop('disabled')).toBe(false);
        expect(wrapper.prop('className')).toBe('');
        expect(wrapper.prop('placeholder')).toBe('');
      });
    });
  });
});
