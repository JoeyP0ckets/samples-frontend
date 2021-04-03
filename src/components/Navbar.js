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
import LoginSignup from '../containers/LoginSignup';
import Logout from '../components/LogoutButton';
import RetrieveAuthCode from './RetrieveAuthCode';



const Navbar = (props) => {
  
  return (
    <div>
      <Router>
          <div className="navbar-container">
          <h1 className="navbar-logo">First Dose Fulfillment</h1>
          {props.user ? null : <Link to="/Login">Login/Signup</Link>}&nbsp;&nbsp;&nbsp;
          {props.user ? <Link to="/">Home</Link> : null}&nbsp;&nbsp;&nbsp;
          {props.user ? <Link to="/Samples">Samples List</Link> : null}&nbsp;&nbsp;&nbsp;
          {props.user ? <Link to="/Profile">Profile</Link> : null}&nbsp;&nbsp;&nbsp;
          {props.user ? <Logout/> : null}
          </div>
          <Switch>
            <Route exact path="/">
              {props.user ? <Home/> : <LoginSignup/>}
            </Route>
            <Route exact path="/Samples">
              {props.user ? <Samples/> : <LoginSignup/>}
            </Route>
            <Route exact path="/Profile">
              {props.user ? <Profile/> : <LoginSignup/>}
            </Route>
            {/* <Route path='/Docusign-Auth' component={() => { 
              window.location.href = 
              return null; */}
            {/* }}/> */}
            <Route path='/retrieve_auth_code'>
              <RetrieveAuthCode />
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