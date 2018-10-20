import { APPLY_PROMOTION } from '../actions/promoCode';

const DEFAULT_STATE = {
  promoApplied: false,
  currency: '$',
  items: [
    {
      title: 'OFM Essentials Racecar-Style Leather Gaming Chair',
      price: 102.96,
      shippingCost: 3.85,
      taxes: 8.92,
      zipCode: 94085,
      description:
        'A race car style chair that provides luxury and comfort whether used during intense gaming sessions or long workdays',
      img:
        'https://i5.walmartimages.com/asr/58ed28c8-42fa-4966-902c-292940257bb1_1.ef2b733f30c41bfa79d99303e6a11627.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
      quantity: 1
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

export default rootReducer;
