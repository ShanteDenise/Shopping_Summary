import React, { Component } from 'react'
import { Row, Col} from 'reactstrap';

class Subtotal extends Component {
  render() {
    return (
      <div>
          <Row className="show-grid">
          <Col md={6}>Subtotal:</Col>
          <Col md={6}>{`$${this.props.price}`}</Col>
          
          
          </Row>

        
      </div>
    )
  }
}

export default Subtotal;