import { TestBed } from '@angular/core/testing';

import { RicettaServiceService } from './ricetta-service.service';

describe('RicettaServiceService', () => {
  let service: RicettaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RicettaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
