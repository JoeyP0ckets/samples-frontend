import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import SampleCard from '../containers/SampleCard'
import SampleView from '../containers/SampleView'
import { API_ROOT} from '../apiRoot'



const Samples = (props) =>  {
  const fetchSamples = () => {
    fetch (`${API_ROOT}/samples`)
    .then(resp => resp.json())
    .then(allSamples => props.renderSamples(allSamples))
  }

  useEffect(() => fetchSamples(), []);
  
  
  const renderAllSamples = () => {
    return props.allSamples.map((sample, index) =>
      <SampleCard
        key={index}
        sample={sample}
      />
    )
  }
  
  return(
    <div className="first-doses-page">
      <div id="theatre">
        <div className="sample-view-container">
          {props.selectedSample ? <SampleView selectedSample={props.selectedSample}/> : <h3 id="please_select"> </h3>}
        </div>
      </div>
      <div className="samples-container">
        {props.allSamples ? renderAllSamples() : null}
      </div>
      <div className="contact-container">
     <div id="contact-text">
          
      </div>
     </div>
    </div>  
  )
}

const msp = state => {
  return {
    allSamples: state.allSamples,
    selectedSample: state.selectedSample,
    user: state.user
  }
}

const mdp = dispatch => {
  return {
    renderSamples: (allSamples) => dispatch({ type: "GET_ALL_SAMPLES", allSamples: allSamples})
  }
}

export default connect(msp,mdp)(Samples)