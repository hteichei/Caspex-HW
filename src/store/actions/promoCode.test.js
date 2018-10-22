import { APPLY_PROMOTION, applyPromotion } from './promoCode';

describe('applyPromotion', () => {
  it('fires off an APPLY_PROMOTION action', () => {
    const expected = {
      type: APPLY_PROMOTION
    };

    expect(applyPromotion()).toEqual(expected);
  });
});
