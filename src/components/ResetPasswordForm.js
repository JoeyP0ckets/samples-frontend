import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { API_ROOT } from '../apiRoot';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords do not match.", { variant: "error" });
      return;
    }

    fetch(`${API_ROOT}/passwords`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          enqueueSnackbar(data.message, { variant: "success" });
          setPassword("");
          setConfirmPassword("");
          navigate("/");
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
    <div className="reset-container">
      <div className="reset-logo-bg" />
      <form onSubmit={handleSubmit}>
        <h2 className="reset-title">Reset Your Password</h2>

        <input
          type="password"
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="reset-input"
        />

        <input
          type="password"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="reset-input"
        />

        <button type="submit" className="reset-button">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
