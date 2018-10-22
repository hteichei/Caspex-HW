import CheckoutCard from '../Components/CheckoutCard/CheckoutCard';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  return {
    items: state.items,
    currency: state.currency,
    zipCode: state.zipCode,
    promoApplied: state.promoApplied
  };
};

export default connect(mapStateToProps)(CheckoutCard);
