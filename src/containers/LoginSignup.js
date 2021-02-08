import React from "react"
import Login from '../components/Login'
import Signup from '../components/Signup'
import { Row, Col } from 'react-bootstrap'

const LoginSignup = () => {
  return (
    <div className="login-container">
      <Row>
        <Col xs={6} md={6}>
        <h3 className="review-text">Login</h3>
        <Login/>
        </Col>
        <Col xs={6} md={6}>
        <h3 className="review-text" style={{ color: "black"}}>Signup</h3>
        <Signup/>
        </Col>
      </Row>

    </div>
  )
}

export default LoginSignup