import React from 'react';
import T from 'prop-types';

const defaultProps = {
  label: 'Button',
};

const propTypes = {
  label: T.string,
  onClick: T.func.isRequired,
};

const Button = props => (
  <button
    onClick={props.onClick}
    type="button"
  >
    {props.label}
  </button>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
