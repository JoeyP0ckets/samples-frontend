import React from "react"
import { NavLink } from "react-router-dom"
import Login from '../components/Login'
import { Row, Col } from "react-bootstrap"


const LoginSignup = () => {
  return (
    
      <Row>
         <Col style={{height: "100vh", backgroundColor: "darkblue", padding: "0px"}}>
          <h1 style={{fontFamily: "Pacifico", color: "palegoldenrod", textAlign: "center", paddingTop: "75px"}}>Your First Choice in FirstDose</h1>
          <div className="login-image">
          </div>
      </Col>
      <Col style={{height: "100vh", padding: "1px"}}>
      <h3 style={{paddingTop: "200px", textAlign: "center", fontFamily: "Cinzel", fontWeight: ""}}>Login</h3>
      <Login/>
      <h6 style={{textAlign: "center"}}>Need to setup an account? <NavLink to="/Signup">Signup</NavLink></h6>
      </Col>
     
      </Row>
  )
} 

export default LoginSignup