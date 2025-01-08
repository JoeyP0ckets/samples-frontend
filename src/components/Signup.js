import React, { useContext, useState } from "react"
import { Form, Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { AuthContext }from '../context/AuthProvider'
import Reactphone from "./Reactphone"


const Signup = ({setClicked}) => {
  //let navigate = useNavigate();
  const { signupUser } = useContext(AuthContext);
  
  const handleSignupSubmit = e => {
    e.preventDefault();
    signupUser(
      e.target.first_name.value, 
      e.target.last_name.value,
      e.target.password.value,
      e.target.email.value,
      e.target.address_1.value,
      e.target.address_2.value,
      e.target.city.value,
      e.target.state.value,
      e.target.zipcode.value,
      e.target.license_id.value,
      e.target.professional_title.value,
      e.target.phone_number.value
    );
    e.target.reset();
    setClicked(false);
  }

  return (
    <div className="signup-form">
      <h3 style={{paddingTop: "1px", textAlign: "center", fontFamily: "Cinzel", fontWeight: ""}}>Signup</h3>
      <Form onSubmit={e => handleSignupSubmit(e)} className="form-width">
        <Form.Group>
          <h3 style={{paddingTop: "1px", fontFamily: "Cinzel"}}>General Information</h3>
          <Form.Control type="text" placeholder="Professional Title e.g. Doctor" name="professional_title"/>
          <Form.Control type="text" placeholder="First Name" name="first_name"/>  
          <Form.Control type="text" placeholder="Last Name" name="last_name"/>  
          <Form.Control type="text" placeholder="Email" name="email"/>
          <Form.Control type="password" placeholder="Password" name="password"/>
          <Reactphone/>
          {/* <Form.Control type="text" placeholder="Phone Number" name="phone_number"/> */}
          <h3 style={{paddingTop: "15px", fontFamily: "Cinzel"}}>Address Information</h3>
          <Form.Control type="text" placeholder="Address 1" name="address_1"/>
          <Form.Control type="text" placeholder="Address 2 (Optional)" name="address_2"/>
          <Form.Control type="text" placeholder="City" name="city"/>
          <Form.Control type="text" placeholder="State" name="state"/>
          <Form.Control type="text" placeholder="Zipcode" name="zipcode"/>
          <h3 style={{paddingTop: "20px", fontFamily: "Cinzel"}}>License Information</h3>
          <Form.Control type="text" placeholder="License ID" name="license_id"/>
          <br></br>
          <Button type="submit">Signup</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Signup