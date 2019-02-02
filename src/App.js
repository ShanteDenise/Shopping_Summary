import React, { Component } from 'react';
import {Col, Container} from 'react-bootstrap'
import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';
import TaxesFees from './components/TaxesFees';
import './App.css';


class App extends Component {

  state = {
    total: 100,
    PickupSavings: -3.85,
    taxes: 0
  }

  render() {
    return (
      <Container>
      <Col className="purchase-card">
      <Subtotal price={this.state.total.toFixed(2)}/>
      <PickupSavings price={this.state.PickupSavings}/>
      <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
      <hr />
      </Col>
    
      </Container>
    );
  }
}

export default App;
