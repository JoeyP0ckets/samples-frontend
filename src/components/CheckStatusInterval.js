import { useEffect } from "react"

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
    
        fetch(`http://localhost:3000/api/v1/docusign/check_envelope_status`, fetchObj)
        return null;
      }, 60000);
      return () => clearInterval(interval)
    }, []);

  return(
    null
  )
}

export default CheckStatusInterval