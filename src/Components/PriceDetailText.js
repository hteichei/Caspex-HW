import React, { Component } from 'react';

class PriceDetailText extends Component {
  render() {
    const { category, value, currency, minus, wrappedLine } = this.props;
    return (
      <div>
        <p>
          <span>{category}</span>{' '}
          <span>
            {minus && minus}
            {currency}
            {value}
          </span>
          <p>{wrappedLine && wrappedLine}</p>
        </p>
      </div>
    );
  }
}

export default PriceDetailText;
