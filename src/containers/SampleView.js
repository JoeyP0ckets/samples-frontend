import React from 'react';
import {connect} from "react-redux"
import OrderView from '../containers/OrderView'

const SampleView = (props) => {
  
  const {sample_name, image_url, description, sample_size} = props.selectedSample  

  return (
    
      <div id="sample-view-window">
        <h1 style={{ paddingTop: "20px", color: "whitesmoke", fontFamily: "Cinzel", fontWeight: "bold" }}>{sample_name}</h1>
        <img id="selected_sample_image" src={image_url} alt={sample_name} />
        <div className="sample-info-container">
        <div id="scroll-container">
          <div id="scroll-text">
            <h4 style={{ fontFamily: "Cinzel" }}>{description}</h4>
            <h4 style={{ fontFamily: "Cinzel" }}>Sample Size: {sample_size}</h4>
          </div>
        </div>
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