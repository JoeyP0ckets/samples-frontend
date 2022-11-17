import React from 'react'
import {
  Routes,
  Route,
  NavLink, 
} from "react-router-dom";
import FirstDoses from './FirstDoses';
import Home from './Home'
import YourDoses from './YourDoses'
import LogoutButton from './Logout';





const Navbar = () => {
  return (
    <div>
          <div className="navbar-container">
            <div className="navbar-logo"></div>
            <div className="navbar-bg"></div>
              <div className="nav-links">
                <NavLink exact to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink>
                <NavLink exact to="/FirstDoses" className="main-nav" activeClassName="main-nav-active">FirstDoses</NavLink>
                <NavLink exact to="/YourDoses" className="main-nav" activeClassName="main-nav-active">YourDoses</NavLink>
                <LogoutButton/>
              </div>
          </div>


          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FirstDoses" element={<FirstDoses />} />
          <Route path="/YourDoses" element={<YourDoses />} />
          </Routes> 
    </div>
  )
}

export default (Navbar)