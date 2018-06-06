import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {

  render() {
    return (
      <div>
        <p>
          Welcome to uRate, the premier place for fantasy sports players to
          compare and keep track of rest of season rankings!
        </p>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    );
  }

}

export default Landing;
