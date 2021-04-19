import { useLocation, useHistory } from 'react-router-dom';
import queryString from "query-string"

const RetrieveAuthCode = () => {
  const history = useHistory();
  const { search } = useLocation();
  const { code } = queryString.parse(search);

  localStorage.setItem('docusign_auth_code', code);
  history.push('/Get-Token');
  return null;
};

export default RetrieveAuthCode;