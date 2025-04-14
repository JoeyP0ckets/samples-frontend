import React, { useContext, useState } from "react"
import { AuthContext }from '../context/AuthProvider'
import {Link} from 'react-router-dom'
import { Form } from "react-bootstrap"
import LoadingSpinner from "./LoadingSpinner"


const Login = () => {

  const { loginUser } = useContext(AuthContext);
  const [loggingIn, setLoggingIn] = useState(false);

  const handleLoginSubmit = e => {
    e.preventDefault();
    setLoggingIn(true);
    loginUser(e.target.email.value, e.target.password.value)
    .finally(() => {
      setLoggingIn(false);
      e.target.reset();  
    })
  }

  if (loggingIn) {
    return <LoadingSpinner message="Logging you in..." />;
  }
  
    return(
      <div className="reset-container">
      <h2 className="reset-title" style={{ fontFamily: "Cinzel" }}>Login</h2>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            className="reset-input"
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            className="reset-input"
          />
        </Form.Group>

        <div style={{ paddingTop: "10px", fontSize: "0.9rem" }}>
          Forgot your password?{" "}
          <Link to="/password-reset-request" style={{ color: "blue", textDecoration: "underline" }}>
            Send Update Email
          </Link>
        </div>

        <br />

        <button type="submit" className="reset-button">
          Login
        </button>
      </Form>
    </div>
  )
}

export default Login

