import React from "react"
import { NavLink } from "react-router-dom"
import Login from '../components/Login'


const LoginSignup = () => {
  return (
    <div className="login-container">
      <h3>Login</h3>
      <Login/>
      Need to setup an account? <NavLink to="/Signup">Signup</NavLink>
   </div>
  )
} 

export default LoginSignup