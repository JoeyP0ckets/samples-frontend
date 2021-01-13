import React from "react"
import { Form, Button } from "react-bootstrap"

const Login = () => {

  const handleLoginSubmit = e => {
    e.preventDefault()
    const user = {
      user: {
        username: e.target.username.value,
        password: e.target.password.value
      }
    }
  }
  
    return(
    <Form onSubmit={e => handleLoginSubmit(e)}>
    <Form.Group>
     <Form.Control type="text" placeholder="Username" name="username"/>  
     <Form.Control type="password" placeholder="Password" name="password"/>   
     <br></br>
     <Button type="submit">Login</Button>
    </Form.Group>
 </Form>
  )
}

export default Login