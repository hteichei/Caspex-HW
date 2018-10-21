import CheckoutCard from '../Components/CheckoutCard';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  return {
    items: state.items,
    currency: state.currency
  };
};

export default connect(mapStateToProps)(CheckoutCard);
