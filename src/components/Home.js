import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import UserSample from '../containers/UserSamples'
import {Row, Col} from 'react-bootstrap'
import LoginSignup from '../containers/LoginSignup'
import CheckStatusButton from './CheckStatusButton'
import TestOrdersButton from './TestOrdersButton'



const Home = props => {
  useEffect(() => fetchUser(), []);

  const fetchUser = () => {
    const token = localStorage.getItem('auth_token')

    if(!token) {
      return
    }

    const fetchObj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token': token
      },
    }

    fetch(`http://localhost:3000/api/v1/doctors/showdoctor`, fetchObj)
    .then(resp => resp.json())
    .then(user => props.loginUser(user))
  }
  
  return props.user ? (
    <div className="home-main">
      <h2>Welcome, Dr. {props.user ? props.user.name : null}</h2>
      <Row>
        <Col className="user-samples-main">
          <h3>Click on a past sample for tracking information</h3>
          {props.user.samples ? <UserSample/> : "No First Doses"}
        </Col>
        <Col className="user-info-main">
          <a href="https://local.fedex.com/en-us/track/">Click here to track package</a>
          <CheckStatusButton/>
          <TestOrdersButton/>
        </Col>
      </Row>
    </div>
  ) :
  (
    <LoginSignup />
  )
}

const msp = (state) => {
  return {
    user: state.user
  }
}

const mdp = (dispatch) => {
  return {
    loginUser: (user) => dispatch({type:"LOGIN_USER", user:user})
  }
}

export default connect(msp, mdp)(Home)