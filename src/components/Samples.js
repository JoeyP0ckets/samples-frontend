import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import SampleCard from '../containers/SampleCard'
import { Row, Col } from 'react-bootstrap'
import SampleView from '../containers/SampleView'
import { API_ROOT} from '../apiRoot'

const Samples = (props) =>  {
  
  useEffect(() => fetchSamples(), []);
  
  const fetchSamples = () => {
    fetch (`${API_ROOT}/samples`)
    .then(resp => resp.json())
    .then(allSamples => props.renderSamples(allSamples))
  }

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
          {props.selectedSample ? <SampleView selectedSample={props.selectedSample}/> : <h3 id="please_select">Please select a medication below.</h3>}
        </div>
      </div>
      <div className="samples-container">
        {props.allSamples ? renderAllSamples() : null}
      </div>
    </div>
      // <Row style={{height: "100vh"}}>
      //   <Col className="card-column" md="auto" style={{height: "100%", overflowY: "scroll"}}>
      //     <div className="samples-container">
      //       {props.allSamples ? renderAllSamples() : "No Samples to Load"}
      //     </div>
      //   </Col>
      //   <Col className="sample-column">
      //     <div className="sample-view">          
      //       {props.selectedSample ? <SampleView/> : <h1 style={{paddingTop: "30px", fontFamily: "Cinzel", fontWeight: "bold", color: "white"}}>Please Select a Sample</h1>}
      //     </div>
      //   </Col>
      // </Row>
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