import React, { Component } from 'react';
import './PromoCodeForm.css';

class PromoCodeForm extends Component {
  state = { promoCode: '' };

  handleChange = evt => {
    this.setState({
      promoCode: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.promoCode === 'DISCOUNT') {
      this.props.applyPromotion();
    }
    this.setState({
      promoCode: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Promo Code</label>
          </div>
          <input
            type="text"
            name="promo"
            value={this.state.promoCode}
            onChange={this.handleChange}
          />
          <button className="applyBtn" type="submit">
            Apply
          </button>
        </form>
      </div>
    );
  }
}

export default PromoCodeForm;
