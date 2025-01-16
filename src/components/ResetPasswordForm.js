import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"; // To get the token from the URL
import { useSnackbar } from "notistack"; // For notifications
import { API_ROOT} from '../apiRoot'

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState(""); // Local state for the new password
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // Extract the token from the URL
  const token = searchParams.get("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_ROOT}/passwords`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }), // Pass the token and new password
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          enqueueSnackbar(data.message, { variant: "success" });
          setPassword(""); // Clear the input after success
          navigate("/")
        } else {
          enqueueSnackbar(data.error || "Failed to reset password.", { variant: "error" });
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
        type="password"
        placeholder="Enter your new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update the password state
        required
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;