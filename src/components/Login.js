import React, { useContext, useState } from "react"
import { AuthContext }from '../context/AuthProvider'
import { Form, Button } from "react-bootstrap"


const Login = () => {
  
  const [loginErrorMessage, setLoginErrorMessage] = useState(undefined)
  const { loginUser, logoutUser} = useContext(AuthContext);

  const handleLoginSubmit = e => {
    e.preventDefault()
    const errorMessage = loginUser(e.target.name.value, e.target.password.value);
    errorMessage ? setLoginErrorMessage(errorMessage) : setLoginErrorMessage('');
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

