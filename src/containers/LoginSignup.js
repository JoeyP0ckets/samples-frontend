import React from "react"
import Login from '../components/Login'
import Signup from '../components/Signup'

const LoginSignup = () => {
  return (
    <div>
      Already Created an Account?
      <Login/>
      Signup For An Account
      <Signup/>
    </div>
  )
}

export default LoginSignup