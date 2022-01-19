import { useLocation, useHistory } from 'react-router-dom';
import queryString from "query-string"

const RetrieveAuthCode = () => {
  const history = useHistory();
  const { hash } = useLocation();
  const { access_token } = queryString.parse(hash);

  localStorage.setItem('docusign_access_token', access_token);
  history.push('https://first-dose-fill.herokuapp.com/');
  return null;
};

export default RetrieveAuthCode;