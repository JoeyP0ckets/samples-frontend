import React, {useState, useDispatch, useContext } from "react"
import { Form, Button} from 'react-bootstrap'
import { NavLink } from "react-router-dom"
import { AuthContext }from '../context/AuthProvider'


const Signup = () => {
  
  const [signupErrorMessage, setSignupErrorMessage] = useState(undefined)
  const { signupUser } = useContext(AuthContext);
  
  const handleSignupSubmit = e => {
    e.preventDefault();
    const errorMessage = signupUser(
      e.target.name.value, 
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
    errorMessage ? setSignupErrorMessage(errorMessage) : setSignupErrorMessage('');
    e.target.reset();
  }

  return (
    <div className="signup-form">
      <Form onSubmit={e => handleSignupSubmit(e)} className="form-width">
        <Form.Group>
          <h3 style={{paddingTop: "20px", fontFamily: "Cinzel"}}>General Information</h3>
          <Form.Control type="text" placeholder="Profesional Title e.g. Doctor" name="professional_title"/>
          <Form.Control type="text" placeholder="First and Last Name" name="name"/>  
          <Form.Control type="text" placeholder="Email" name="email"/>
          <Form.Control type="password" placeholder="Password" name="password"/>
          <Form.Control type="text" placeholder="Phone Number" name="phone_number"/>
          <h3 style={{paddingTop: "20px", fontFamily: "Cinzel"}}>Address Information</h3>
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
      <h6>Already a User? <NavLink to="/">Login</NavLink></h6>
    </div>
  )
}

export default Signup