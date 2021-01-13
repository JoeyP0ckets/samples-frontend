import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {

  componentDidMount() {
    this.fetchUser()
  }

  fetchUser = () => {
    fetch(`http://localhost:3000/api/v1/doctors/3`)
    .then(resp => resp.json())
    .then(user => this.props.loginUser(user))
  }
  
  
  render () {
    return(
      <div className="home-main">
        <h2>Welcome, Dr. {this.props.user ? this.props.user.name : null}</h2>
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