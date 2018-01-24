import React from 'react';
import T from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import * as homeActions from './HomeActions';

const defaultProps = {
  header: '',
};

const propTypes = {
  header: T.string,
  actions: T.objectOf(T.any),
};

const mapStateToProps = state => ({
  header: state.home.header,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(homeActions, dispatch),
});

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onHeaderChange = this.onHeaderChange.bind(this);
  }

  componentDidMount = () => {}

  onHeaderChange = (header) => {
    this.props.actions.setHeader(header);
  }

  render = () => (
    <HomeComponent
      header={this.props.header}
      onChange={this.onHeaderChange}
    />
  );
}

HomeContainer.defaultProps = defaultProps;
HomeContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
