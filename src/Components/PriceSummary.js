import React, { Component } from 'react';
import PriceDetailText from './PriceDetailText';

class PriceSummary extends Component {
  state = {
    subTotal: '',
    pickupSavings: '',
    taxes: ''
  };
  // calculate = field => {
  //   const { items } = this.props;
  //   const result = items.reduce((acc, obj) => {
  //     return acc + obj[field];
  //   }, 0);
  //   console.log('result', result);
  //   return result;
  // };

  // getPickupSavings = shippingCost => {
  //   return this.calculate(shippingCost);
  // };

  componentDidMount() {
    this.getSubTotal();
    this.getPickupSavings();
    this.getTaxes();
  }

  getSubTotal = () => {
    const { items } = this.props;
    const result = items.reduce((acc, obj) => {
      return acc + obj.price;
    }, 0);
    this.setState({
      subTotal: result
    });
    return result;
  };

  getPickupSavings = () => {
    const { items } = this.props;
    const result = items.reduce((acc, obj) => {
      return acc + obj.shippingCost;
    }, 0);
    this.setState({
      pickupSavings: result
    });
    return result;
  };

  getTaxes = () => {
    const { items } = this.props;
    const result = items.reduce((acc, obj) => {
      return acc + obj.taxes;
    }, 0);
    this.setState({
      taxes: result
    });
    return result;
  };

  getTotal = () => {
    const { subTotal, pickupSavings, taxes } = this.state;
    const total = subTotal - pickupSavings + taxes;
    return total;
  };

  render() {
    const { currency } = this.props;
    const { subTotal, pickupSavings, taxes } = this.state;
    return (
      <div>
        <h1>Checkout</h1>
        <PriceDetailText
          currency={currency}
          category="Sub Total"
          value={subTotal}
        />
        <PriceDetailText
          currency={currency}
          category="Pickup Savings"
          value={pickupSavings}
        />
        <PriceDetailText currency={currency} category="Taxes" value={taxes} />
        <PriceDetailText
          currency={currency}
          category="Total"
          value={this.getTotal()}
        />
      </div>
    );
  }
}

export default PriceSummary;
