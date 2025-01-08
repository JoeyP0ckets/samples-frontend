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
        {isClicked === false ? <Login/> : <Signup setClicked={setClicked}/>}
        {isClicked === false ? 
        <div style={{paddingTop: "5px"}}>
          Need to set up an account? <h6 style={{textAlign: "center", color: "blue", cursor: "pointer"}} onClick={() => setClicked(!isClicked)}>Signup</h6> 
        </div>
          : 
        <div>
          Already have an account? <h6 style={{textAlign: "center", color: "blue", cursor: "pointer"}} onClick={() => setClicked(!isClicked)}>Login</h6> 
        </div>
        }
        <a href="https://app.forestadmin.com/login" id="link">π</a>
        </Col>
    </Row>
  )
} 

export default LoginSignup