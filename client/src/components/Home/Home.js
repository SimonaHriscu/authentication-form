import React, { useState } from 'react';
import './_home.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { loggedOut } from '../../actions';

const Home = () => {
  const [inProp, setInProp] = useState(true);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="home-container">
      {isLogged ? (
        <React.Fragment>
          <div>Welcome back!</div>
          <button onClick={() => dispatch(loggedOut())}>LOG OUT</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
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
              <button onClick={() => setInProp(false)}>
                Already a member?
              </button>
            </CSSTransition>
          </Link>
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
