import React, {useContext} from "react"
import { AuthContext } from '../context/AuthProvider'
import { useHistory } from 'react-router-dom'

const LogoutButton = () => {
  
  const { logoutUser } = useContext(AuthContext);
  const history = useHistory();
  
  const HandleLogout = () => {
    logoutUser();
    history.push("/")
  }
  
  return(
     <a onClick={() => HandleLogout()} className="main-nav">Logout</a>
  )
}



export default LogoutButton