import { useEffect } from "react"
import { API_ROOT } from "../apiRoot"

const CheckStatusInterval = () => {
  
  const access_token = localStorage.getItem('docusign_access_token')
  const token = localStorage.getItem('auth_token')

  useEffect(() => {
    
    const interval = setInterval(() => {
      
      const fetchObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Auth-Token': token
        },
        body: JSON.stringify({access_token: access_token })
      }
    
        fetch(`${API_ROOT}/docusign/check_envelope_status`, fetchObj)
        return null;
      }, 60000);
      return () => clearInterval(interval)
    }, []);

  return(
    null
  )
}

export default CheckStatusInterval