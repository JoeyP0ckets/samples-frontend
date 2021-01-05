import React from 'react'
import {connect} from 'react-redux'

class Samples extends React.Component {
  
  componentDidMount() {
    this.fetchSamples();
  }

  fetchSamples = () => {
    fetch ('http://localhost:3000/api/v1/samples')
    .then(resp => resp.json())
    .then(allSamples => this.props.renderSamples(allSamples))
  }
  
  render() {
    return(
      <div>
        I'm the Samples page. I hold all drug info
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