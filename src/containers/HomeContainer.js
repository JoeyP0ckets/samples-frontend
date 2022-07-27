import React from 'react';
import { Row, Col } from 'react-bootstrap';

const HomeContainer = () => {
 return(
  <div className="home-container">
      <div className="about-container">
          <div id="about-text">
            <h1 id="about-header">First Dose</h1>
            <div id="about-statement">
              Help Your Patients Breathe a Little Easier
            </div>
          </div>
        </div>
      <div className="doc-nav-container">
        <h1>Greetings, Doctor</h1>
      <Row id="your-row">
        <Col className="column"><h2>First Doses</h2>
          <div class="textBox">
            Shop from our selection of anti-bronchial medications. First Doses can be ordered and sent right to your office. 
          </div>
        </Col>
        <Col className="column" id="column-right"><h2>Your Doses</h2>
          <div class="textBox">
            Keep track of your orders.  View information on your past orders as well as check the status of your current ones.
          </div>
        </Col>
      </Row>
    </div>
    <div className="contact-container">
        <div id="contact-text">
          <h1 id="contact-header">Contact Info</h1>
          <div id="contact-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
  </div>
 )
}

export default (HomeContainer)
