import React from "react"
import {connect} from "react-redux"
import {Button} from "react-bootstrap"
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_ID");

const SampleView = (props) => {

  const orderClick = () => {
    emailjs.send("service_c25ldbm","template_4c4r0yu", {
      from_name: `${props.user.name}`,
      to_name: "First Dose Ordering",
      sample_name: `${props.selectedSample.sample_name}`,
      user_name: `${props.user.name}`,
      address_1: `${props.user.address_1}`,
      address_2: `${props.user.address_2}`,
      city: `${props.user.city}`,
      state: `${props.user.state}`,
      zipcode: `${props.user.zipcode}`,
      phone_number: `${props.user.phone_number}`,
      license_id: `${props.user.license_id}`,
      professional_title: `${props.user.professional_title}`
      }, "user_Ypmj33LBBAihNfVMLDVYj");
      alert("Your order has been sent")
      createDoctorSample();
  }

  const createDoctorSample= () => {
    const doctor_sample = {
      quantity: 1,
      doctor_id: props.user.id,
      sample_id: props.selectedSample.id
    }
    fetch (`http://localhost:3000/api/v1/doctor_samples`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      },
      body: JSON.stringify({
        doctor_sample
      })
    })
      .then(resp => resp.json())
      .then((newSample) => {
        props.renderNewSample(newSample)
      })
  }

  
  
  return (
    <div className="sample-info-view">
      <h1>{props.selectedSample.sample_name}</h1>
      <img src={props.selectedSample.image_url} alt={props.selectedSample.sample_name}/>
      <h4>{props.selectedSample.description}</h4>
      <Button onClick={() => orderClick(props.selectedSample)}>Order Sample</Button>

    </div>
  )
}

const msp = state => {
  return {
    user: state.user,
    selectedSample: state.selectedSample
  }
}

const mdp = dispatch => {
  return {
    renderNewSample: (newSample) => dispatch({type:"RENDER_NEW_SAMPLE", newSample:newSample})
  }
}
export default connect(msp,mdp)(SampleView)