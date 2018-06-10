import React, { Component } from 'react';

class Login extends Component {

  render() {
    return (
      <form className='col-lg-4 offset-lg-4'>
        <div>
          <label>Username</label>
          <input type='text' id='username'/>
        </div>
        <div>
          <label>Password</label>
          <input type='text' id='password'/>
        </div>
        <button type='button'>Login</button>
      </form>
    );
  }

}

export default Login;
