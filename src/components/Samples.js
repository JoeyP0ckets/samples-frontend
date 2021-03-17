import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import SampleCard from '../containers/SampleCard'
import { Row, Col } from 'react-bootstrap'
import SampleView from '../containers/SampleView'

const Samples = (props) =>  {
  
  useEffect(() => fetchSamples(), []);


  const fetchSamples = () => {
    fetch ('http://localhost:3000/api/v1/samples')
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
      <Row>
        <Col className="card-column" md="auto">
          <div className="samples-container">
            {props.allSamples ? renderAllSamples() : "samples deleted from state"}
          </div>
        </Col>
        <Col className="sample-column">
          <div className="sample-view">          
            {props.selectedSample ? <SampleView/> : <h1>Please Select a Sample</h1>}
          </div>
        </Col>
      </Row>
    )
}

const msp = state => {
  return {
    allSamples: state.allSamples,
    selectedSample: state.selectedSample
  }
}

const mdp = dispatch => {
  return {
    renderSamples: (allSamples) => dispatch({ type: "GET_ALL_SAMPLES", allSamples: allSamples})
  }
}

export default connect(msp,mdp)(Samples)