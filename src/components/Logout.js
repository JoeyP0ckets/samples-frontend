import React from "react"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"

const LogoutButton = (props) => {
  const dispatch = useDispatch();

  const HandleLogout = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth-token-set-time')
    localStorage.removeItem('docusign_access_token')
    dispatch({ type: "LOGOUT_USER"})
  }
  
  return(
    <div>
      <Button onClick={() => HandleLogout()}>Logout</Button>
    </div>
  )
}



export default LogoutButton