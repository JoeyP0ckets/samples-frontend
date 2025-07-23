import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {connect, useDispatch} from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { API_ROOT} from '../apiRoot'
import { useSnackbar } from 'notistack';



const OrderView = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [lgShow, setLgShow] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  
  const orderClick = () => {
      createDoctorOrder();
      dispatch({ type: 'SELECT_SAMPLE', selectedSample: null })
      dispatch({ type: 'SELECT_QUANTITY', value: null })
      navigate("/your-doses");
    }

  const createDoctorOrder = () => {    
    let token = localStorage.getItem('auth_token')
    
    const doctor_order= {
      quantity: props.quantity,
      sample_id: props.selectedSample.id,
    }
    
    fetch (`${API_ROOT}/doctor_orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json",
         'Auth-Token': token
      },
      body: JSON.stringify(
        doctor_order
      )
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data)
        if (data.doctor_order) {
          dispatch({ type: "RENDER_NEW_DOCTOR_ORDER", newOrder: data.doctor_order});
          enqueueSnackbar(data.success_message, { variant: 'success' });
    
        }
        else if (data.message) {
          enqueueSnackbar(data.message, { variant: 'error' });
        }
        else {
          enqueueSnackbar('Sorry there was an error with the request', { variant: 'error' });
        }
      })
  }

  const handleSelect = e => {
    let value = e.target.value
    props.selectQuantity(value)
  }

  const {professional_title, address_1, address_2, first_name, last_name, city, state, zipcode} = props.user

  return (
  <div className="order-form-container">
      <Button variant="primary" className="btn-primary" id="place-order-button" onClick={() => setLgShow(true)}>Place Order</Button>
     <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">
            Order Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Order will be sent to: </h5>
          <div className="modal-doc-info"></div>
            {professional_title} {first_name} {last_name}
            <br></br>
            {address_1}
            <br></br>
            {address_2}
            <br></br>
            {city} {state}, {zipcode}
          <div className="modal-quantity-select">
          <select name="quantity" onChange={handleSelect}>
            <option value="none" > 
              Select Quantity
            </option> 
            <option value="1">1 dose of {props.selectedSample.sample_size} sample</option>
            <option value="2">2 doses of {props.selectedSample.sample_size} sample</option>
            <option value="3">3 doses of {props.selectedSample.sample_size} sample</option>
          </select>
          </div>
      <br></br>
      <Button onClick={() => orderClick()} disabled={!props.quantity}>Submit Order</Button>
        </Modal.Body>
      </Modal>
  </div>
  )
}

const msp = state => {
  return {
    user: state.user,
    selectedSample: state.selectedSample,
    quantity: state.quantity
  }
}
const mdp = dispatch => {
  return {
    renderNewDocOrder: (newOrder) => dispatch({type:"RENDER_NEW_DOCTOR_ORDER", newOrder:newOrder}),
    selectQuantity: (value) => dispatch({type:"SELECT_QUANTITY", value:value}),
    resetQuantity: () => dispatch({type:"RESET_QUANTITY"}),
  }
}

export default connect(msp,mdp)(OrderView) 