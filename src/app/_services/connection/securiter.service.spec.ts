import { TestBed } from '@angular/core/testing';

import { SecuriterService } from './securiter.service';

describe('SecuriterService', () => {
  let service: SecuriterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuriterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
