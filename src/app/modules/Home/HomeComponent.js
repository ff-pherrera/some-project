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

const HomeComponent = props => (
  <React.Fragment>
    <CustomInput
      value={props.header}
      onChange={props.onChange}
    />
    <h1>{props.header}</h1>
  </React.Fragment>
);

HomeComponent.defaultProps = defaultProps;
HomeComponent.propTypes = propTypes;

export default HomeComponent;
