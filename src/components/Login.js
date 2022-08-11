import React, { useContext } from "react"
import { AuthContext }from '../context/AuthProvider'
import { Form, Button } from "react-bootstrap"


const Login = () => {
  
  // const [loginErrorMessage, setLoginErrorMessage] = useState(undefined)

  const { loginUser } = useContext(AuthContext);

  const handleLoginSubmit = e => {
    e.preventDefault()
    loginUser(e.target.name.value, e.target.password.value);
    // errorMessage ? setLoginErrorMessage(loginErrorMessage) : setLoginErrorMessage('');
    e.target.reset();
  }
  
    return(
      <div className="login-form">
      <Form onSubmit={e => handleLoginSubmit(e)} className="form-width">
        <Form.Group>
          <Form.Control type="text" placeholder="Name" name="name"/>  
          <Form.Control type="password" placeholder="Password" name="password"/>
          <br></br>
          <Button type="submit">Login</Button>
        </Form.Group>
      </Form>
      </div>
  )
}

export default Login

