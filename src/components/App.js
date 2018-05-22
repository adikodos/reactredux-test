import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import { Route } from 'react-router-dom';
import Home from '../components/Home';

class App extends React.Component {

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
          <Route exact path="/" component={Home} />
          <Footer />
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
        <Footer />
      </div>
    );
  }
}

export default App;
