import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './_auth.scss';

const Auth = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const submitHandle = async (e) => {
    e.preventDefault();
    const data = { userName: userName, password: password };

    const response = axios
      .post('/login', data)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container">
      <h2>New User</h2>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          // // onChange={handleChange}
          value={userName}
          // // value={newUser.userName}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          // //value={newUser.password}
        />

        <input
          type="password"
          name="confPassword"
          id="confPassword"
          placeholder="Confirm password"
          onChange={(e) => setConfPassword(e.target.value)}
          // onChange={handleChange}
          value={confPassword}
          // //value={newUser.confPassword}
        />
        {/* <input type="file" name="avatar" id="avatar" /> */}
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Auth;
