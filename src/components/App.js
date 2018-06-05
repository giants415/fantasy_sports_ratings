import React, { Component } from 'react';

class App extends Component {
  renderHeader() {
    return (
      <ul>
        <li>Home</li>
        <h2>Fantasy Rankings</h2>
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
