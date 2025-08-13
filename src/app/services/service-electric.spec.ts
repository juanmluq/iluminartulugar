import { TestBed } from '@angular/core/testing';

import { ServiceElectric } from './service-electric';

describe('ServiceElectric', () => {
  let service: ServiceElectric;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceElectric);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
