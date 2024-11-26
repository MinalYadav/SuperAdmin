import { TestBed } from '@angular/core/testing';

import { AllDepartmentService } from './all-department.service';

describe('AllDepartmentService', () => {
  let service: AllDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
