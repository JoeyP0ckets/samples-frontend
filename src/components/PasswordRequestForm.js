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
     <form onSubmit={handleSubmit}> 
     <h2>Reset Your Password</h2> 
     <input 
       type="email" 
       placeholder="Enter your email" 
       value={email} 
       onChange={(e) => setEmail(e.target.value)} // Update email state required 
      /> 
      <button type="submit">Send Reset Link</button>
      </form> 
      ); 
}; 







export default PasswordResetRequest; 