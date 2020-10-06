import React from 'react';
import './scss/main.scss';
import Auth from './components/Auth/Auth';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Auth />
      <Login />
    </div>
  );
}

export default App;
