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

export const HomeWrapper = props => (
  <HomeComponent
    header={props.header}
    onChange={(name, value) => props.actions.setHeader(value)}
    onLogout={props.actions.logout}
  />
);

HomeWrapper.defaultProps = defaultProps;
HomeWrapper.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(HomeWrapper);
