import * as fromFirmPreferences from './firm-preferences.actions';

describe('loadFirmPreferencess', () => {
  it('should return an action', () => {
    expect(fromFirmPreferences.loadFirmPreferencess().type).toBe('[FirmPreferences] Load FirmPreferencess');
  });
});
