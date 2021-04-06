import React from 'react'
import $ from 'jquery'

const RetrieveAuthToken = () => {
  const auth_code = localStorage.getItem('docusign_auth_code')
  
  $.ajax({
    url: "http://localhost:3000/api/v1/docusign/retrieve_docusign_token",
    type: "post",
    data: { auth_code: JSON.stringify(auth_code)}
  })
      return null;
    }

export default RetrieveAuthToken