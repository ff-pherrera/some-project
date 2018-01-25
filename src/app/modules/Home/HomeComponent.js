import React from 'react';
import T from 'prop-types';
import CustomInput from '../../components/CustomInput/CustomInput';

const defaultProps = {
  header: '',
};

const propTypes = {
  header: T.string,
  onChange: T.func.isRequired,
};

function HomeComponent() {
  return (
    React.Fragment(
      <CustomInput
        value={this.props.header}
        onChange={this.props.onChange}
      />,
      <h1>{this.props.header}</h1>
    )
  );
};

HomeComponent.defaultProps = defaultProps;
HomeComponent.propTypes = propTypes;

export default HomeComponent;
