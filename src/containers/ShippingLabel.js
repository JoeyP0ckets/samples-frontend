import React from "react"
import { connect } from "react-redux"
import dateFormat from "dateformat"

const ShippingLabel = (props) => {
  const {quantity, status_datetime} = props.selectedOrder
  const {address_1, address_2, city, state, zipcode} = props.user
  return(
    <div className="shipping-label-text fade-in-image">
    <b className="shipping-label-bold-text">Dose:</b> {props.selectedOrder.sample.sample_name}<br></br>
    <b className="shipping-label-bold-text">Quantity:</b> {quantity}<br></br>
    <hr></hr>
    <b className="shipping-label-bold-text">Address:</b>
    <div className="shipping-label-address-text">
      {address_1}<br></br>
      {address_2}<br></br>
      {city} {state}, {zipcode}<br></br>
    </div>
    <hr></hr>
    <b className="shipping-label-bold-text">Signed on:</b> {dateFormat(status_datetime, "mmm d, yyyy")}<br></br>
    <b className="shipping-label-bold-text">Tracking No:</b> 123456 - 7653 < br ></br >
  </div >
  )
}

const msp = state => {
  return { 
    user: state.user,
    selectedOrder: state.selectedOrder
  }
}

export default connect(msp)(ShippingLabel);