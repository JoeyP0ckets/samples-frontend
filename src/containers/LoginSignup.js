import { React } from "react"
import { NavLink, Switch, Route} from "react-router-dom"
import Login from '../components/Login'
import { Row, Col } from "react-bootstrap"
import Signup from "../components/Signup"


const LoginSignup = () => {
  
  
  return (
    <Row id="login-row">
      <Col id="login-left-col" style={{height: "100vh"}}>
          <h1 id="login-page-header" className="header-fade-in" style={{fontFamily: "Cinzel", textAlign: "center"}}>First Dose Fulfillment™</h1>
          <div className="login-image fade-in-image">
            
          </div>
      </Col>
      <Col id="login-right-col" style={{height: "100vh"}}>
        <Switch>
          <Route exact path="/Signup">
            <Signup/>
          </Route>
        </Switch>
        <h3 style={{paddingTop: "200px", textAlign: "center", fontFamily: "Cinzel", fontWeight: ""}}>Login</h3>
        <Login/>
          <h6 style={{textAlign: "center"}}>Need to setup an account? <NavLink to="/Signup" exact>Signup</NavLink></h6>
        </Col>
    </Row>
  )
} 

export default LoginSignup