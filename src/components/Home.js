import React from 'react'
import { connect } from 'react-redux'

const Home = () => {
  return(
    <div>
      I'm the Homepage
    </div>
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