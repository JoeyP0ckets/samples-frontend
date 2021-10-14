import React, {useState} from "react"
import { Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'

const Signup = (props) => {
  
  const [signupErrorMessage, setSignupErrorMessage] = useState(undefined)
  
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
      license_id: e.target.license_id.value,
      professional_title: e.target.professional_title.value,
      phone_number: e.target.phone_number.value
    }
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
      .then((data) => {
        if (data.token) {
          // setAuthToken(data.token)
          // props.loginUser(data.doctor)
          // setSignupErrorMessage(undefined)
          props.loginUser();
        } else {
          // localStorage.removeItem('auth_token')
          // setSignupErrorMessage(data.errors)
          props.logoutUser();
        }
      })
      .catch(() => {
        localStorage.removeItem('auth_token')
        setSignupErrorMessage('Something went wrong')
      })
      e.target.reset()
  }

  const displayErrorMessages = () => {
    return (
      <ul>
        {signupErrorMessage.map((error, index) => (
        <li key={index}>{error}</li>
        ))}
      </ul>
    )
  }
  

  return (
    <Form onSubmit={e => handleSignupSubmit(e)}>
       <Form.Group>
         General Information
        <Form.Control type="text" placeholder="Profesional Title e.g. Doctor" name="professional_title"/>
        <Form.Control type="text" placeholder="First and Last Name" name="name"/>  
        <Form.Control type="text" placeholder="Email" name="email"/>
        <Form.Control type="password" placeholder="Password" name="password"/>
        <Form.Control type="text" placeholder="Phone Number" name="phone_number"/>
        <br></br>
          Address Information
        <Form.Control type="text" placeholder="Address 1" name="address_1"/>
        <Form.Control type="text" placeholder="Address 2 (Optional)" name="address_2"/>
        <Form.Control type="text" placeholder="City" name="city"/>
        <Form.Control type="text" placeholder="State" name="state"/>
        <Form.Control type="text" placeholder="Zipcode" name="zipcode"/>
        <br></br>
          Licensing Information
        <Form.Control type="text" placeholder="License ID" name="license_id"/>
        <br></br>
        <div className="signup-error-container">
          {signupErrorMessage ? displayErrorMessages() : null}
        </div>
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