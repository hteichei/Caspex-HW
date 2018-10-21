import React, { Component } from 'react';

class ItemDetailsCard extends Component {
  render() {
    const { title, img, quantity, price, shippingCost, currency } = this.props;
    return (
      <div>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <p>{title}</p>
          <p>
            <span>
              {currency}
              {price - shippingCost}
            </span>
            <span> </span>
            <span>{`Qty: ${quantity}`}</span>
          </p>
          <p style={{ color: 'grey', textDecoration: 'line-through' }}>
            {currency}
            {price}
          </p>
          <p />
        </div>
      </div>
    );
  }
}

export default ItemDetailsCard;
