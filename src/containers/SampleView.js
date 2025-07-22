import React from 'react';
import {connect} from "react-redux"
import OrderView from '../containers/OrderView'


const SampleView = (props) => {
  
  const {sample_name, image_url, description, sample_size} = props.selectedSample  

  return (
    
    <div id="sample-view-window">
    <h1 style={{ paddingTop: "20px", color: "whitesmoke", fontWeight: "bold" }}>{sample_name} (revefenacin) </h1>
    <img id="selected_sample_image" className="fade-in-image" src={image_url} alt={sample_name} />
    <div className="sample-info-container">
      <div id="scroll-container">
        <div id="scroll-text" className="fade-in-image">
          <h4>{description}</h4>
          <h4>Sample Size: {sample_size}</h4>
        </div>
      </div>
      <OrderView/>
    </div>
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