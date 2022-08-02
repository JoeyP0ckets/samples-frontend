import { React, useEffect } from "react"
import { NavLink, Switch, Route } from "react-router-dom"
import Login from '../components/Login'
import { Row, Col } from "react-bootstrap"
import Signup from "../components/Signup"
import { API_ROOT } from '../apiRoot'
import { connect } from 'react-redux'

const LoginSignup = (props) => {

  useEffect(() => fetchUser(), []);

  const fetchUser = () => {
    const token = localStorage.getItem('auth_token')

    if(!token) {
      console.log("I don't have a login token")
      return
    }

    const fetchObj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token': token
      },
    }

    fetch(`${API_ROOT}/doctors/showdoctor`, fetchObj)
    .then(resp => resp.json())
    .then(user => {
      props.loginUser(user)
    })
  }
  return (
    <Row>
      <Col style={{height: "100vh", backgroundColor: "darkblue", padding: "0px"}}>
          <h1 style={{fontFamily: "Pacifico", color: "palegoldenrod", textAlign: "center", paddingTop: "75px"}}>Your First Choice in FirstDose</h1>
          <div className="login-image">
          </div>
      </Col>
      <Col style={{height: "100vh", padding: "1px"}}>
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

const msp = (state) => {
  return {
    user: state.user,
  }
}

const mdp = (dispatch) => {
  return {
    loginUser: (user) => dispatch({type:"LOGIN_USER", user:user}),
    // renderDocOrders: (doctorOrders) => dispatch({type:"GET_DOCTOR_ORDERS", doctorOrders:doctorOrders})
  }
}

export default connect(msp,mdp)(LoginSignup)