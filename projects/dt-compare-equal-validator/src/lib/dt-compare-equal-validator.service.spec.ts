import { TestBed } from '@angular/core/testing';

import { DtCompareEqualValidatorService } from './dt-compare-equal-validator.service';

describe('DtCompareEqualValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DtCompareEqualValidatorService = TestBed.get(DtCompareEqualValidatorService);
    expect(service).toBeTruthy();
  });
});
