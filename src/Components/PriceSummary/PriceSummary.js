import React, { Component } from 'react';
import PriceDetailText from '../PriceDetailText/PriceDetailText';
import Tooltip from '../Tooltip/Tooltip';

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

  getTotal = () => {
    const { price, shippingCost, taxes } = this.state;
    let total = price - shippingCost + taxes;
    //APPLY DISCOUNT IF CORRECT PROMO CODE IS ENTERED
    total = this.props.promoApplied ? (total * 0.9).toFixed(2) : total;
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
          category={
            <Tooltip tip="Picking up your order in store helps cut costs.">
              <span>Pickup Savings</span>
            </Tooltip>
          }
          minus="-"
          value={shippingCost}
          discount={true}
          pickup={true}
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
          category="Est. total"
          value={this.getTotal()}
          total={true}
        />
      </div>
    );
  }
}

export default PriceSummary;
