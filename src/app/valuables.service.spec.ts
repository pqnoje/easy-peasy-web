import { TestBed } from '@angular/core/testing';

import { ValuablesService } from './valuables.service';

describe('ValuablesService', () => {
  let service: ValuablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValuablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
