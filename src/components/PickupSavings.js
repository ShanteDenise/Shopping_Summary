import React, { Component } from 'react';
import {Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';

 class PickupSavings extends Component {
  render() {
      
    return (
      <div>
           <Tooltip id="tooltip">
      <p>Picking up ypur savings in the store helps cut costs, and we pass the savings on to you</p>
      </Tooltip>
       
      <Row className="show-grid">
      <Col md={6}>
        <OverlayTrigger placement="bottom">
            <div>Pickup Savings</div>
        </OverlayTrigger>
      
      
      
      </Col>
      <Col md={6}>{`$${this.props.price}`}</Col>
      
      </Row>
        
      </div>
    )
  }
}

export default PickupSavings;