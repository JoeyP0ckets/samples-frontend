import React from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"

const LogoutButton = (props) => {

  const HandleLogout = () => {
    props.logoutUser();
    localStorage.removeItem('auth_token')
  }
  
  return(
    <div>
      <Button onClick={() => HandleLogout()}>Logout</Button>
    </div>
  )
}

const mdp = dispatch => {
  return {
    logoutUser: () => dispatch({type:"LOGOUT_USER"})
  }
}

export default connect(null,mdp)(LogoutButton)