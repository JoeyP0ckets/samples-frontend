const INTERVAL = 1000; 
const TIMEOUT = 60000; 

function checkTime() {
  if (localStorage.getItem('auth_token')) {
    console.log("I'm in the checktime function somehow")
    const authExpired = (Date.now() - parseInt(localStorage.getItem('auth-token-set-time'))) >= TIMEOUT;
    if (authExpired) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth-token-set-time');
      localStorage.removeItem('docusign_access_token');
    }
  }
}

// Set the auth token and the auth captured time
export function setAuthToken(authToken) {
  localStorage.setItem('auth_token', authToken);
  localStorage.setItem('auth-token-set-time', Date.now());
}

setInterval(checkTime, INTERVAL);