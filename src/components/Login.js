import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { connect } from "react-redux"
import { setAuthToken } from '../auth/AuthTokenTimeout'

const Login = (props) => {
  const [loginErrorMessage, setLoginErrorMessage] = useState(undefined)

  const handleLoginSubmit = e => {
    e.preventDefault()
    const doctor = {
      doctor: {
        name: e.target.name.value,
        password: e.target.password.value
      }
    }
    fetch (`http://localhost:3000/api/v1/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(doctor)
    })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data.doctor)
        if (data.token) {
          setAuthToken(data.token)
          // localStorage.setItem('auth_token', data.token)
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
  
    return(
      <Form onSubmit={e => handleLoginSubmit(e)}>
        <Form.Group>
          <Form.Control type="text" placeholder="Name" name="name"/>  
          <Form.Control type="password" placeholder="Password" name="password"/>
          {loginErrorMessage && <p style={{color: 'red'}}>{loginErrorMessage}</p>}
          <br></br>
          <Button type="submit">Login</Button>
        </Form.Group>
      </Form>
  )
}

const mdp = dispatch => {
  return {
    loginUser: (doctor) => dispatch({type:"LOGIN_USER", user:doctor})
  }
}

export default connect(null,mdp)(Login)