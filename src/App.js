import './App.css';
import { SnackbarProvider } from 'notistack';
import AuthProvider from './context/AuthProvider';
import { connect } from 'react-redux'
import Navbar from '../src/components/Navbar'
import LoginSignup from '../src/containers/LoginSignup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PasswordResetRequest from './components/PasswordRequestForm';
import ResetPassword from './components/ResetPasswordForm';


function App(props) {
  
  return (
    <SnackbarProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            {props.user ? (
              <Navbar />
            ) : (
              <Routes>
                <Route path="/" element={<LoginSignup />} />
                <Route path="/password-reset-request" element={<PasswordResetRequest />} /> 
                <Route path="/reset-password" element={<ResetPassword/>}/>{/* Add route */}
              </Routes>
            )}
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
