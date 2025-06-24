import * as fromFirm from './firm.actions';

describe('loadFirms', () => {
  it('should return an action', () => {
    expect(fromFirm.loadFirms().type).toBe('[Firm] Load Firms');
  });
});
