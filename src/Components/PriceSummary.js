import React, { Component } from 'react';
import PriceDetailText from './PriceDetailText';

class PriceSummary extends Component {
  state = {
    price: '',
    shippingCost: '',
    taxes: ''
  };

  componentDidMount() {
    this.getSubTotal();
    this.getPickupSavings();
    this.getTaxes();
  }

  calculate = field => {
    const { items } = this.props;
    const result = items.reduce((acc, obj) => {
      return acc + obj[field];
    }, 0);
    this.setState({
      [field]: result
    });
  };

  getPickupSavings = shippingCost => {
    return this.calculate('shippingCost');
  };

  getSubTotal = subTotal => {
    return this.calculate('price');
  };

  getTaxes = taxes => {
    return this.calculate('taxes');
  };

  //NEED TO FACTOR IN QUANTITY WHEN DOING CALCULATIONS!!!
  //NEED TO MAKE FUNCTION TO ROUND TO TWO DECIMALS!!!

  getTotal = () => {
    const { price, shippingCost, taxes } = this.state;
    let total = price - shippingCost + taxes;
    //APPLY DISCOUNT IF CORRECT PROMO CODE IS ENTERED
    total = this.props.promoApplied ? (total * 0.9).toFixed(2) : total;
    console.log(total);
    return total;
  };

  render() {
    const { currency, zipCode } = this.props;
    const { price, shippingCost, taxes } = this.state;
    return (
      <div>
        <h1>Checkout</h1>
        <PriceDetailText
          currency={currency}
          category="Sub Total"
          value={price}
        />
        <PriceDetailText
          currency={currency}
          category="Pickup Savings"
          minus="-"
          value={shippingCost}
        />
        <PriceDetailText
          currency={currency}
          category={`Est. taxes & fees`}
          wrappedLine={`(Based on ${zipCode})`}
          value={taxes}
        />
        <hr />
        <PriceDetailText
          currency={currency}
          category="Est. Total"
          value={this.getTotal()}
        />
      </div>
    );
  }
}

export default PriceSummary;
