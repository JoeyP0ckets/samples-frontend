

const DocusignAuth = () => {
  console.log("I've started the fetch")

  const token = localStorage.getItem('auth_token')

  if(!token) {
    return
  }

  const fetchObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Auth-Token': token
    }
    // body: JSON.stringify({access_token: access_token })
  }

  fetch(`http://localhost:3000/api/v1/docusign/get_docusign_token`, fetchObj)
  console.log("I've run the fetch")
  return null;

}

export default DocusignAuth;