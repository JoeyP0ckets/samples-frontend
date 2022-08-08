import {React, useEffect } from "react"
import { connect } from "react-redux"
import { Table} from 'react-bootstrap'
import ShippingLabel from '../containers/ShippingLabel';
import ShippingTracker from '../containers/ShippingTracker';
import { Row, Col } from 'react-bootstrap'
import { API_ROOT } from '../apiRoot'


const YourDoses = (props) => {
  
  useEffect(() => fetchUserOrders(), []);

  const token = localStorage.getItem('auth_token')

    if(!token) {
      console.log("I'm being returned from the USERSAMPLE")
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
        props.renderDocOrders(doctorOrders)});
    }

  return(
    <div className="your-doses-page">
      <div className="yourdose-contract-frame">
        <div className="yourdose-explain-container">
          <div id="yourdose-explain-header">
            Check
          </div>
          <div id="yourdose-explain-firstline">
            the status of your contract.
          </div>
          <div id="yourdose-explain-body">
            First Dose Fulfillment uses Hellosign to easily send contracts right to your email.  Once you sign, your first dose is on the way.  Keep track with the table below.
          </div>
        </div>
        <div className='contracts-table-scrollable-container'>
          <Table striped bordered hover variant="light" id="contract-table">
            <thead style={{ position: "sticky", top: "0" }}>
              <tr>
                <th>Quantity</th>
                <th>Sample Name</th>
                <th>Status</th>
                <th>Date Ordered</th>
              </tr>
            </thead>
            <tbody>
              {
                props.doctorOrders.map((dose) => (
                  <tr key={dose.id}>
                    <td>{dose.quantity} {dose.quantity === 1 ? "dose" : "orders"}</td>
                    <td>{dose.sample.sample_name}</td>
                    <td>{dose.status}</td>
                    <td>{dose.status_datetime}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
        <br></br>
      </div>
      <div className="yourdose-shipping-frame">
        <Row id style={{ display: "flex", textAlign: "cen ter" }}>
          <Col className="column-shipping" id="shipping-col-left">
            <div className="shipping-explain-container">
              <div id="shipping-explain-header">
                Track
              </div>
              <div id="shipping-explain-firstline">
                your First Dose order.
              </div>
              <div id="shipping-explain-body">
                First Dose uses ShipStation to provide up-to-date information on your current orders. Click on an order below to see its status.
              </div>
            </div>
            <div className="shipping-info-data">
              <ShippingTracker/> 
            </div>
          </Col>
          <Col className="column-shipping" id="shipping-col-right">
            <div id="shipping-text-container">
              {props.selectedOrder ? <ShippingLabel/> : "Please Seclect an Order"}
            </div>
          </Col>
        </Row>
        <br></br>
      </div>
      <br></br>

      <div className="contact-container">
     <div id="contact-text">
          
      </div>
     </div>
    </div>
  )
}

const msp = state => {
  return {
    doctorOrders: state.doctorOrders,
    user: state.user,
    selectedOrder: state.selectedOrder
  }
}

const mdp = dispatch => {
  return {
    renderDocOrders: (doctorOrders) => dispatch({type:"GET_DOCTOR_ORDERS", doctorOrders:doctorOrders})
  }
}

export default connect(msp,mdp)(YourDoses)