import { TestBed } from '@angular/core/testing';

import { LocalCustomersService } from './local-customers.service';

describe('LocalCustomersService', () => {
  let service: LocalCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
