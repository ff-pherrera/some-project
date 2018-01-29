import React from 'react';
import T from 'prop-types';
import CustomInput from '../../components/CustomInput/CustomInput';
import Button from '../../components/Button/Button';

const defaultProps = {
  header: '',
};

const propTypes = {
  header: T.string,
  onChange: T.func.isRequired,
  onLogout: T.func.isRequired,
};

const HomeComponent = props => (
  <React.Fragment>
    <CustomInput
      name=""
      value={props.header}
      onChange={props.onChange}
    />
    <h1>{props.header}</h1>
    <Button
      label="Logout"
      onClick={props.onLogout}
    />
  </React.Fragment>
);

HomeComponent.defaultProps = defaultProps;
HomeComponent.propTypes = propTypes;

export default HomeComponent;
