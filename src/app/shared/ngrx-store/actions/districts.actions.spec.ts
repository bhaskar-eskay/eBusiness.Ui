import * as fromDistricts from './districts.actions';

describe('loadDistrictss', () => {
  it('should return an action', () => {
    expect(fromDistricts.loadDistrictss().type).toBe('[Districts] Load Districtss');
  });
});
