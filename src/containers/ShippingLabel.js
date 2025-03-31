import React from "react"
import { connect } from "react-redux"
import dateFormat from "dateformat"



const ShippingLabel = (props) => {
  const {quantity, status_datetime, tracking_number, shipped_at, tracking_status, tracking_status_updated_at, delivery_estimate} = props.selectedOrder
  const {address_1, address_2, city, state, zipcode} = props.user

  if (!tracking_number) {
    return (
      <div className="shipping-label-text fade-in-image">
        <b className="shipping-label-bold-text">Shipping info coming soon!</b>
        <b className="shipping-label-bold-text">We're preparing the package. Check back shortly.</b>
      </div>
    );
  }

  return(
    <div className="shipping-label-text fade-in-image">
    <b className="shipping-label-bold-text">Tracking No:</b>
  <a
    href={`https://www.fedex.com/fedextrack/?tracknumbers=${tracking_number}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline hover:text-blue-800"
  >
    {tracking_number}
  </a>
    <hr></hr>
    <b className="shipping-label-bold-text">Address:</b>
    <div className="shipping-label-address-text">
      {address_1}<br></br>
      {address_2}<br></br>
      {city} {state}, {zipcode}<br></br>
    </div>
    <hr></hr>
    <b className="shipping-label-bold-text">Signed on:</b> {dateFormat(status_datetime, "mmm d, yyyy")}<br></br>
    <b className="shipping-label-bold-text">Shipped At:</b>{' '}
      {dateFormat(status_datetime, "mmm d, yyyy")}<br></br>
    <b className="shipping-label-bold-text">Tracking Status:</b>{' '}
      {tracking_status}<br></br>
    <b className="shipping-label-bold-text">Last Updated:</b>{' '}
      {dateFormat(status_datetime, "mmm d, yyyy")}

{/*
<p>
  <span className="shipping-label-bold-text">Delivery Estimate:</span>{' '}
  {delivery_estimate}
</p>
*/}

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