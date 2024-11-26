import { TestBed } from '@angular/core/testing';

import { AddAuthorityService } from './add-authority.service';

describe('AddAuthorityService', () => {
  let service: AddAuthorityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAuthorityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
