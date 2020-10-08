import React, { useState } from 'react';
import './_home.scss';
import { Switch, Link } from 'react-router-dom';
import { Transition, CSSTransition } from 'react-transition-group';

const Home = () => {
  const [inProp, setInProp] = useState(true);
  // const [loading, setLoading] = useState(true);
  return (
    <div className="home-container">
      <Link to="/register">
        <CSSTransition
          in={inProp}
          timeout={{ appear: 0, enter: 0, exit: 300 }}
          classNames="slide-left"
          appear
          unmountOnExit
          onClick={() => setInProp(false)}
          // onEnter={() => setInProp(true)}
        >
          <button onClick={() => setInProp(!useState)}>
            Are you new here?
          </button>
        </CSSTransition>
      </Link>

      <Link to="/login">
        <CSSTransition
          unmountOnExit
          in={inProp}
          timeout={{ appear: 0, enter: 0, exit: 300 }}
          classNames="slide-right"
          appear
          //onEnter={() => setInProp(false)}
          // onEnter={() => setInProp(true)}
        >
          <button onClick={() => setInProp(false)}>Already a member?</button>
        </CSSTransition>
      </Link>
    </div>
  );
};

export default Home;
