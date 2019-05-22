import { TestBed } from '@angular/core/testing';

import { FrontalService } from './frontal.service';

describe('FrontalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontalService = TestBed.get(FrontalService);
    expect(service).toBeTruthy();
  });
});
