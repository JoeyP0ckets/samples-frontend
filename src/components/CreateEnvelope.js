import { useHistory } from 'react-router-dom'
import { API_ROOT } from '../apiRoot';

const CreateEnvelope = () => {

  const history = useHistory();
  fetch(`${API_ROOT}/docusign/create_envelope`)
  
      history.push("/");
      return null;
    }

export default CreateEnvelope