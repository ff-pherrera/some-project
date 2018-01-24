import React from 'react';
import T from 'prop-types';

const defaultProps = {
  value: '',
};

const propTypes = {
  onChange: T.func.isRequired,
  value: T.string,
};

const CustomInput = props => (
  <input
    type="text"
    onChange={e => props.onChange(e.target.value)}
    value={props.value}
  />
);

CustomInput.defaultProps = defaultProps;
CustomInput.propTypes = propTypes;

export default CustomInput;
