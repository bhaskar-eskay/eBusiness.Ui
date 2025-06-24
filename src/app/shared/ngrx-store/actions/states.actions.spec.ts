import * as fromStates from './states.actions';

describe('loadStatess', () => {
  it('should return an action', () => {
    expect(fromStates.loadStatess().type).toBe('[States] Load Statess');
  });
});
