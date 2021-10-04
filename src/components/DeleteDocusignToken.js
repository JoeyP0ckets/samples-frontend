import button from "react-bootstrap"

const DeleteDocusignToken = () => {

  const clickButton = () => {
    localStorage.removeItem('docusign_access_token')
  }

  return(
    <button onClick={() => clickButton()}>Delete Docusign Token</button>
  )
}

export default DeleteDocusignToken