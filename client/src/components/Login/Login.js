import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../../actions';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState({
    user: {
      userName: 'user',
    },
  });
  const [logIn, setLogIn] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const submitHandle = async (e) => {
    e.preventDefault();
    const data = {
      userName: userName,
      password: password,
    };

    const response = axios
      .post('/account/login', data)
      .then(({ data }) => {
        console.log(data);
        setData(data);
        history.push('/');
        setLogIn(true);
        dispatch(loggedIn());
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container">
      <h2>Welcome back {data.user.userName}!</h2>
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
