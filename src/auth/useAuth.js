import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';


const TIMEOUT = 30000;
let authIntervalTimer = null;

export const useAuth = () => {
  const [authTime, setAuthTime] = useState(null);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();


     //Fetch User Function
  // const getUser = useCallback(() => {
    
  //   const token = localStorage.getItem('auth_token');
    
  //   if (token) {
  //     const fetchObj = {
  //       method: 'GET',
  //       headers: {
  //         'Auth-Token': token,
  //         'Content-Type': 'application/json',
  //       },
  //     }

  //     fetch(`http://localhost:3000/api/v1/doctors/showdoctor`, fetchObj)
  //       .then(res => res.json())
  //       .then(data => {
  //         if (data.user) {
  //           console.log(data)
  //           dispatch({ type: 'LOGIN_USER', user: data.user });
  //           setAuthTime(new Date(data.user.last_logged_in).getTime());
  //         }
  //         else if (data.message) {
  //           enqueueSnackbar(data.message, { variant: 'error' });
  //         }
  //         else {
  //           enqueueSnackbar('Sorry there was an error with the fetch user request', { variant: 'error' });
  //         }
  //       })
  //       .catch(err => enqueueSnackbar(`Sorry there was an error with that request: ${err}`, { variant: 'error' }));
  //   }
  // }, [dispatch, enqueueSnackbar]);

  // // useEffect to load user on initial load (runs one time when hook is initialized)
  // useEffect(() => {
  //   getUser();
  // }, [getUser])
      
      //Signup Function
  const signupUser = useCallback((name, password, email, address_1, address_2, city, state, zipcode, license_id, professional_title, phone_number) => {
    const doctor = {
      name, 
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

    fetch(`http://localhost:3000/api/v1/doctors`, fetchObj)
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('auth_token', data.token);
          setAuthTime(new Date(data.doctor.last_logged_in).getTime());
          dispatch({ type: 'LOGIN_USER', user: data.doctor })
        }
        else if (data.errors) {
          enqueueSnackbar(data.errors, { variant: 'error' });
        }
        else {
          enqueueSnackbar('Sorry there was an error with the request', { variant: 'error' });
        }
      })
      .catch(err => enqueueSnackbar(`Sorry there was an error with that request: ${err}`, { variant: 'error' }));
  }, [dispatch, enqueueSnackbar]);
      
      
      
      

      //Login Function
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
  
  //Logout Function
  const logoutUser = useCallback(() => {
    console.log("I'm logging out the user")
    localStorage.clear('auth_token');
    dispatch({ type: 'LOGOUT_USER' });
  }, [])

  useEffect(() => {
    console.log("I'm in the useEffect for authtime")
    if (authIntervalTimer) {
      console.log("I'm about to clear the auth interval Timer")
      clearInterval(authIntervalTimer);
    }

    authIntervalTimer = setInterval(() => {
      console.log("I am in the setInteval")
      if (authTime && (Date.now() > authTime + TIMEOUT)) {
        console.log("I should be in this every 5 seconds")
        setAuthTime(null);
        logoutUser();
      }
    }, 1000);

    return () => clearInterval(authIntervalTimer);
  }, [authTime, logoutUser]);

  return { loginUser, logoutUser, signupUser}
}
