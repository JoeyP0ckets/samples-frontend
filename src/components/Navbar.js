import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Samples from './Samples';
import Home from './Home'

const Navbar = () => {
  return (
    <div>
      <Router>
          <div className="navbar-row">
          <h1 className="navbar-logo">First Dose</h1>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/Samples">Samples List</Link>&nbsp;&nbsp;&nbsp;
          </div>
          <Switch>
            <Route exact path="/">
               <Home/>
            </Route>
            <Route exact path="/Samples">
             <Samples/>
            </Route>
          </Switch>
      </Router> 
    </div>
  )
}

export default Navbar