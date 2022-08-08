import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const HomeContainer = () => {
 return(
  <div className="home-container">
      <div className="about-container">
          <div id="about-text">
            <h1 id="about-header">First Dose Fulfillment</h1>
            <div id="about-statement">
              Help Your Patients Breathe a Little Easier
            </div>
          </div>
        </div>
      <div className="doc-nav-container">
        <h1 style={{paddingTop: 50}}>Greetings, Doctor</h1>
      <Row id="your-row">
        <Col className="column"><h2>First Doses</h2>
          <div class="textBox">
            Shop from our selection of anti-bronchial medications. First Doses can be ordered and sent right to your office. 
          </div>
          <NavLink exact to="/Samples" className="col-nav">First Doses</NavLink>
        </Col>
        <Col className="column" id="column-right"><h2>Your Doses</h2>
          <div class="textBox">
            Keep track of your orders.  View information on your past orders as well as check the status of your current ones.
          </div>
          <NavLink exact to="/YourDoses" className="col-nav">Your Doses</NavLink>
        </Col>
      </Row>
    </div>
    <div className="contact-container">
     <div id="contact-text">
          
      </div>
     </div>
  </div>
 )
}

export default (HomeContainer)
