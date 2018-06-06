import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Login from './Login';
import Landing from './Landing';
import Signup from './Signup';
import header from '../styles/header.css';

class App extends Component {
  renderHeader() {
    return (
      <ul ClassName="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Fantasy Rankings</li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    );
  }


  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Landing} />
      </div>
    );
  }
}

export default App;
