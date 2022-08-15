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
     <button style={{outline: "none", background: "transparent", border: "1px solid transparent"}} onClick={() => HandleLogout()} className="main-nav">Logout</button>
  )
}



export default LogoutButton