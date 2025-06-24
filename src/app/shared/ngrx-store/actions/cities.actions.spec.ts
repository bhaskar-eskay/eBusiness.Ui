import * as fromCities from './cities.actions';

describe('loadCitiess', () => {
  it('should return an action', () => {
    expect(fromCities.loadCitiess().type).toBe('[Cities] Load Citiess');
  });
});
