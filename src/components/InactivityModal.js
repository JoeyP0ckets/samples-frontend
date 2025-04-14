import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { useAuth } from '../context/AuthProvider';

const InactivityModal = () => {
  const { showInactivityModal, staySignedIn } = useAuth();

  return (
    <Dialog open={!!showInactivityModal}> {/* ensures it's always true/false */}
      <DialogTitle>Are you still there?</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mt: 1 }}>
          You’ve been inactive for a while. You will be automatically logged out soon to protect your account.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={staySignedIn} variant="contained" color="primary">
          Stay Signed In
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InactivityModal;

