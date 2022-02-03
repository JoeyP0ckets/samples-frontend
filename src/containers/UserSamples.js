import React, { useEffect } from "react"
import { connect } from "react-redux"
import dateFormat from 'dateformat'
import { Table } from "react-bootstrap"
import { API_ROOT } from '../apiRoot'

 
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
      console.log("I'm in the fetchUserOrders function")
      fetch (`${API_ROOT}/doctor_orders/return_doctors_orders`, fetchObj)
      .then(resp => resp.json())
      .then((doctorOrders) => {
        console.log(doctorOrders)
        props.renderDocOrders(doctorOrders)})
    }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Sample Name</th>
          <th>Status</th>
          <th>Date Ordered</th>
        </tr>
      </thead>
      <tbody>
        {
          props.user.doctor_orders && props.user.doctor_orders.map((order) => (
            <tr key={order.id}>
            <td>{order.quantity} {order.quantity === 1 ? "order" : "orders"}</td>
            <td>{order.sample.sample_name}</td>
            <td>{order.status === "sent" ? `awaiting signature` : "signed for"}</td>
            <td>{dateFormat(order.status_datetime, "mmmm dS, yyyy")}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
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