import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.home,
});

const MainView = props => {
  return ;
};

export default connect(mapStateToProps)(MainView);
