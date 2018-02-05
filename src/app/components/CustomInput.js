import React from 'react';
import T from 'prop-types';

const defaultProps = {
  className: '',
  placeHolder: '',
  disabled: false,
};

const propTypes = {
  name: T.string.isRequired,
  value: T.string.isRequired,
  className: T.string,
  placeHolder: T.string,
  disabled: T.bool,
  onChange: T.func.isRequired,
};

const CustomInput = props => (
  <input
    type="text"
    name={props.name}
    value={props.value}
    className={props.className}
    placeholder={props.placeHolder}
    disabled={props.disabled}
    onChange={e => props.onChange(props.name, e.target.value)}
  />
);

CustomInput.defaultProps = defaultProps;
CustomInput.propTypes = propTypes;

export default CustomInput;
