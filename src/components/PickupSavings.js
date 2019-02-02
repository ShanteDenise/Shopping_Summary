import React, { Component } from "react";
import { Row, Col, OverlayTrigger } from "react-bootstrap";

var styles = {
  pickupSavings: {
    textDecoration: "underline"
  },
  totalSavings: {
    color: "red",
    fontWeight: 800
  }
};

class PickupSavings extends Component {
  render() {
   
      

    return (
      <div>
        <Row className="show-grid">
          <Col md={6}>
            <OverlayTrigger placement="bottom">
              <div>Pickup Savings</div>
            </OverlayTrigger>
          </Col>
          <Col style={styles.totalSavings} md={6}>{`$${this.props.price}`}</Col>
        </Row>
      </div>
    );
  }
}

export default PickupSavings;
