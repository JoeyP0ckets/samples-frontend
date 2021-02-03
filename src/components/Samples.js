import React from 'react'
import {connect} from 'react-redux'
import SampleCard from '../containers/SampleCard'
import { Row, Col } from 'react-bootstrap'
import SampleView from '../containers/SampleView'

class Samples extends React.Component {
  
  componentDidMount() {
    this.fetchSamples();
  }

  fetchSamples = () => {
    fetch ('http://localhost:3000/api/v1/samples')
    .then(resp => resp.json())
    .then(allSamples => this.props.renderSamples(allSamples))
  }

  renderAllSamples = () => {
    return this.props.allSamples.map((sample, index) =>
      <SampleCard
        key={index}
        sample={sample}
      />
    )
  }
  
  render() {
    return(
      <Row>
        <Col className="card-column" md="auto">
          <div className="samples-container">
            {this.props.allSamples ? this.renderAllSamples() : "samples deleted from state"}
          </div>
        </Col>
        <Col className="sample-column">
          <div className="sample-view">          
            {this.props.selectedSample ? <SampleView/> : <h1>Please Select a Sample</h1>}
          </div>
        </Col>
      </Row>
    )
  }
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