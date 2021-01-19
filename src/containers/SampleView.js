import React from "react"
import {connect} from "react-redux"
import {Button} from "react-bootstrap"

const SampleView = (props) => {

  const orderClick = (sample) => {
    console.log(`${sample.sample_name} was clicked`)
  }
  
  return (
    <div className="sample-info-view">
      <h1>{props.selectedSample.sample_name}</h1>
<<<<<<< HEAD
      <img src={props.selectedSample.image_url} alt={props.selectedSample.sample_name}/>
      <h4>{props.selectedSample.description}</h4>
=======
>>>>>>> 961a2e84c632bae816efe173fbf91bade203345f
      <Button onClick={() => orderClick(props.selectedSample)}>Order Sample</Button>

    </div>
  )
}

const msp = state => {
  return {
    selectedSample: state.selectedSample
  }
}
export default connect(msp)(SampleView)