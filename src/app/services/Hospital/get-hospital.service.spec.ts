import { TestBed } from '@angular/core/testing';

import { GetHospitalService } from './get-hospital.service';

describe('GetHospitalService', () => {
  let service: GetHospitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHospitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
