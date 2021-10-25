import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink, 
} from "react-router-dom";
import { connect } from "react-redux"
import Samples from './Samples';
import Home from './Home'
import Profile from './Profile'
import Signup from './Signup'
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
              <div className="nav-links">
                {props.user ? <NavLink exact to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink> : null}&nbsp;&nbsp;&nbsp;
                {props.user ? <NavLink exact to="/Samples" className="main-nav" activeClassName="main-nav-active">Samples List</NavLink> : null}&nbsp;&nbsp;&nbsp;
                {props.user ? <NavLink exact to="/Profile" className="main-nav" activeClassName="main-nav-active">Profile</NavLink> : null}&nbsp;&nbsp;&nbsp;
                {props.user ? <LogoutButton/> : null}
              </div>
          </div>


          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/Samples">
              {props.user ? <Samples/> : null}
            </Route>
            <Route exact path="/Profile">
              {props.user ? <Profile/> : null }
            </Route>
            <Route exact path="/Signup">
              <Signup/>
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