import React from 'react';
import { connect } from 'react-redux';
import { TYPE_BLOG, TYPE_EVENTS, TYPE_NEW } from '../constants/actionTypes';

const EventTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('events');
  };
  return (
    <div className="col-md-4 text-md-center">
      <h3 className="text-uppercase"><a
        href=""
        className={ props.tab === 'events' ? 'nav-link active' : 'nav-link' }
        onClick={clickHandler}>
        Upcoming Events
      </a></h3>
    </div>
  );
};

const NewTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('new');
  };
  return (
    <div className="col-md-4 text-md-center">
      <h3 className="text-uppercase"><a
        href=""
        className={ props.tab === 'new' ? 'nav-link active' : 'nav-link' }
        onClick={clickHandler}>
        What's New
      </a></h3>
    </div>
  );
};

const BlogTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('blog');
  };
  return (
    <div className="col-md-4 text-md-center">
      <h3 className="text-uppercase"><a
        href=""
        className={ props.tab === 'blog' ? 'nav-link active' : 'nav-link' }
        onClick={clickHandler}>
        Blog
      </a></h3>
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

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-sticky-top">
        <div className="container">
          <div className="nav navbar-nav row">
            <EventTab tab={'events'} onTabClick={this.props.onTabEvents} />
            <NewTab tab={'new'} onTabClick={this.props.onTabNew} />
            <BlogTab tab={'blog'} onTabClick={this.props.onTabBlog} />
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
