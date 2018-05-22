import MainView from './MainView';
import React from 'react';
import Tags from './Tags';
import { connect } from 'react-redux';
import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED } from '../../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.home,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {

  componentDidMount() {
    const events = this.state;
    if (events && events.length > 0) {
      // update the state to the correct league here and this.props.id is the id that you want
      const ev = events.find( event => event.id === this.props.id);
      this.setState({ ev });
    }
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">

        <div className="container page">
          <div className="row">
          
            <Tags tags={this.props.events}/>
            <MainView />

          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
