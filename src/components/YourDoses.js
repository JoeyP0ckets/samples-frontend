import {React, useEffect, useCallback, useMemo } from "react"
import { connect } from "react-redux"
import ShippingLabel from '../containers/ShippingLabel';
import ShippingTracker from '../containers/ShippingTracker';
import { Row, Col } from 'react-bootstrap'
import { API_ROOT } from '../apiRoot'
import ContractsTable from "./ContractsTable";
import ContactFooter from "../containers/ContactFooter"

const YourDoses = (props) => {

      
  const { renderDocOrders, selectedOrder } = props;

  const fetchObj = useMemo(() => {
    const token = localStorage.getItem("auth_token");
    return {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Auth-Token": token,
      },
    };
  }, []);

  const fetchUserOrders = useCallback(() => {
    fetch(`${API_ROOT}/doctor_orders/return_doctors_orders`, fetchObj)
      .then((resp) => resp.json())
      .then((doctorOrders) => {
        renderDocOrders(doctorOrders);
      });
  }, [fetchObj, renderDocOrders]);

  useEffect(() => {
    fetchUserOrders();
  }, [fetchUserOrders]);

  return(
    <div className="your-doses-page">
      <div className="yourdose-contract-frame">
        <div className="yourdose-explain-container">
          <div id="yourdose-explain-header" className="grow-text aura-pulse">
            Review
          </div>
          <div id="yourdose-explain-firstline">
            the status of your contract.
          </div>
          <div id="yourdose-explain-body">
            First Dose Fulfillment uses Dropbox Sign to easily send contracts right to your email.  Once you sign, your first dose is on the way.  Keep track with the table below.
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
              First Dose uses FedEx Standard Ground Shipping. Orders received before 3pm CST will be subject to same day processing. Orders received after 3pm CST will be subject to processing the next business day. Shipping times vary. Click on an order below to track the status of a first dose shipment.              </div>
            </div>
            <div className="shipping-info-data">
              <ShippingTracker/> 
            </div>
          </Col>
          <Col className="column-shipping" id="shipping-col-right">
            <div id="shipping-text-container">
              {selectedOrder ? <ShippingLabel/> : <div id="please-select-shipping-order" className="grow-text">Please Select a Shipping Order</div>}
            </div>
          </Col>
        </Row>
        <br></br>
      </div>
      <br></br>
      <div style={{ height: '150px' }}></div>
      <div id="footer-trigger-marker" style={{ height: '1px' }}></div>
      <ContactFooter/>
    </div>
  )
}

const msp = state => {
  return {
    doctorOrders: state.doctorOrders,
    user: state.doctorOrders.doctor,
    selectedOrder: state.selectedOrder
  }
}

const mdp = dispatch => {
  return {
    renderDocOrders: (doctorOrders) => dispatch({type:"GET_DOCTOR_ORDERS", doctorOrders:doctorOrders})
  }
}

export default connect(msp,mdp)(YourDoses)