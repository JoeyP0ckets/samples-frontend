import React from "react"
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();

  const selectWelcome = () => {
    history.push("/")
  }
  
  return (
    <div className="welcome-page">
      <h1>Welcome to First Dose.  Your first choice in sample ordering. ADS is committed to providing its clients with the 
          highest quality in bronchial asthmatic medication.  Create and account to order free samples of our latest offerings
      </h1>
      <button onClick={()=>selectWelcome()}>Enter Site</button>
    </div>
  )
}

export default Welcome