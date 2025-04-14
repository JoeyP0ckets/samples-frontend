import React, { createContext, useContext } from 'react';
import { useAuth as useAuthHook } from '../auth/useAuth'; // useAuth is your custom hook

// Create context
export const AuthContext = createContext();

// Wrap the app in this provider
const AuthProvider = ({ children }) => {
  const auth = useAuthHook(); // Grab everything from your useAuth hook

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;