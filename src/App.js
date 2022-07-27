import './App.css';
import { SnackbarProvider } from 'notistack';
import AuthProvider from './context/AuthProvider';
import { connect } from 'react-redux'
import Navbar from '../src/components/Navbar'
import LoginSignup from '../src/containers/LoginSignup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router } from "react-router-dom"



function App(props) {
 
  
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
