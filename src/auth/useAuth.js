import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';


const TIMEOUT = 5000;
let authIntervalTimer = null;

export const useAuth = () => {
  const [authTime, setAuthTime] = useState(null);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
      
      const loginUser = useCallback((name, password) => {
        const doctor = {
          doctor: {
            name,
            password,
          }
        }
      
        const fetchObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(doctor)
        }

      
        fetch(`http://localhost:3000/api/v1/sessions`, fetchObj)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.token) {
              localStorage.setItem('auth_token', data.token);
              setAuthTime(new Date(data.doctor.last_logged_in).getTime());
              dispatch({ type: 'LOGIN_USER', user: data.doctor })
            }
            else if (data.message) {
              enqueueSnackbar(data.message, { variant: 'error' });
            }
            else {
              enqueueSnackbar('Sorry there was an error with the request', { variant: 'error' });
            }
          })
          .catch(err => enqueueSnackbar(`Sorry there was an error with that request: ${err}`, { variant: 'error' }));
      }, [dispatch, enqueueSnackbar]);

  const logoutUser = useCallback(() => {
    console.log("I'm logging out the user")
    localStorage.clear('auth_token');
    dispatch({ type: 'LOGOUT_USER' });
  }, [])

  useEffect(() => {
    if (authIntervalTimer) {
      clearInterval(authIntervalTimer);
    }

    authIntervalTimer = setInterval(() => {
      if (authTime && (Date.now() > authTime + TIMEOUT)) {
        setAuthTime(null);
        logoutUser();
      }
    }, 1000);

    return () => clearInterval(authIntervalTimer);
  }, [authTime, logoutUser]);

  return { loginUser, logoutUser}
}

