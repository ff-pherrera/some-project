import React from 'react';
import T from 'prop-types';

const defaultProps = {
  label: 'Submit',
  submitting: false,
};

const propTypes = {
  label: T.string,
  submitting: T.bool,
};

const SubmitButton = props => (
  <button type="submit">
    {props.label}
    {props.submitting ? ' - Loading' : ''}
  </button>
);

SubmitButton.defaultProps = defaultProps;
SubmitButton.propTypes = propTypes;

export default SubmitButton;
