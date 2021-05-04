import $ from 'jquery'
import { useHistory } from 'react-router-dom'

const RetrieveUserInfo = () => {

  const history = useHistory();
  const access_token = localStorage.getItem('docusign_access_token')
  
  $.ajax({
    url: "http://localhost:3000/api/v1/docusign/retrieve_user_info",
    type: "post",
    data: { access_token: access_token }
  })
      history.push("/create_envelope");
      return null;
    }

export default RetrieveUserInfo