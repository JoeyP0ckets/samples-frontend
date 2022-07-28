import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { API_ROOT } from '../apiRoot'
import HomeContainer from '../containers/HomeContainer'




const Home = (props) => {
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

  // const testClick = (token) => {
    
  //   const fetchObj = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Auth-Token': token
  //     },
  //   }

  //   fetch(`${API_ROOT}/hellosign/check_envelope_status`, fetchObj)

  // }
  
  return (
    <div className="home-component">
      <HomeContainer/>
    </div>
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

export default connect(msp, mdp)(Home)

