import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const HandleLogout = () => {
    localStorage.removeItem('auth_token')
    dispatch({ type: "LOGOUT_USER"})
    history.push("/")
  }
  
  return(
     <a onClick={() => HandleLogout()} className="main-nav">Logout</a>
  )
}



export default LogoutButton