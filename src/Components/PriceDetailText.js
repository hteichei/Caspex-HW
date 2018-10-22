import React, { Component } from 'react';
import './PriceDetailText.css';

class PriceDetailText extends Component {
  render() {
    const {
      category,
      value,
      currency,
      minus,
      wrappedLine,
      discount,
      pickup,
      total
    } = this.props;
    return (
      <div className="priceDiv">
        <p className="priceContainer">
          <span className={pickup ? 'pickup' : total ? 'total' : ''}>
            {category}
          </span>{' '}
          <span
            className={discount ? 'value discount' : total ? 'total' : 'value'}
          >
            {minus && minus}
            {currency}
            {value}
          </span>
          {wrappedLine && <span>{wrappedLine}</span>}
        </p>
      </div>
    );
  }
}

export default PriceDetailText;
