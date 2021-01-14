import React from "react"
import { connect } from "react-redux"
 
const UserSample = (props) => {
  
  const renderUserSamples = () => {
    return props.user.samples.map(sample =>
      <li> 
         {sample.sample_name}
      </li>
    )
  }

  return (
    <div>
      <ul>
        {renderUserSamples()}
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