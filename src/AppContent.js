import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';

import Navbar from './components/Navbar';
import InactivityModal from './components/InactivityModal';
import PrivateRoute from './components/PrivateRoute';
import LoadingSpinner from './components/LoadingSpinner';

import LoginSignup from './containers/LoginSignup';
import PasswordResetRequest from './components/PasswordRequestForm';
import ResetPassword from './components/ResetPasswordForm';
import Home from './containers/HomeContainer';
import FirstDoses from './components/FirstDoses';
import YourDoses from './components/YourDoses';

const AppContent = ({ user }) => {
  const { loadingUser } = useAuth();

  if (loadingUser) {
    return <LoadingSpinner message="Checking your session..." />;
  }

  return (
    <div className="App">
      <InactivityModal />
      {user && <Navbar />}

      <Routes>
        {user ? (
          <>
            {/* Home is accessible to logged-in users */}
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/first-doses" element={<FirstDoses />} />
              <Route path="/your-doses" element={<YourDoses />} />
            </Route>
            <Route path="*" element={<Home />} /> {/* fallback */}
          </>
        ) : (
          <>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/password-reset-request" element={<PasswordResetRequest />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="*" element={<LoginSignup />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default AppContent;
