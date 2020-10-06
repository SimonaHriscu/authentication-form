import React, { useState } from 'react';
import axios from 'axios';
import './_auth.scss';

const Auth = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const submitHandle = async (e) => {
    e.preventDefault();
    const data = {
      userName: userName,
      email: email,
      password: password,
      confPassword: confPassword,
    };

    const response = axios
      .post('/register', data)
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
          value={userName}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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

        <input
          type="password"
          name="confPassword"
          id="confPassword"
          placeholder="Confirm password"
          onChange={(e) => setConfPassword(e.target.value)}
          value={confPassword}
          required
        />
        {/* <input type="file" name="avatar" id="avatar" /> */}
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Auth;
