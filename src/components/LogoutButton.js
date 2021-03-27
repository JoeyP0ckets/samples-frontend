import React from 'react'

  const LogoutButton = () => {

    const logout = () => {
      localStorage.removeItem('auth_token')
    }

    return(
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    )
  }

  export default LogoutButton