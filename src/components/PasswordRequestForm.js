import React, { useState } from "react"; 
import { useSnackbar } from "notistack"; // For notifications 
import { API_ROOT} from '../apiRoot'

const PasswordResetRequest = () => { 
  const [email, setEmail] = useState(""); // Local state for email input 
  const { enqueueSnackbar } = useSnackbar(); 

  const handleSubmit = (e) =>{
    e.preventDefault(); 

    fetch(`${API_ROOT}/passwords`, {
      method: "POST", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ email }), 
    }) 
      .then((response) => response.json()) 
      .then((data) => { 
        if (data.message) {
          enqueueSnackbar(data.message, { variant: "success" }); 
        } else if (data.error) {
          enqueueSnackbar(data.error, { variant: "error" }); 
        } 
      }) 
      .catch((error) => { 
        enqueueSnackbar("An error occurred. Please try again.", { variant: "error" }); 
        console.error("Error:", error); 
      }); 
  }; 
  
  return (
    <div className="reset-container">
  <div className="reset-logo-bg" />
  <form onSubmit={handleSubmit}>
    <h2 className="reset-title">Reset Your Password</h2>
    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="reset-input"
    />
    <button type="submit" className="reset-button">
      Send Reset Link
    </button>
  </form>
</div>

  );  
}; 







export default PasswordResetRequest; 