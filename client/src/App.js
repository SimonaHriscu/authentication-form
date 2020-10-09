import React, { useState, useEffect } from 'react';
import './scss/main.scss';
import Auth from './components/Auth/Auth';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/register" component={Auth}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    </Router>
  );
};

export default App;
