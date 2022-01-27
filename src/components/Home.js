import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import UserSample from '../containers/UserSamples'
import LoginSignup from '../containers/LoginSignup'
import CheckStatusInterval from './CheckStatusInterval'
import SendOrdersInterval from './SendOrdersInterval'
import { API_ROOT } from '../apiRoot'




const Home = (props) => {
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

    fetch(`${API_ROOT}/doctors/showdoctor`, fetchObj)
    .then(resp => resp.json())
    .then(user => {
      props.loginUser(user)
    })
  }
  
  return props.user ? (
    <div className="home-main">
       {/* <CheckStatusInterval/>
       <SendOrdersInterval/> */}
      <h3 style={{paddingTop: "20px", paddingLeft: "75px", fontFamily: "Cinzel", textAlign: "left", color: "whitesmoke"}}>Welcome, Dr. {props.user ? props.user.name : null}</h3>
        <div className="user-samples-main">
          <div className="user-samples-header" style={{position: "sticky", top: "0", backgroundColor: "lightgrey"}}>
            <h3 style={{textAlign: "center", paddingTop: "10px", fontFamily: "Cinzel"}}>Your Doses</h3>
        </div>
        <div>
          {props.user.doctorOrders ? <UserSample/> : "No First Doses"}
        </div>
        </div> 
    </div>
  ) :
  (
    <LoginSignup/>
  )
}

const msp = (state) => {
  return {
    user: state.user,
    doctorOrders: state.doctorOrders
  }
}

const mdp = (dispatch) => {
  return {
    loginUser: (user) => dispatch({type:"LOGIN_USER", user:user})
  }
}

export default connect(msp, mdp)(Home)

