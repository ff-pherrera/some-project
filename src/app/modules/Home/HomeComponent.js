import React from 'react';
import T from 'prop-types';

const defaultProps = {
  header: '',
};

const propTypes = {
  header: T.string,
};


class HomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
      </div>
    );
  }
}

HomeComponent.defaultProps = defaultProps;
HomeComponent.propTypes = propTypes;

export default HomeComponent;
