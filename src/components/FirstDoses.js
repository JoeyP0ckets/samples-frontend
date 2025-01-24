import React, { useEffect, useCallback } from 'react'
import {connect} from 'react-redux'
import SampleCard from '../containers/SampleCard'
import SampleView from '../containers/SampleView'
import { API_ROOT} from '../apiRoot'
import ContactFooter from '../containers/ContactFooter'



const FirstDoses = (props) =>  {
 
  // Destructure renderSamples from props
  const { renderSamples, allSamples, selectedSample } = props;

  // Memoized fetchSamples function
  const fetchSamples = useCallback(() => {
    fetch(`${API_ROOT}/samples`)
      .then((resp) => resp.json())
      .then((allSamples) => renderSamples(allSamples)); // Use destructured renderSamples
  }, [renderSamples]); // Only depends on renderSamples

  // Fetch samples on mount
  useEffect(() => {
    fetchSamples();
  }, [fetchSamples]); // FetchSamples is stable and won't cause unnecessary re-renders  

  
  
  const renderAllSamples = () => {
    return allSamples.map((sample, index) =>
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
          {selectedSample ? <SampleView selectedSample={selectedSample}/> : <h3 id="please_select"> </h3>}
        </div>
      </div>
      <div id="please-select-sample-header">Please select a medication below.</div>
      <div className="samples-container">
        {renderAllSamples()}
      </div>
      <ContactFooter/>
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

export default connect(msp,mdp)(FirstDoses);

