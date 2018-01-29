import React from 'react';
import T from 'prop-types';

const defaultProps = {
  className: '',
  placeHolder: '',
  disabled: false,
};

const propTypes = {
  className: T.string,
  placeHolder: T.string,
  disabled: T.bool,
  onChange: T.func.isRequired,
  value: T.string.isRequired,
  name: T.string.isRequired,
};

const CustomInput = props => (
  <input
    type="text"
    name={props.name}
    className={props.className}
    placeholder={props.placeHolder}
    disabled={props.disabled}
    onChange={e => props.onChange(props.name, e.target.value)}
    value={props.value}
  />
);

CustomInput.defaultProps = defaultProps;
CustomInput.propTypes = propTypes;

export default CustomInput;
