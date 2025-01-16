import React, { useContext } from "react"
import { AuthContext }from '../context/AuthProvider'
import {Link} from 'react-router-dom'
import { Form, Button } from "react-bootstrap"


const Login = () => {

  const { loginUser } = useContext(AuthContext);

  const handleLoginSubmit = e => {
    e.preventDefault()
    loginUser(e.target.email.value, e.target.password.value);
    e.target.reset();
  }
  
    return(
      <div className="login-form">
      <h3 style={{paddingTop: "200px", textAlign: "center", fontFamily: "Cinzel", fontWeight: ""}}>Login</h3>
      <Form onSubmit={e => handleLoginSubmit(e)} className="form-width">
        <Form.Group>
          <Form.Control type="text" placeholder="Email" name="email"/>  
          <Form.Control type="password" placeholder="Password" name="password"/>
          <h6 style={{paddingTop: "10px"}}>
            Forgot your password? {" "}
            <Link to="/password-reset-request" style={{ color: "blue", textDecoration: "underline"}}>
              Send Update Email
            </Link>
          </h6>
          <br></br>
          <Button type="submit">Login</Button>
        </Form.Group>
      </Form>
      </div>
  )
}

export default Login

