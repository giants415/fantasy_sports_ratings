import React, { Component } from 'react';

class Login extends Component {

  render() {
    return (
      <div>
        <div>
          <label for='username'>Username</label>
          <input type='text' id='username'/>
        </div>
        <div>
          <label for='password'>Password</label>
          <input type='text' id='password'/>
        </div>
      </div>
    );
  }

}

export default Login;
