import React from "react"

const CheckStatusButton = () => {

  const CheckStatusClick = () => {
    const access_token = localStorage.getItem('docusign_access_token')
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

    fetch(`http://localhost:3000/api/v1/docusign/check_envelope_status`, fetchObj)
    // .then(resp => resp.json())
    // .then(resp => console.log(resp))
  
  }

  return(
    <button onClick={() => CheckStatusClick()}>Click Me For Envelope Status Testing</button>
  )
}

export default CheckStatusButton