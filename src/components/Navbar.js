import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";
import { connect } from "react-redux"
import Samples from './Samples';
import Home from './Home'
import Profile from './Profile'
import RetrieveAuthCode from './RetrieveAuthCode';
import RetrieveUserInfo from './RetrieveUserInfo';
import CreateEnvelope from './CreateEnvelope';
import LogoutButton from './Logout';




const Navbar = (props) => {
  
  let access_token = localStorage.getItem('docusign_access_token')

  if (props.user && !access_token) {
  }
  return (
    <div>
      <Router>
          <div className="navbar-container">
          <h1 className="navbar-logo">First Dose Fulfillment</h1>
          {props.user ? null : <Link to="/Login">Login/Signup</Link>}&nbsp;&nbsp;&nbsp;
          {props.user ? <Link to="/">Home</Link> : null}&nbsp;&nbsp;&nbsp;
          {props.user ? <Link to="/Samples">Samples List</Link> : null}&nbsp;&nbsp;&nbsp;
          {props.user ? <Link to="/Profile">Profile</Link> : null}&nbsp;&nbsp;&nbsp;
          {props.user ? <LogoutButton/> : null}
          </div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/Samples">
              {props.user ? <Samples/> : null }
            </Route>
            <Route exact path="/Profile">
              {props.user ? <Profile/> : null }
            </Route>
            <Route path='/retrieve_auth_code'>
              <RetrieveAuthCode />
            </Route>
            <Route path='/user-info'>
              <RetrieveUserInfo/>
            </Route>
            <Route path='/create_envelope'>
              <CreateEnvelope/>
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