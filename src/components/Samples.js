import React from 'react'

class Samples extends React.Component {
  
  componentDidMount() {
    this.fetchSamples();
  }

  fetchSamples = () => {
    fetch ('http://localhost:3000/api/v1/samples')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  
  render() {
    return(
      <div>
        I'm the Samples page. I hold all drug info
      </div>
    )
  }
}

export default Samples