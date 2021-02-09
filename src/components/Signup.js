import React from "react"
import { Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'

const Signup = (props) => {

  const handleSignupSubmit = e => {
    e.preventDefault()
    const doctor = {
      name: e.target.name.value,
      password: e.target.password.value,
      email: e.target.email.value,
      address_1: e.target.address_1.value,
      address_2: e.target.address_2.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zipcode: e.target.zipcode.value,
      license_number: e.target.license_number.value,
      signature: e.target.signature.value,
      professional_title: e.target.professional_title.value
    }
    console.log(doctor)
    fetch (`http://localhost:3000/api/v1/doctors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         Accept: "application/json"
      },
      body: JSON.stringify({
        doctor
      })
    })
      .then(resp => resp.json())
      .then((user) => {
        props.loginUser(user)
      })
      e.target.reset()
  }
  

  return (
    <Form onSubmit={e => handleSignupSubmit(e)}>
       <Form.Group>
         General Information
        <Form.Control type="text" placeholder="Profesional Title" name="professional_title"/>
        <Form.Control type="text" placeholder="Name" name="name"/>  
        <Form.Control type="text" placeholder="Email" name="email"/>
        <Form.Control type="text" placeholder="Password" name="password"/>
        <br></br>
          Address Information
        <Form.Control type="text" placeholder="Address 1" name="address_1"/>
        <Form.Control type="text" placeholder="Address 2" name="address_2"/>
        <Form.Control type="text" placeholder="City" name="city"/>
        <Form.Control type="text" placeholder="State" name="state"/>
        <Form.Control type="text" placeholder="Zipcode" name="zipcode"/>
        <br></br>
          Licensing Information
        <Form.Control type="text" placeholder="License Number" name="license_number"/>
          Signature
        <Form.Control type="text" placeholder="Signature" name="signature"/>
        <br></br>   
        <Button type="submit">Signup</Button>
       </Form.Group>
    </Form>
  )
}

const mdp = dispatch => {
  return{
    loginUser: (user) => dispatch({type:"LOGIN_USER", user:user})
  }
}

export default connect(null,mdp)(Signup)