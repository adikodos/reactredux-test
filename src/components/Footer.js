import React from 'react';
import { connect } from 'react-redux';
import { TYPE_BLOG, TYPE_EVENTS, TYPE_NEW } from '../constants/actionTypes';

const EventTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('events');
  };
  return (
    <div className="col-md-4">
        <button
            className="btn btn-primary btn-block"
            onClick={clickHandler}>
            More Events
        </button>
    </div>
  );
};

const NewTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('new');
  };
  return (
    <div className="col-md-4">
        <button
            className="btn btn-primary btn-block"
            onClick={clickHandler}>
            Find More
        </button>
    </div>
  );
};

const BlogTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('blog');
  };
  return (
    <div className="col-md-4">
        <button
            className="btn btn-primary btn-block"
            onClick={clickHandler}>
            More Blog Post
        </button>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.home
});

const mapDispatchToProps = dispatch => ({
  onTabEvents: (type) => 
  dispatch({ type: TYPE_EVENTS, itemsType: type }),
  onTabNew: (type) => 
  dispatch({ type: TYPE_NEW, itemsType: type }),
  onTabBlog: (type) => 
  dispatch({ type: TYPE_BLOG, itemsType: type })
});

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-sticky-bottom">
        <div className="container">
          <div className="nav row">
            <EventTab tab={'events'} onTabClick={this.props.onTabEvents} />
            <NewTab tab={'new'} onTabClick={this.props.onTabNew} />
            <BlogTab tab={'blog'} onTabClick={this.props.onTabBlog} />
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
