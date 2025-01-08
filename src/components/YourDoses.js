import {React, useEffect } from "react"
import { connect } from "react-redux"
import ShippingLabel from '../containers/ShippingLabel';
import ShippingTracker from '../containers/ShippingTracker';
import { Row, Col } from 'react-bootstrap'
import { API_ROOT } from '../apiRoot'
import ContractsTable from "./ContractsTable";
import ContactFooter from "../containers/ContactFooter"

const YourDoses = (props) => {
  
  useEffect(() => fetchUserOrders(), []);
  //Change to check for use in props
  const token = localStorage.getItem('auth_token')

    const fetchObj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token': token
      },
    }
    //testing some of my doses

    const fetchUserOrders = () => {
      fetch (`${API_ROOT}/doctor_orders/return_doctors_orders`, fetchObj)
      .then(resp => resp.json())
      .then((doctorOrders) => {
        props.renderDocOrders(doctorOrders)});
    }

  return(
    <div className="your-doses-page">
      <div className="yourdose-contract-frame">
        <div className="yourdose-explain-container">
          <div id="yourdose-explain-header" className="grow-text aura-pulse">
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
          <ContractsTable/>
        </div>
        <br></br>
      </div>
      <div className="yourdose-shipping-frame">
        <Row style={{ display: "flex", textAlign: "center" }}>
          <Col className="column-shipping" id="shipping-col-left">
            <div className="shipping-explain-container">
              <div id="shipping-explain-header" className="grow-text aura-pulse">
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
              {props.selectedOrder ? <ShippingLabel/> : <div id="please-select-shipping-order" className="grow-text">Please Select a Shipping Order</div>}
            </div>
          </Col>
        </Row>
        <br></br>
      </div>
      <br></br>
      <ContactFooter/>
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