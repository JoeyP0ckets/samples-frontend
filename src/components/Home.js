import React from 'react'
import { connect } from 'react-redux'
import UserSample from '../containers/UserSamples'
import {Row, Col} from 'react-bootstrap'

class Home extends React.Component {

  componentDidMount() {
    this.fetchUser()
  }

  fetchUser = () => {
    fetch(`http://localhost:3000/api/v1/doctors/4`)
    .then(resp => resp.json())
    .then(user => this.props.loginUser(user))
  }
  
  
  render () {
    return(
      <div className="home-main">
        <h2>Welcome, Dr. {this.props.user ? this.props.user.name : null}</h2>
        <Row>
          <Col className="user-samples-main">
            <h3>Click on a past sample for tracking information</h3>
            {this.props.user ? <UserSample/> : "Loading Your Samples"}
          </Col>
          <Col className="user-info-main">
            <h3>I'm the second column foolish human</h3>
          </Col>
        </Row>
      </div>
      
    )
  }
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