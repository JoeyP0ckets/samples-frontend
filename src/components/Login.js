import React, { useContext, useState } from "react"
import { AuthContext }from '../context/AuthProvider'
import {Link} from 'react-router-dom'
import { Form } from "react-bootstrap"
import LoadingSpinner from "./LoadingSpinner"


const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [loggingIn, setLoggingIn] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoggingIn(true);

    const form = e.currentTarget;
    const email = form.email.value.trim().toLowerCase(); // ✅ normalize
    const password = form.password.value;

    Promise.resolve(loginUser(email, password))
      .finally(() => {
        setLoggingIn(false);
        form.reset();
      });
  };

  if (loggingIn) {
    return <LoadingSpinner message="Logging you in..." />;
  }

  return (
    <div className="reset-container">
      <h2 className="reset-title" style={{ fontFamily: "Cinzel" }}>Login</h2>

      <Form onSubmit={handleLoginSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"                    // ✅ built-in browser validation
            placeholder="Email"
            name="email"
            className="reset-input"
            autoComplete="username"         // ✅ helps browser managers
            onBlur={(e) => (e.target.value = e.target.value.trim())} // ✅ trim stray spaces
            onKeyDown={(e) => { if (e.key === " ") e.preventDefault(); }} // ✅ block spaces
            inputMode="email"
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            className="reset-input"
            autoComplete="current-password"
          />
        </Form.Group>

        <div style={{ paddingTop: "10px", fontSize: "0.9rem" }}>
          Forgot your password?{" "}
          <Link to="/password-reset-request" style={{ color: "#0D168C", textDecoration: "underline" }}>
            Send Update Email
          </Link>
        </div>

        <br />

        <button type="submit" className="reset-button" disabled={loggingIn}>
          {loggingIn ? "Logging in..." : "Login"}
        </button>
      </Form>
    </div>
  );
};

export default Login

