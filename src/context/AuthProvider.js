import React, { createContext } from 'react';
import { useAuth } from '../auth/useAuth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { loginUser, logoutUser, signupUser } = useAuth();

  // Map auth functions to an object to pass into auth context
  const authContextObj = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    signupUser: signupUser,
  };

  return (
    <AuthContext.Provider value={authContextObj}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 