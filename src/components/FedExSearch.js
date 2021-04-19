import React from "react"
import { Form, FormControl, Button } from "react-bootstrap"

const FedExSearch = () => {
  
  return (
  <div>
    <h3>This is the fedex portal</h3>
    <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
  </Form>
  </div>
  )
}

export default FedExSearch