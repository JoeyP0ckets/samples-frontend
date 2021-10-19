import React, { useEffect } from "react"
import { connect } from "react-redux"

 
const UserSample = (props) => {
    useEffect(() => fetchUserOrders(), []);
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


    const fetchUserOrders = () => {
      fetch ('http://localhost:3000/api/v1/doctor_orders/return_doctors_orders', fetchObj)
      .then(resp => resp.json())
      .then((doc_orders) => props.renderDocOrders(doc_orders))
    }

    const displayOrders = () => {
      return (
        <ul>
          {props.doctorOrders.map((order, index) => (
          <li key={index}>{order.sample.sample_name}, {order.status}</li>
          ))}
        </ul>
      )
    }
    

  return (
    <div className="user-samples-container">
      {props.doctorOrders ? displayOrders() : "No orders to show"}
    </div>
  )
}

const msp = state => {
  return {
    doctorOrders: state.doctorOrders,
    user: state.user
  }
}

const mdp = dispatch => {
  return {
    renderDocOrders: (doctorOrders) => dispatch({type:"GET_DOCTOR_ORDERS", doctorOrders:doctorOrders})
  }
}

export default connect(msp,mdp)(UserSample)