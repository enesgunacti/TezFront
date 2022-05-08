import { TestBed } from '@angular/core/testing';

import { DoucmentService } from './doucment.service';

describe('DoucmentService', () => {
  let service: DoucmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoucmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
