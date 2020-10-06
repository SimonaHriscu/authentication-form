import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const submitHandle = async (e) => {
    e.preventDefault();
    const data = {
      userName: userName,
      password: password,
    };

    const response = axios
      .post('/login', data)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container">
      <h2>Welcome back!</h2>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        {/* <input type="file" name="avatar" id="avatar" /> */}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
