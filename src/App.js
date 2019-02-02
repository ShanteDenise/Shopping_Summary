import React, { Component } from 'react';
import {Col, Container} from 'reactstrap';
import Subtotal from './components/Subtotal';
import './App.css';

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
      </Container>
    );
  }
}

export default App;
