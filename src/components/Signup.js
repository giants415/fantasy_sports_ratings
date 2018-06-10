import React, { Component } from 'react';

class Signup extends Component {

  render() {
    return (
      <form>
        <div>
          <label for='username'>Username</label>
          <input type='text' id='username'/>
        </div>
        <div>
          <label for='password'>Password</label>
          <input type='text' id='password'/>
        </div>
        <button type='button'>Sign Up</button>
      </form>
    );
  }

}

export default Signup;
