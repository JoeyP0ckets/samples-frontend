import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { useSnackbar } from 'notistack';
import { API_ROOT } from '../apiRoot';


const TIMEOUT = 600000; // 10 minutes (600,000 ms) 
const WARNING_THRESHOLD = 60000; // 9 minutes (540,000 ms)
let authIntervalTimer = null;

export const useAuth = () => {
  const [authTime, setAuthTime] = useState(null);
  const dispatch = useDispatch();
  const [showWarning, setShowWarning] = useState(false); 
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate(); 
  const [loadingUser, setLoadingUser] = useState(true); 



//Fetch User Function

const getUser = useCallback(() => {
  const token = localStorage.getItem('auth_token');
  if (!token) {
    setLoadingUser(false); // ✅ Done loading — no token
    return;
  }

  const fetchObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Auth-Token': token
    },
  };

  fetch(`${API_ROOT}/doctors/showdoctor`, fetchObj)
    .then(resp => resp.json())
    .then(user => {
      dispatch({ type: "LOGIN_USER", user });
    })
    .finally(() => {
      setLoadingUser(false); // ✅ Done loading — whether successful or not
    });
}, [dispatch]);



  // useEffect to load user on initial load (runs one time when hook is initialized)
  useEffect(() => {
    getUser();
  }, [getUser])

      
      //Signup Function
  const signupUser = useCallback((first_name, last_name, password, email, address_1, address_2, city, state, zipcode, license_id, professional_title, referring_pharmacy, phone_number) => {
    const doctor = {
      first_name,
      last_name, 
      password,
      email,
      address_1,
      address_2,
      city,
      state, 
      zipcode, 
      license_id,
      professional_title,
      referring_pharmacy,
      phone_number,
    };
     
    const fetchObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        doctor
      })
    }

    return fetch(`${API_ROOT}/doctors`, fetchObj)
    .then(res => res.json().then(data => {
    if (res.ok) {
      enqueueSnackbar(data.message, { variant: "success" });
      return { success: true };
    } else {
      const errorsByField = {};
      const possibleFields = [
        "first_name", "last_name", "email", "password",
        "phone_number", "referring_pharmacy", "address_1", "address_2",
        "city", "state", "zipcode", "license_id", "professional_title"
      ];

      if (data.errors && Array.isArray(data.errors)) {
        data.errors.forEach(err => {
          enqueueSnackbar(err, { variant: 'error' });

          // Try to match the error to a known field
          const matchField = possibleFields.find(field => {
            // Handles variations like "Address can't be blank" for "address_1"
            return err.toLowerCase().includes(field.replace(/_/g, ' '));
          });

          if (matchField && !errorsByField[matchField]) {
            errorsByField[matchField] = err;
          }
        });
      } else {
        enqueueSnackbar("Something went wrong. Please try again.", { variant: 'error' });
      }

      return { success: false, errors: errorsByField };
    }
  }))
  .catch(err => {
    enqueueSnackbar(`Request failed: ${err}`, { variant: 'error' });
    return { success: false, errors: {} };
  });
  }, [enqueueSnackbar]);
      
      //Login Function
      const loginUser = useCallback((email, password) => {
        const doctor = {
          doctor: {
            email,
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
        
        return fetch(`${API_ROOT}/sessions`, fetchObj)
          .then(res => res.json())
          .then(data => {
            if (data.token) {
              localStorage.setItem('auth_token', data.token);
              setAuthTime(new Date(data.doctor.last_logged_in).getTime());
              dispatch({ type: 'LOGIN_USER', user: data.doctor });
            }
            else if (data.status === "pending_verification") {
              enqueueSnackbar(data.message || "Your account is pending verification.", {
                variant: 'warning',
                style: { backgroundColor: '#FFC107', color: '#000' } // optional custom yellow
              });
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
  
  //Logout Function
  const logoutUser = useCallback(() => {
    localStorage.clear('auth_token');
    dispatch({ type: 'LOGOUT_USER' });
    dispatch({ type: 'CLEAR_DOCTOR_ORDERS'});
    dispatch({ type: 'SELECT_SAMPLE', selectedSample: null});
    dispatch({ type: 'SELECT_ORDER', selectedOrder: null});
    dispatch({ type: 'GET_ALL_SAMPLES', allSamples: []})
    navigate('/'); // ✅ redirect to login
  }, [dispatch, navigate])
 //This useEffect starts running as soon as an authTime variable is created by setAuthTime useState during Login
// or Signup
useEffect(() => {
  if (authIntervalTimer) clearInterval(authIntervalTimer);

  authIntervalTimer = setInterval(() => {
    if (!authTime) return;

    const timeElapsed = Date.now() - authTime;

    if (timeElapsed > TIMEOUT) {
      setAuthTime(null);
      setShowWarning(false); // [ADDED]
      logoutUser();
      enqueueSnackbar("You’ve been logged out due to inactivity.", { variant: 'info' }); // [ADDED]
    } else if (timeElapsed > TIMEOUT - WARNING_THRESHOLD) {
      if (!showWarning) {
        setShowWarning(true);
        enqueueSnackbar("You will be logged out soon due to inactivity.", { variant: 'warning' }); // [ADDED]
      }
    }
  }, 1000);

  return () => clearInterval(authIntervalTimer);
}, [authTime, logoutUser, enqueueSnackbar, showWarning]);

// Optional: reset timer on user activity
useEffect(() => {
  const resetTimer = () => {
    setAuthTime(Date.now());
    setShowWarning(false);
  };

  window.addEventListener("mousemove", resetTimer);
  window.addEventListener("keydown", resetTimer);

  return () => {
    window.removeEventListener("mousemove", resetTimer);
    window.removeEventListener("keydown", resetTimer);
  };
}, []);

const staySignedIn = () => {
  setAuthTime(Date.now());
  setShowWarning(false);
};

return { 
  loginUser, 
  logoutUser, 
  signupUser, 
  showInactivityModal: showWarning, 
  staySignedIn,
  loadingUser,
 };
}



