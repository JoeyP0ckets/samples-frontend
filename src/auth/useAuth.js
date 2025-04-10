import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { API_ROOT } from '../apiRoot';


const TIMEOUT = 900000;
let authIntervalTimer = null;

export const useAuth = () => {
  const [authTime, setAuthTime] = useState(null);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();


//Fetch User Function

  const getUser = useCallback(() => {
    const token = localStorage.getItem('auth_token')

    if(!token) {
      return
    }

    const fetchObj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token': token
      },
    }

    fetch(`${API_ROOT}/doctors/showdoctor`, fetchObj)
    .then(resp => resp.json())
    .then(user => {
      dispatch({ type: "LOGIN_USER", user: user})
    }) 
    
  }, [dispatch]);


  // useEffect to load user on initial load (runs one time when hook is initialized)
  useEffect(() => {
    getUser();
  }, [getUser])

      
      //Signup Function
  const signupUser = useCallback((first_name, last_name, password, email, address_1, address_2, city, state, zipcode, license_id, professional_title, phone_number) => {
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
      phone_number,
    }
     
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
        "phone_number", "address_1", "address_2",
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
        
        fetch(`${API_ROOT}/sessions`, fetchObj)
          .then(res => res.json())
          .then(data => {
            if (data.token) {
              localStorage.setItem('auth_token', data.token);
              setAuthTime(new Date(data.doctor.last_logged_in).getTime());
              dispatch({ type: 'LOGIN_USER', user: data.doctor });
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
  }, [dispatch])
 //This useEffect starts running as soon as an authTime variable is created by setAuthTime useState during Login
// or Signup
  useEffect(() => {
    if (authIntervalTimer) {
      clearInterval(authIntervalTimer);
    }
  //this assigns setInterval to check whether state of authtime plus current time is greater than state of authtime plus 
  //Timeout variable set on line 7 as the authIntervalTimer

    authIntervalTimer = setInterval(() => {
      if (authTime && (Date.now() > authTime + TIMEOUT)) {
        //if it does then clear authTime variable in state and run logout user on 135
        setAuthTime(null);
        logoutUser();
      }
    }, 1000);

    return () => clearInterval(authIntervalTimer);
  }, [authTime, logoutUser]);

  return { loginUser, logoutUser, signupUser }
}

