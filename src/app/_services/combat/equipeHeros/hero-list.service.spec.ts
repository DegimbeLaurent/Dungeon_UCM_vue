import { TestBed } from '@angular/core/testing';

import { HeroListService } from './hero-list.service';

describe('HeroListService', () => {
  let service: HeroListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
