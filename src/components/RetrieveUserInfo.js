import React from "react"
import { useHistory } from 'react-router-dom'
import { API_ROOT } from "../apiRoot";


const RetrieveUserInfo = () => {
  const history = useHistory();
  const access_token = localStorage.getItem('docusign_access_token')

  const fetchUser = React.useCallback(() => {
    const token = localStorage.getItem('auth_token')

    if(!token) {
      return
    }

    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token': token
      },
      body: JSON.stringify({access_token: access_token })
    }

    fetch(`${API_ROOT}/docusign/retrieve_user_info`, fetchObj)
    .then(resp => resp.json())
    .then(resp => console.log(resp))
  }, [])

   React.useEffect(fetchUser, [])
  
      history.push("/");
      return null;
    }


export default RetrieveUserInfo