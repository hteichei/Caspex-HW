import PriceSummary from '../Components/PriceSummary';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(PriceSummary);
