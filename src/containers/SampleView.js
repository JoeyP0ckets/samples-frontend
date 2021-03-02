import React from "react"
import {connect} from "react-redux"
import {Button} from "react-bootstrap"
import OrderView from '../containers/OrderView'


const SampleView = (props) => {
  
  return (
    <div className="sample-info-view">
      <h1>{props.selectedSample.sample_name}</h1>
      <img src={props.selectedSample.image_url} alt={props.selectedSample.sample_name}/>
      <div className="sample-info-container">
        <h4>{props.selectedSample.description}</h4>
        <h4>Sample Size: {props.selectedSample.sample_size}</h4>
      </div>
      <Button>Order Sample</Button>
    </div>
  )
}

const msp = state => {
  return {
    user: state.user,
    selectedSample: state.selectedSample,
    quantity: state.quantity
  }
}

const mdp = dispatch => {
  return {
    renderNewSample: (newSample) => dispatch({type:"RENDER_NEW_SAMPLE", newSample:newSample}),
    selectQuantity: (value) => dispatch({type:"SELECT_QUANTITY", value:value}),
    resetQuantity: () => dispatch({type:"RESET_QUANTITY"})
  }
}
export default connect(msp,mdp)(SampleView)