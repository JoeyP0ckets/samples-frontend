import React from "react"
import { Form, Button } from "react-bootstrap"
import { connect } from "react-redux"

const Login = (props) => {

  const handleLoginSubmit = e => {
    e.preventDefault()
    const doctor = {
      doctor: {
        name: e.target.name.value,
        password: e.target.password.value
      }
    }
    console.log(doctor)
    fetch (`http://localhost:3000/api/v1/doctors/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(doctor)
    })
      .then(resp => resp.json())
      .then((user) => {
        props.loginUser(user)
      })
      e.target.reset()
  }
  
    return(
    <Form onSubmit={e => handleLoginSubmit(e)}>
    <Form.Group>
     <Form.Control type="text" placeholder="Name" name="name"/>  
     <Form.Control type="password" placeholder="Password" name="password"/>   
     <br></br>
     <Button type="submit">Login</Button>
    </Form.Group>
 </Form>
  )
}

const mdp = dispatch => {
  return {
    loginUser: (user) => dispatch({type:"LOGIN_USER", user:user})
  }
}

export default connect(null,mdp)(Login)