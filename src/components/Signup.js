import React from "react"
import { Form, Button} from 'react-bootstrap'

const Signup = () => {

  const handleSignupSubmit = () => {
    console.log("I was clicked")
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

export default Signup