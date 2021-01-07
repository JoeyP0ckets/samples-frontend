import React from 'react'
import {Card, CardImg, Button} from 'react-bootstrap'

const SampleCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.sample.image_url} alt={props.sample.sample_name} />
    <Card.Body>
      <Card.Title>{props.sample.sample_name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Place Order</Button>
    </Card.Body>
  </Card>
  )
}

export default SampleCard 

    // <div>
    //     <img src={props.sample.image_url} alt={props.sample.sample_name}/>
    //     {props.sample.sample_name}
    // </div>