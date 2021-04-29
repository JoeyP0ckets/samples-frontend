import { useLocation, useHistory } from 'react-router-dom';
import queryString from "query-string"

const RetrieveAuthCode = () => {
  const history = useHistory();
  const { hash } = useLocation();
  const { access_token } = queryString.parse(hash);
  console.log(hash)

  localStorage.setItem('docusign_auth_code', access_token);
  history.push('/');
  return null;
};

export default RetrieveAuthCode;