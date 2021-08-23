import React, {useState} from "react"
import { Form, Button} from 'react-bootstrap'
import { connect } from 'react-redux'

const Signup = (props) => {

  const [loginErrorMessage, setLoginErrorMessage] = useState(undefined)
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
      .then((data) => {
        console.log(data.doctor)
        if (data.token) {
          localStorage.setItem('auth_token', data.token)
          props.loginUser(data.doctor)
          setLoginErrorMessage(undefined)
        } else {
          localStorage.removeItem('auth_token')
          setLoginErrorMessage(data.message)
        }
      })
      .catch(() => {
        localStorage.removeItem('auth_token')
        setLoginErrorMessage('Something went wrong')
      })
      e.target.reset()
  }
  

  return (
    <Form onSubmit={e => handleSignupSubmit(e)}>
       <Form.Group>
         General Information
        <Form.Control type="text" placeholder="Profesional Title e.g. Doctor" name="professional_title"/>
        <Form.Control type="text" placeholder="Name" name="name"/>  
        <Form.Control type="text" placeholder="Email" name="email"/>
        <Form.Control type="text" placeholder="Password" name="password"/>
        <Form.Control type="text" placeholder="Phone Number" name="phone_number"/>
        <br></br>
          Address Information
        <Form.Control type="text" placeholder="Address 1" name="address_1"/>
        <Form.Control type="text" placeholder="Address 2" name="address_2"/>
        <Form.Control type="text" placeholder="City" name="city"/>
        <Form.Control type="text" placeholder="State" name="state"/>
        <Form.Control type="text" placeholder="Zipcode" name="zipcode"/>
        <br></br>
          Licensing Information
        <Form.Control type="text" placeholder="License ID" name="license_id"/>
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