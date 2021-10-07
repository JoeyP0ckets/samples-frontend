import React from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"

const LogoutButton = (props) => {

  const HandleLogout = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth-token-set-time')
    localStorage.removeItem('docusign_access_token')
    props.logoutUser();
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