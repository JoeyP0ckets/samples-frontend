import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthProvider from './context/AuthProvider';
import AppContent from './AppContent'; // NOTE!!! Moved App logic here to keep App file cleaner.

function App({ user }) {
  return (
    <SnackbarProvider>
      <Router>
        <AuthProvider>
          <AppContent user={user} />
        </AuthProvider>
      </Router>
    </SnackbarProvider>
  );
}

const msp = state => ({
  user: state.user
});

export default connect(msp)(App);
