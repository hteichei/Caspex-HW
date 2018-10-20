import APPLY_PROMOTION from './actions/promoCode';

const DEFAULT_STATE = {
  promoApplied: false,
  items: [
    {
      title: '',
      price: '',
      description: '',
      img: '',
      quantity: ''
    }
  ]
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case APPLY_PROMOTION:
      return { promoApplied: true };
    default:
      return state;
  }
};
