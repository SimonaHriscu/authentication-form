import React, { Component } from 'react';
import './_auth.scss';

class Auth extends Component {
  render() {
    return (
      <div className="container">
        <h2>New User</h2>
        <form>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />

          <input
            type="password"
            name="confPassword"
            id="confPassword"
            placeholder="Confirm password"
          />
          {/* <input type="file" name="avatar" id="avatar" /> */}
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Auth;
