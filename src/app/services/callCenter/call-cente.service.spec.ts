import { TestBed } from '@angular/core/testing';

import { CallCenteService } from './call-cente.service';

describe('CallCenteService', () => {
  let service: CallCenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallCenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
