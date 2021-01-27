import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from "react-redux"
import Samples from './Samples';
import Home from './Home'
import Profile from './Profile'
import Login from './Login'



const Navbar = (props) => {
  
  return (
    <div>
      <Router>
          <div className="navbar-container">
          <h1 className="navbar-logo">First Dose</h1>
          {props.user ? null : <Link to="/Login">Login/Signup</Link>}&nbsp;&nbsp;&nbsp;
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Samples">Samples List</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Profile">Profile</Link> 
          </div>
          <Switch>
            <Route exact path="/">
              <Home/> 
            </Route>
            <Route exact path="/Samples">
              <Samples/>
            </Route>
            <Route exact path="/Profile">
              <Profile/>
            </Route>
          </Switch>
      </Router> 
    </div>
  )
}

const msp = state => {
  return {
    user: state.user
  }
}

export default connect(msp)(Navbar)