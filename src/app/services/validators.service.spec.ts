import { TestBed, inject } from '@angular/core/testing';

import { ValidatorsService } from './validators.service';

describe('ValidatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorsService]
    });
  });

  it('should be created', inject([ValidatorsService], (service: ValidatorsService) => {
    expect(service).toBeTruthy();
  }));
});
