import React, { Component } from 'react'
import { Button, Collapse, Form, Col, FormGroup, Row} from 'react-bootstrap';
import { handleChange } from '../actions/promoCodeActions';
import { connect} from 'react-redux'


 class PromoCode extends Component {
     state ={
         open: false,
         value: ''
     }
  render() {
    return (
      <div>
          <Button
            className="promo-code-button"
            bsStyle="link"
            onClick={() => this.setState({open: !this.state.open})}>
            {this.state.open === false ? `Apply` : `Hide`}
            promo code
            {this.state.open === false ? `+ ` : `-`}
          </Button>
          <Collapse in={this.state.open}>
          <div>
              <Row className="show-grid">
              <Col md={12}>
              <Form>
                  <FormGroup controlId="formInlineName">
                  <Form.Label>Promo Code</Form.Label>
                  <Form.Control 
                  type="text"
                  placeholder="Enter promo code"
                  value={this.props.promoCode}
                  onChange={this.handleChange}
                  />
                  </FormGroup >
                  <Button
                  block 
                  bsStyle="sucesss"
                  className="btn-round"
                  disabled={this.props.isDisabled}
                  onClick={this.props.giveDiscount}
                  >Apply</Button>
              </Form>
              </Col>
              </Row>
          </div>
          
          
          </Collapse>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
  });
  
  export default connect(mapStateToProps, { handleChange })(PromoCode);