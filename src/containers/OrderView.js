import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import emailjs from 'emailjs-com';
import {connect} from 'react-redux';
import {Button, Modal, } from 'react-bootstrap';


const OrderView = (props) => {
  const history = useHistory();
  const [lgShow, setLgShow] = useState(false);
  
  const orderClick = () => {
    // emailjs.send("service_c25ldbm","template_4c4r0yu", {
    //   from_name: `${props.user.name}`,
    //   to_name: "First Dose Ordering",
    //   sample_name: `${props.selectedSample.sample_name}`,
    //   user_name: `${props.user.name}`,
    //   address_1: `${props.user.address_1}`,
    //   address_2: `${props.user.address_2}`,
    //   city: `${props.user.city}`,
    //   state: `${props.user.state}`,
    //   zipcode: `${props.user.zipcode}`,
    //   phone_number: `${props.user.phone_number}`,
    //   license_id: `${props.user.license_id}`,
    //   professional_title: `${props.user.professional_title}`,
    //   quantity: `${props.quantity}`
    //   }, "user_Ypmj33LBBAihNfVMLDVYj");
    //   alert("Your order has been sent")
      createDoctorSample();
      props.resetQuantity()
  }

  

  const createDoctorSample = () => {
    
  history.push('/Docusign-Auth')
    // fetch ('http://localhost:3000/api/v1/docusign/create_session') 
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))
      
    // const doctor_sample = {
    //   quantity: props.quantity,
    //   doctor_id: props.user.id,
    //   sample_id: props.selectedSample.id,
    //   signature_status_success: false
    // }
    // fetch (`http://localhost:3000/api/v1/doctor_samples`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //      Accept: "application/json"
    //   },
    //   body: JSON.stringify({
    //     doctor_sample
    //   })
    // })
    //   .then(resp => resp.json())
    //   .then((newSample) => {
    //     console.log(newSample)
    //     props.renderNewSample(newSample)
    //   })
  }

  const handleSelect = e => {
    let value = e.target.value
    props.selectQuantity(value)
  }

  const {professional_title, address_1, address_2, name, city, state, zipcode} = props.user

  return (
  <div className="order-form-container">
      <br></br>
     <Button onClick={() => setLgShow(true)}>Order Sample</Button>
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
            {professional_title} {name}
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
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          </div>
      <br></br>
      {/* call Ruby backend to initiate status//alert user that an order is pending docusign check their email//modal.close() */}
      <Button onClick={() => orderClick()} disabled={!props.quantity}>Order Sample</Button>
        </Modal.Body>
      </Modal>
      
    {/* reinsert into onClick AFTER DOCUSIGN API TESTING IS DONE
     orderClick(props.selectedSample) */}
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
    renderNewSample: (newSample) => dispatch({type:"RENDER_NEW_SAMPLE", newSample:newSample}),
    selectQuantity: (value) => dispatch({type:"SELECT_QUANTITY", value:value}),
    resetQuantity: () => dispatch({type:"RESET_QUANTITY"})
  }
}

export default connect(msp,mdp)(OrderView) 