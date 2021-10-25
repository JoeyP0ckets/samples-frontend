import React from "react"
import { useDispatch } from "react-redux"

const LogoutButton = () => {
  const dispatch = useDispatch();

  const HandleLogout = () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('docusign_access_token')
    dispatch({ type: "LOGOUT_USER"})
  }
  
  return(
     <a onClick={() => HandleLogout()} className="main-nav" activeClassName="main-nav-active">Logout</a>
    
  )
}



export default LogoutButton