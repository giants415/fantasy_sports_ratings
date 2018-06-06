import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import header from '../styles/header.css';

class App extends Component {
  renderHeader() {
    return (
      <ul ClassName="header">
        <li>Home</li>
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

      </div>
    );
  }
}

export default App;
