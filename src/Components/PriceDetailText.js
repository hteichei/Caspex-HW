import React, { Component } from 'react';

class PriceDetailText extends Component {
  render() {
    const { category, value, currency } = this.props;
    return (
      <div>
        <p>
          <span>{category}</span>{' '}
          <span>
            {currency}
            {value}
          </span>
        </p>
      </div>
    );
  }
}

export default PriceDetailText;
