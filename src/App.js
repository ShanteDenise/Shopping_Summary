import React, { Component } from 'react';
import {Col, Container} from 'react-bootstrap'
import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';
import TaxesFees from './components/TaxesFees';
import ItemDetail from './components/ItemDetail';
import './App.css';
import EstimatedTotal from './components/EstimatedTotal';
import PromoCode from './components/PromoCode';

import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions'

class App extends Component {

  state = {
    total: 100,
    PickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0,
    disabledPromoButton: false
  }

  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.PickupSavings) * 0.07
    },
    function(){
      this.setState({
        estimatedTotal: this.state.total + this.state.PickupSavings + this.state.taxes 
      })
    })
  }
  giveDiscountHandler = () => {
    if (this.props.romoCode === 'DISCOUNT') {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };
  

  render() {
    return (
      <Container>
      <Col className="purchase-card">
      <Subtotal price={this.state.total.toFixed(2)}/>
      <PickupSavings price={this.state.PickupSavings}/>
      <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
      <hr />
      <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
      <ItemDetail price={this.state.estimatedTotal.toFixed(2)}/>
      <hr />
      <PromoCode
        giveDiscount={() => this.giveDiscountHandler()}
        isDisabled={this.state.disabledPromoButton}
        />
      </Col>
    
      </Container>
      
    );
  }
}
const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange})(App)

