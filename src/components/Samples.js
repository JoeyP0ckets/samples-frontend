import React from 'react'
import {connect} from 'react-redux'
import SampleCard from '../containers/SampleCard'

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
      <div>
        {this.props.allSamples ? this.renderAllSamples() : null}
      </div>
    )
  }
}

const msp = state => {
  return {
    allSamples: state.allSamples
  }
}

const mdp = dispatch => {
  return {
    renderSamples: (allSamples) => dispatch({ type: "GET_ALL_SAMPLES", allSamples: allSamples})
  }
}

export default connect(msp,mdp)(Samples)