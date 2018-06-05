import React, { Component } from 'react';

import header from '../styles/header.css';

class App extends Component {
  renderHeader() {
    return (
      <ul ClassName="header">
        <li>Home</li>
        <li>Fantasy Rankings</li>
        <li>Log In</li>
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
