import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions'

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
