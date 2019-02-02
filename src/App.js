import React, { Component } from 'react';
import {Col, Container} from 'react-bootstrap'
import Subtotal from './components/Subtotal';
import './App.css';
import PickupSavings from './components/PickupSavings';

class App extends Component {

  state = {
    total: 100
  }

  render() {
    return (
      <Container>
      <Col className="purchase-card">
      <Subtotal price={this.state.total.toFixed(2)}/>
      </Col>
      <Col>
      <PickupSavings/>
      
      </Col>
      </Container>
    );
  }
}

export default App;
