import { TestBed } from '@angular/core/testing';

import { HizmetService } from './hizmet.service';

describe('HizmetService', () => {
  let service: HizmetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HizmetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
