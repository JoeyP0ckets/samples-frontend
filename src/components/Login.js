import React, { useContext, useState } from "react"
import { AuthContext }from '../context/AuthProvider'
import { Form, Button } from "react-bootstrap"


const Login = () => {
  
  const [loginErrorMessage, setLoginErrorMessage] = useState(undefined)
  const { loginUser, logoutUser} = useContext(AuthContext);

  const handleLoginSubmit = e => {
    e.preventDefault()
    const errorMessage = loginUser(e.target.name.value, e.target.password.value);
    errorMessage ? setLoginErrorMessage(errorMessage) : setLoginErrorMessage('');
    e.target.reset();
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

export default Login

// fetch (`http://localhost:3000/api/v1/sessions`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(doctor)
//     })
//       .then(resp => resp.json())
//       .then((data) => {
        // if (data.token) {
        //   setAuthToken(data.token)
        //   props.loginUser(data.doctor)
        //   setLoginErrorMessage(undefined)
        // } else {
        //   localStorage.removeItem('auth_token')
        //   setLoginErrorMessage(data.message)
        // }
      //   props.loginUser();
      // })
      // .catch(() => {
        // localStorage.removeItem('auth_token')
        // setLoginErrorMessage('Something went wrong')
      //   props.logouUser();
      // })
      // e.target.reset()