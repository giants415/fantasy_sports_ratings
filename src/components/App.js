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
        <div>
          <p>
            Welcome to uRate, the premier place for fantasy sports players to
            compare and keep track of rest of season rankings!
          </p>
          <button>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default App;
