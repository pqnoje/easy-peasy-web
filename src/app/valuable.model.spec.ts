import { Valuable } from './valuable.model';

describe('Valuable', () => {
  it('should create an instance', () => {
    expect(new Valuable('', '', 0)).toBeTruthy();
  });
});
