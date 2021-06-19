import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (<ProfileButton user={sessionUser} />);
  } else {
    sessionLinks = (
      <div className="navbar__userbtns">
        <NavLink to="/login" id="navbar__login">Log In</NavLink>
        <NavLink to="/signup" id="navbar__signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className="mainContainer__navbar">
          <div className="navbar__homepage">
            <NavLink exact to="/">Home</NavLink>
          </div>
          <div className="navbar__search">
            <input type="text" />
          </div>
          <div className="navbar__userIcon">
            {isLoaded && sessionLinks}
          </div>
    </div>
  );
}

export default Navigation;
