import React, { Component } from 'react';
import Expandable from './Expandable';
import PriceSummary from '../Containers/PriceSummaryContainer';
import ItemDetailsCard from './ItemDetailsCard';
import PromoCodeForm from '../Containers/PromoCodeFormContainer';

class CheckoutCard extends Component {
  render() {
    const { items, currency } = this.props;
    return (
      <div>
        <PriceSummary />
        <Expandable showTitle="See Item Details" hideTitle="Hide Item Details">
          {items.map((item, idx) => (
            <div key={idx}>
              <ItemDetailsCard
                title={item.title}
                img={item.img}
                quantity={item.quantity}
                currency={currency}
                price={item.price}
                shippingCost={item.shippingCost}
              />
              <hr />
            </div>
          ))}
        </Expandable>
        <Expandable showTitle="Apply Promo Code" hideTitle="Hide Promo Code">
          <PromoCodeForm />
        </Expandable>
      </div>
    );
  }
}

export default CheckoutCard;
