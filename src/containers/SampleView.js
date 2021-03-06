import React from 'react';
import {connect} from "react-redux"
import OrderView from '../containers/OrderView'


const SampleView = (props) => {
  
  const {sample_name, image_url, description, sample_size} = props.selectedSample  

  return (
    <div className="sample-info-view">
      <h1>{sample_name}</h1>
      <img src={image_url} alt={sample_name}/>
      <div className="sample-info-container">
        <h4>{description}</h4>
        <h4>Sample Size: {sample_size}</h4>
      </div>
      <OrderView/>
    </div>
  )
}

const msp = state => {
  return {
    user: state.user,
    selectedSample: state.selectedSample,
    quantity: state.quantity,
    seen: state.seen
  }
}




export default connect(msp,null)(SampleView)