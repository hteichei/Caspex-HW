import React, { Component } from 'react';
import './ItemDetailsCard.css';

class ItemDetailsCard extends Component {
  render() {
    const { title, img, quantity, price, shippingCost, currency } = this.props;
    return (
      <div className="detailsContainer">
        <div className="imgContainer">
          <img src={img} alt={title} />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>
            <span>
              {currency}
              {price - shippingCost}
            </span>
            <span> </span>
            <span className="qty">{`Qty: ${quantity}`}</span>
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
