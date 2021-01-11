import React from 'react'
import {Card, CardImg, Button} from 'react-bootstrap'

const SampleCard = (props) => {

  const selectSample = (name) => {
   return console.log(`${name} was clicked!`)
  }

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.sample.image_url} alt={props.sample.sample_name} />
    <Card.Body>
      <Card.Title>{props.sample.sample_name}</Card.Title>
      <Card.Text>
        Click for details and ordering
      </Card.Text>
      <Button variant="primary" onClick={() => selectSample(props.sample.sample_name)}>Place Order</Button>
    </Card.Body>
  </Card>
  )
}

export default SampleCard 

    // <div>
    //     <img src={props.sample.image_url} alt={props.sample.sample_name}/>
    //     {props.sample.sample_name}
    // </div>