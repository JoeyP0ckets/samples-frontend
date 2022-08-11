import './App.css';
import { SnackbarProvider } from 'notistack';
import AuthProvider from './context/AuthProvider';
import { connect, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Navbar from '../src/components/Navbar'
import LoginSignup from '../src/containers/LoginSignup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from "react-router-dom"
import {API_ROOT} from './apiRoot'
// import Switch from 'react-bootstrap/esm/Switch';



function App(props) {
  
  const dispatch = useDispatch();
  useEffect(() => fetchUser(), []);
  //fetch use gets run everytime app is rendered with an empty depedency array which should only render once
  const fetchUser = () => {
    const token = localStorage.getItem('auth_token')

    if(!token) {
      console.log("I don't have a login token")
      return
    }

    const fetchObj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token': token
      },
    }

    fetch(`${API_ROOT}/doctors/showdoctor`, fetchObj)
    .then(resp => resp.json())
    .then(user => {
      dispatch({ type: "LOGIN_USER", user: user})
    })
  }
  return (
    <SnackbarProvider>
      <AuthProvider>
        <Router>
        <div className="App">
          {props.user ? <Navbar/> : <LoginSignup/>}
        </div> 
        </Router>
      </AuthProvider>
    </SnackbarProvider>
  );
 
}

const msp = state => {
  return {
    user: state.user
  }
}

export default connect(msp)(App);
