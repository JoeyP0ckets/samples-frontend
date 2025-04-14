import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './Logout';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo"></div>
      <div className="navbar-bg"></div>
      <div className="nav-links">
        <NavLink to="/" className="main-nav">
          Home
        </NavLink>
        <NavLink to="/first-doses" className="main-nav">
          First Doses
        </NavLink>
        <NavLink to="/your-doses" className="main-nav">
          Your Doses
        </NavLink>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Navbar;
