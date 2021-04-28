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
import RetrieveAuthCode from './RetrieveAuthCode';
import RetrieveAuthToken from './RetrieveAuthToken';



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
            <Route path='/Docusign-Auth' component={() => { 
              window.location.href = 'https://account-d.docusign.com/oauth/auth?response_type=code&client_id=19ecc229-d517-4c8e-b831-da8643669392&redirect_uri=http://localhost:3001/retrieve_auth_code/&scope=signature'
              return null;
            }}/>
            <Route path='/retrieve_auth_code'>
              <RetrieveAuthCode />
            </Route>
            <Route path='/Get-Token'>
              <RetrieveAuthToken />
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