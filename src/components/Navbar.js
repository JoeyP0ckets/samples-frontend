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
    // console.log("I don't have a docusign token")
    window.location.href = 'https://account-d.docusign.com/oauth/auth?response_type=token&client_id=95849d5d-a7e9-4572-bb38-d1efdd1d1a38&redirect_uri=https://first-dose-fill.herokuapp.com/retrieve_auth_code/&scope=signature'
  }
  return (
    <div>
      <Router>
          <div className="navbar-container">
            <h1 className="navbar-logo">First Dose Fulfillment</h1>
              <div className="nav-links">
                {props.user && <NavLink exact to="/" className="main-nav" activeClassName="main-nav-active">Home</NavLink>}
                {props.user && <NavLink exact to="/Samples" className="main-nav" activeClassName="main-nav-active">FirstDoses</NavLink>}
                {props.user && <NavLink exact to="/Profile" className="main-nav" activeClassName="main-nav-active">Profile</NavLink>}
                {props.user && <LogoutButton/>}
              </div>
          </div>


          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/Samples">
              {props.user && <Samples/>}
            </Route>
            <Route exact path="/Profile">
              {props.user && <Profile/>}
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