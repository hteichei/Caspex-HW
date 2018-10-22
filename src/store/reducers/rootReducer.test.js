import { APPLY_PROMOTION } from '../actions/promoCode';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('sets promoApplied property to true', () => {
    const promoAction = {
      type: APPLY_PROMOTION
    };
    const expected = { promoApplied: true };

    expect(rootReducer({ promoApplied: false }, promoAction)).toEqual(expected);
  });

  it('returns default state', () => {
    expect(
      rootReducer({ applyPromotion: false }, { type: 'DUMMY_TYPE' })
    ).toEqual({ applyPromotion: false });
  });
});
