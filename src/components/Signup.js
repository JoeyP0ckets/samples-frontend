import React, { useContext, useState } from "react"
import { Form, Button} from 'react-bootstrap'
import { AuthContext }from '../context/AuthProvider'
import Reactphone from "./Reactphone"


const Signup = ({setClicked}) => {
 
  const { signupUser } = useContext(AuthContext);
  const [showGeneral, setShowGeneral] = useState(true);
  const [showAddress, setShowAddress] = useState(false);
  const [showLicense, setShowLicense] = useState(false);
  
  const handleSignupSubmit = e => {
    e.preventDefault();
    signupUser(
      e.target.first_name.value, 
      e.target.last_name.value,
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
    e.target.reset();
    setClicked(false);
  }

  return (
    <div className="reset-container signup-scroll-wrapper">
      <form onSubmit={handleSignupSubmit}>
        <h2 className="reset-title" style={{ fontFamily: "Cinzel" }}>Signup</h2>

        {/* General Info Section */}
        <div className="form-section-title" onClick={() => setShowGeneral(!showGeneral)}>
          General Information {showGeneral ? "▲" : "▼"}
        </div>
        {showGeneral && (
          <>
            <Form.Control type="text" placeholder="Professional Title e.g. Doctor" name="professional_title" className="reset-input" />
            <Form.Control type="text" placeholder="First Name" name="first_name" className="reset-input" />
            <Form.Control type="text" placeholder="Last Name" name="last_name" className="reset-input" />
            <Form.Control type="text" placeholder="Email" name="email" className="reset-input" />
            <Form.Control type="password" placeholder="Password" name="password" className="reset-input" />
            <Reactphone />
          </>
        )}

        {/* Address Info Section */}
        <div className="form-section-title" onClick={() => setShowAddress(!showAddress)}>
          Address Information {showAddress ? "▲" : "▼"}
        </div>
        {showAddress && (
          <>
            <Form.Control type="text" placeholder="Address 1" name="address_1" className="reset-input" />
            <Form.Control type="text" placeholder="Address 2 (Optional)" name="address_2" className="reset-input" />
            <Form.Control type="text" placeholder="City" name="city" className="reset-input" />
            <Form.Control type="text" placeholder="State" name="state" className="reset-input" />
            <Form.Control type="text" placeholder="Zipcode" name="zipcode" className="reset-input" />
          </>
        )}

        {/* License Info Section */}
        <div className="form-section-title" onClick={() => setShowLicense(!showLicense)}>
          License Information {showLicense ? "▲" : "▼"}
        </div>
        {showLicense && (
          <>
            <Form.Control type="text" placeholder="License ID" name="license_id" className="reset-input" />
          </>
        )}

        <br />
        <button type="submit" className="reset-button">
          Signup
        </button>
      </form>
    </div>
  )
}

export default Signup