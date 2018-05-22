import ArticleList from '../ArticleList';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ...state.home,
});

const MainView = props => {
  return (
    <div className="col-md-8">
      <ArticleList articles={props.items} />
    </div>
  );
};

export default connect(mapStateToProps)(MainView);
