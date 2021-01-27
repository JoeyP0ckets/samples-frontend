import React from "react"
import {connect} from "react-redux"
import {Button} from "react-bootstrap"
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_ID");

const SampleView = (props) => {

  const orderClick = (sample) => {
    console.log(`${sample.sample_name} was clicked by doctor ${props.user.name}`)
    emailjs.send("service_c25ldbm","template_4c4r0yu", {
      from_name: "Joe",
      to_name: "First Dose Ordering",
      sample_name: `${props.selectedSample.sample_name}`,
      user_name: `${props.user.name}`,
      address_1: `${props.user.address_1}`,
      address_2: `${props.user.address_2}`,
      city: `${props.user.city}`,
      state: `${props.user.state}`,
      zipcode: `${props.user.zipcode}`
      });
      alert("Your order has been sent")
      //fetch POST to new doctorsample. Make sure to check backend for model change.
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
export default connect(msp)(SampleView)