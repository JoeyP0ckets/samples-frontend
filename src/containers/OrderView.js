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
      quantity: "1 Sample",
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
      <br></br>
      <Button onClick={() => orderClick()}>Submit Order</Button>
        </Modal.Body>
      </Modal>
  </div>
  )
}

const msp = state => {
  return {
    user: state.user
  }
}
const mdp = dispatch => {
  return {
    renderNewDocOrder: (newOrder) => dispatch({type:"RENDER_NEW_DOCTOR_ORDER", newOrder:newOrder})
  }
}

export default connect(msp,mdp)(OrderView) 