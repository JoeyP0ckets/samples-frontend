import React from "react"
import { connect } from "react-redux"
 
const UserSample = (props) => {
  const renderUserSamples = () => {

    return props.user.samples.map((sample, index) =>
      <li key={index}> 
         {sample.sample_name} - 
      </li>
    )
  }

  return (
    <div className="user-samples-container">
      <ul>
        {props.user.samples ? renderUserSamples() : null}
      </ul>
    </div>
  )
}

const msp = state => {
  return {
    user: state.user
  }
}

export default connect(msp)(UserSample)