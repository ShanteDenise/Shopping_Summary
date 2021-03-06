import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";

class ItemDetail extends Component {
  state = {
    open: false
  };

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media id="item-card">
                <img
                  width={100}
                  height={100}
                  alt="thumbnail"
                  src="https://i5.walmartimages.com/asr/9898814f-8aea-47d7-a599-d80d0ba11781_1.308a8bc87d4ec569fd212318bfcb7aae.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                />
            <Media.Body>
              <p>
                Essentials by OFM ESS-3885 Racing Chair Leather Gaming Chair,
                Red
              </p>
              <Row className="show-grid">
                <Col md={6}>
                  <strong className="price-strike">
                    {`$${this.props.price}`}
                  </strong>
                </Col>
                <Col md={6}>Qty: 1</Col>
              </Row>
            </Media.Body>
            </Media>
          </div>
        </Collapse>
    
      </div>
    );
  }
}

export default ItemDetail;
