import { TestBed } from '@angular/core/testing';

import { UpdateHospitalService } from './update-hospital.service';

describe('UpdateHospitalService', () => {
  let service: UpdateHospitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateHospitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
