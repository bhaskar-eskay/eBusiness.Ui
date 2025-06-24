import * as fromTaxCategory from './tax-category.actions';

describe('loadTaxCategorys', () => {
  it('should return an action', () => {
    expect(fromTaxCategory.loadTaxCategorys().type).toBe('[TaxCategory] Load TaxCategorys');
  });
});
