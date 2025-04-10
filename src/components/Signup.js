import React, { useContext, useState } from "react"
import { Form } from 'react-bootstrap'
import { AuthContext }from '../context/AuthProvider'



const Signup = ({setClicked}) => {
 
  const { signupUser } = useContext(AuthContext);
  const [showGeneral, setShowGeneral] = useState(true);
  const [showAddress, setShowAddress] = useState(false);
  const [showLicense, setShowLicense] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
  
    if (cleaned.length <= 3) {
      return `(${cleaned}`;
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  };
  
  
  
  const handleSignupSubmit = e => {
    e.preventDefault();

    const getInputValue = (e, name) => e.target[name]?.value || "";

    signupUser(
      getInputValue(e, "first_name"),
      getInputValue(e, "last_name"),
      getInputValue(e, "password"),
      getInputValue(e, "email"),
      getInputValue(e, "address_1"),
      getInputValue(e, "address_2"),
      getInputValue(e, "city"),
      getInputValue(e, "state"),
      getInputValue(e, "zipcode"),
      getInputValue(e, "license_id"),
      getInputValue(e, "professional_title"),
      phoneNumber 
    ).then(({ success, errors }) => {
      if (success) {
        e.target.reset();
        setPhoneNumber("");
        setClicked(false);
        setFieldErrors({});
      } else {
        setFieldErrors(errors || {});
      }
    });
    
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
    <Form.Group>
      <Form.Control
        type="text"
        placeholder="Professional Title e.g. Doctor"
        name="professional_title"
        className="reset-input"
        isInvalid={!!fieldErrors.professional_title}
      />
      <Form.Control.Feedback type="invalid">
        {fieldErrors.professional_title}
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group>
      <Form.Control
        type="text"
        placeholder="First Name"
        name="first_name"
        className="reset-input"
        isInvalid={!!fieldErrors.first_name}
      />
      <Form.Control.Feedback type="invalid">
        {fieldErrors.first_name}
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group>
      <Form.Control
        type="text"
        placeholder="Last Name"
        name="last_name"
        className="reset-input"
        isInvalid={!!fieldErrors.last_name}
      />
      <Form.Control.Feedback type="invalid">
        {fieldErrors.last_name}
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group>
      <Form.Control
        type="text"
        placeholder="Email"
        name="email"
        className="reset-input"
        isInvalid={!!fieldErrors.email}
      />
      <Form.Control.Feedback type="invalid">
        {fieldErrors.email}
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group>
      <Form.Control
        type="password"
        placeholder="Password"
        name="password"
        className="reset-input"
        isInvalid={!!fieldErrors.password}
      />
      <Form.Control.Feedback type="invalid">
        {fieldErrors.password}
      </Form.Control.Feedback>
    </Form.Group>

    <Form.Group>
      <Form.Control
        type="text"
        placeholder="Phone Number (e.g. 123-456-7890)"
        name="phone_number"
        className="reset-input"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
        isInvalid={!!fieldErrors.phone_number}
      />
      <Form.Control.Feedback type="invalid">
        {fieldErrors.phone_number}
      </Form.Control.Feedback>
    </Form.Group>
  </>
)}


        {/* Address Info Section */}
        <div className="form-section-title" onClick={() => setShowAddress(!showAddress)}>
          Address Information {showAddress ? "▲" : "▼"}
        </div>
        {showAddress && (
          <>
          <Form.Group>
            <Form.Control 
              type="text" 
              placeholder="Address 1" 
              name="address_1" 
              className="reset-input" 
              isInvalid={!!fieldErrors.address_1}
            />
             <Form.Control.Feedback type="invalid">
              {fieldErrors.address_1}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group>
            <Form.Control 
              type="text" 
              placeholder="Address 2 (Optional)" 
              name="address_2" 
              className="reset-input" 
            />
          </Form.Group>

          <Form.Group>
            <Form.Control 
              type="text" 
              placeholder="City" 
              name="city" 
              className="reset-input" 
              isInvalid={!!fieldErrors.city}
            />
            <Form.Control.Feedback type="invalid">
              {fieldErrors.city}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control 
              type="text" 
              placeholder="State" 
              name="state" 
              className="reset-input" 
              isInvalid={!!fieldErrors.state}
            />
            <Form.Control.Feedback type="invalid">
              {fieldErrors.state}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control 
              type="text" 
              placeholder="Zipcode" 
              name="zipcode" 
              className="reset-input" 
              isInvalid={!!fieldErrors.zipcode}
            />
            <Form.Control.Feedback type="invalid">
              {fieldErrors.zipcode}
            </Form.Control.Feedback>
          </Form.Group>
          </>
        )}

        {/* License Info Section */}
        <div className="form-section-title" onClick={() => setShowLicense(!showLicense)}>
          License Information {showLicense ? "▲" : "▼"}
        </div>
        {showLicense && (
          <>
          <Form.Group>
            <Form.Control 
              type="text" 
              placeholder="License ID" 
              name="license_id" 
              className="reset-input" 
              isInvalid={!!fieldErrors.license_id}
            />
            <Form.Control.Feedback type="invalid">
              {fieldErrors.license_id}
            </Form.Control.Feedback>
          </Form.Group>
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