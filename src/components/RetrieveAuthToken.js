import React from 'react'
import $ from 'jquery'
import { useHistory } from 'react-router-dom'

const RetrieveAuthToken = () => {

  const history = useHistory();
  const auth_code = localStorage.getItem('docusign_auth_code')
  
  $.ajax({
    url: "http://localhost:3000/api/v1/docusign/retrieve_docusign_token",
    type: "post",
    data: { auth_code: auth_code }
  })
      history.push("/Samples");
      return null;
    }

export default RetrieveAuthToken