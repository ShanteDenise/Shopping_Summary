import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

 class TaxesFees extends Component {
  render() {
    return (
      <div>
          <Row className="show-grid">
            <Col md={6}>Est. Taxes & Fees </Col>
            <Col md={6}>{`$${this.props.taxes}`}</Col>
          </Row>
      </div>
    )
  }
}

export default TaxesFees;