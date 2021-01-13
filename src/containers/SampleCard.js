import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { connect } from 'react-redux'

const SampleCard = (props) => {

  const sampleClick = (selectedSample) => {
   props.selectSample(selectedSample)
  }

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.sample.image_url} alt={props.sample.sample_name} />
    <Card.Body>
      <Card.Title>{props.sample.sample_name}</Card.Title>
      <Card.Text>
        Click for details and ordering
      </Card.Text>
      <Button variant="primary" onClick={() => sampleClick(props.sample)}>Place Order</Button>
    </Card.Body>
  </Card>
  )
}

const mdp = dispatch => {
  return {
    selectSample: (selectedSample) => dispatch({ type: "SELECT_SAMPLE", selectedSample: selectedSample})
  }
}

export default connect(null,mdp)(SampleCard)

  