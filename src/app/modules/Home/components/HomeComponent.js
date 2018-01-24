import React from 'react';
import T from 'prop-types';
import CustomInput from '../../../components/CustomInput/CustomInput';

const defaultProps = {
  header: '',
};

const propTypes = {
  header: T.string,
  onChange: T.func.isRequired,
};


class HomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <CustomInput
          value={this.props.header}
          onChange={this.props.onChange}
        />
        <h1>{this.props.header}</h1>
      </div>
    );
  }
}

HomeComponent.defaultProps = defaultProps;
HomeComponent.propTypes = propTypes;

export default HomeComponent;
