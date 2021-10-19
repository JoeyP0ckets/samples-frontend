import { useHistory } from 'react-router-dom'

const CreateEnvelope = () => {

  const history = useHistory();
  fetch("http://localhost:3000/api/v1/docusign/create_envelope")
  
      history.push("/");
      return null;
    }

export default CreateEnvelope