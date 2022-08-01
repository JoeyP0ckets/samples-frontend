import React from "react"
import { connect } from "react-redux"
import UserSample from "../containers/UserSamples"


const YourDoses = () => {

  return(
    <div className="user-samples-main">
      <div className="user-samples-header" style={{position: "sticky", top: "0", backgroundColor: "lightgrey"}}>
          <h3 style={{textAlign: "center", paddingTop: "10px", fontFamily: "Cinzel"}}>Your Doses</h3>
      </div>
      <div>
        <UserSample/> 
      </div>
    </div> 
  )
}

const msp = state => {
  return {
    user: state.user
  }
}

export default connect(msp)(YourDoses)