import React from "react"
import { connect } from "react-redux"
import UserSample from "../containers/UserSamples"


const YourDoses = (props) => {
  // const {professional_title, name, address_1, address_2, state, city, zipcode, phone_number, license_id, email} = props.user

  return(
    // <h3 style={{paddingTop: "20px", paddingLeft: "75px", fontFamily: "Cinzel", textAlign: "left", color: "whitesmoke"}}>Welcome, Dr. {props.user ? props.user.name : null}</h3>

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