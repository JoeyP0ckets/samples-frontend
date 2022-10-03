import { React, useState } from "react"
import Login from '../components/Login'
import { Row, Col } from "react-bootstrap"
import Signup from "../components/Signup"


const LoginSignup = () => {
  const [isClicked, setClicked] = useState(false);
  
  return (
    <Row id="login-row">
      <Col id="login-left-col" style={{height: "100vh"}}>
          <h1 id="login-page-header" className="header-fade-in" style={{fontFamily: "Cinzel", textAlign: "center"}}>First Dose Fulfillment™</h1>
          <div className="login-image fade-in-image">
            
          </div>
      </Col>
      <Col id="login-right-col" style={{height: "100vh"}}>
        {isClicked === false ? <Login/> : <Signup/>}
        {isClicked === false ? 
          <h6 style={{textAlign: "center"}} onClick={() => setClicked(!isClicked)}> Need to setup an account? Signup</h6> 
          : 
          <h6 style={{textAlign: "center"}} onClick={() => setClicked(!isClicked)}> Already have an account? Login</h6> 
        }
        <a href="https://app.forestadmin.com/login" id="link">π</a>
        </Col>
    </Row>
  )
} 

export default LoginSignup