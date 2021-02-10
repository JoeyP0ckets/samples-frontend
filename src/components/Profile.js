import React from "react"
import { connect } from "react-redux"

const Profile = (props) => {
  const {professional_title, name, address_1, address_2, state, city, zipcode, phone_number, license_id, email} = props.user

  return(
    <div className="profile-container">
     Name: {professional_title} {name}
     <br></br>
     Email: {email}
     <br></br>
     Address: {address_1}, {address_2} {city} {state} {zipcode}
     <br></br>
     Telephone: {phone_number}
     <br></br>
     License ID: {license_id}

    </div>
  )
}

const msp = state => {
  return {
    user: state.user
  }
}

export default connect(msp)(Profile)