import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import ContactFooter from './ContactFooter'
import {Container} from 'react-bootstrap'

const HomeContainer = () => {
 return(
  <Container className="home-container container-fluid">
      <Container className="about-container container-fluid box-fade">
        <div id="about-text" className="box-fade">
          <h1 id="about-header" className="grow-text">First Dose Fulfillment</h1>
          <div id="about-statement">
            Helping your patients breathe easier.
          </div>
        </div>
      </Container>

      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <h1 id="greeting-text">Greetings, Doctor!</h1>
      </div>

      <Container fluid className="doc-nav-container">
        <Row style={{ display: "flex", textAlign: "center" }}>
          <Col className="column-home" id="home-column-left"><h2>First Doses</h2>
            <div className="home-textbox">
              Shop from our selection of anti-bronchial medications. First Doses can be ordered and sent right to your office.
            </div>
            <NavLink exact to="/FirstDoses">First Doses</NavLink>
          </Col>
          <Col className="column-home" id="home-column-right"><h2>Your Doses</h2>
            <div className="home-textbox">
              Keep track of your orders.  View information on your past orders as well as check the status of your current ones.
            </div>
            <NavLink exact to="/YourDoses">Your Doses</NavLink>
          </Col>
        </Row>
      </Container>
      <ContactFooter/>
    </Container >
 )
}

export default (HomeContainer)
