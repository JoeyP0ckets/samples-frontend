import React from "react"
import {connect} from "react-redux"

const SampleView = (props) => {
  return (
    <div classname="sample-view">
      {props.selectedSample ? props.selectedSample.sample_name : "Please select a sample"}
    </div>
  )
}

const msp = state => {
  return {
    selectedSample: state.selectedSample
  }
}
export default connect(msp)(SampleView)