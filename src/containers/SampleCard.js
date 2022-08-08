import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { connect } from 'react-redux'

const SampleCard = (props) => {

  const sampleClick = (selectedSample) => {
   props.selectSample(selectedSample)
  }

  const {sample_name, image_url, } = props.sample;

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image_url} alt={sample_name} />
    <Card.Body>
      <Card.Title style={{fontWeight: "bold"}}>{sample_name}</Card.Title>
      <Button variant="primary" onClick={() => sampleClick(props.sample)}>View Details</Button>
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

  